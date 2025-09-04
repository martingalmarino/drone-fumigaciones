const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// Configuración
const CONFIG = {
  // Directorios a escanear
  scanDirs: [
    'app',
    'components',
    'public'
  ],
  // Extensiones de archivos a procesar
  fileExtensions: ['.tsx', '.ts', '.js', '.jsx', '.html', '.md'],
  // Patrones de enlaces a buscar
  linkPatterns: [
    /href=["'](https?:\/\/[^"']+)["']/g,
    /src=["'](https?:\/\/[^"']+)["']/g,
    /url\(["']?(https?:\/\/[^"']+)["']?\)/g
  ],
  // Timeout para requests HTTP
  timeout: 5000,
  // Reintentos para URLs que fallan
  maxRetries: 2,
  // Archivo de log
  logFile: 'crawler-404.log'
};

// URLs de reemplazo comunes
const REPLACEMENT_URLS = {
  // Sitios gubernamentales argentinos
  'www.argentina.gob.ar': 'https://www.argentina.gob.ar/',
  'www.ansv.gob.ar': 'https://www.ansv.gob.ar/',
  'www.dnrpa.gov.ar': 'https://www.dnrpa.gov.ar/',
  
  // Sitios de grabado de autopartes
  'www.grabadoautopartes.com': 'https://www.grabadoautopartes.com.ar/',
  'grabadoautopartes.com': 'https://www.grabadoautopartes.com.ar/',
  
  // Sitios de turnos
  'turnos.ansv.gob.ar': 'https://turnos.ansv.gob.ar/',
  'turnos.dnrpa.gov.ar': 'https://turnos.dnrpa.gov.ar/',
  
  // Sitios de consulta
  'consultas.ansv.gob.ar': 'https://consultas.ansv.gob.ar/',
  'consultas.dnrpa.gov.ar': 'https://consultas.dnrpa.gov.ar/'
};

class LinkCrawler {
  constructor() {
    this.brokenLinks = [];
    this.fixedLinks = [];
    this.processedFiles = 0;
    this.totalLinks = 0;
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}`;
    console.log(logMessage);
    
    // Escribir al archivo de log
    fs.appendFileSync(CONFIG.logFile, logMessage + '\n');
  }

  async checkUrl(url) {
    return new Promise((resolve) => {
      const protocol = url.startsWith('https:') ? https : http;
      const request = protocol.get(url, { timeout: CONFIG.timeout }, (response) => {
        resolve({
          status: response.statusCode,
          working: response.statusCode >= 200 && response.statusCode < 400
        });
      });

      request.on('error', () => {
        resolve({ status: 0, working: false });
      });

      request.on('timeout', () => {
        request.destroy();
        resolve({ status: 0, working: false });
      });
    });
  }

  async checkUrlWithRetries(url) {
    for (let i = 0; i < CONFIG.maxRetries; i++) {
      const result = await this.checkUrl(url);
      if (result.working) {
        return result;
      }
      // Esperar un poco antes del siguiente intento
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    return { status: 0, working: false };
  }

  findReplacementUrl(originalUrl) {
    try {
      const url = new URL(originalUrl);
      const hostname = url.hostname.toLowerCase();
      
      // Buscar reemplazo exacto
      if (REPLACEMENT_URLS[hostname]) {
        return REPLACEMENT_URLS[hostname];
      }
      
      // Buscar reemplazo parcial
      for (const [key, replacement] of Object.entries(REPLACEMENT_URLS)) {
        if (hostname.includes(key) || key.includes(hostname)) {
          return replacement;
        }
      }
      
      // Si es un sitio gubernamental argentino, intentar con HTTPS
      if (hostname.includes('.gob.ar') || hostname.includes('.gov.ar')) {
        return `https://${hostname}/`;
      }
      
      return null;
    } catch (error) {
      return null;
    }
  }

  async processFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      let modifiedContent = content;
      let hasChanges = false;

      for (const pattern of CONFIG.linkPatterns) {
        const matches = [...content.matchAll(pattern)];
        
        for (const match of matches) {
          const fullMatch = match[0];
          const url = match[1];
          this.totalLinks++;

          // Verificar si la URL funciona
          const result = await this.checkUrlWithRetries(url);
          
          if (!result.working) {
            this.brokenLinks.push({
              file: filePath,
              url: url,
              status: result.status,
              match: fullMatch
            });

            // Buscar reemplazo
            const replacement = this.findReplacementUrl(url);
            if (replacement) {
              const newMatch = fullMatch.replace(url, replacement);
              modifiedContent = modifiedContent.replace(fullMatch, newMatch);
              hasChanges = true;
              
              this.fixedLinks.push({
                file: filePath,
                original: url,
                replacement: replacement,
                status: result.status
              });

              this.log(`✅ REPARADO: ${url} → ${replacement} en ${filePath}`);
            } else {
              this.log(`❌ NO REPARADO: ${url} en ${filePath} (status: ${result.status})`);
            }
          } else {
            this.log(`✅ OK: ${url} en ${filePath}`);
          }
        }
      }

      // Guardar archivo si hubo cambios
      if (hasChanges) {
        fs.writeFileSync(filePath, modifiedContent, 'utf8');
        this.log(`💾 ARCHIVO ACTUALIZADO: ${filePath}`);
      }

      this.processedFiles++;
    } catch (error) {
      this.log(`❌ ERROR procesando ${filePath}: ${error.message}`);
    }
  }

  async scanDirectory(dirPath) {
    try {
      const items = fs.readdirSync(dirPath);
      
      for (const item of items) {
        const fullPath = path.join(dirPath, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          await this.scanDirectory(fullPath);
        } else if (stat.isFile()) {
          const ext = path.extname(item);
          if (CONFIG.fileExtensions.includes(ext)) {
            await this.processFile(fullPath);
          }
        }
      }
    } catch (error) {
      this.log(`❌ ERROR escaneando directorio ${dirPath}: ${error.message}`);
    }
  }

  async run() {
    this.log('🚀 Iniciando crawler de enlaces 404...');
    this.log(`📁 Directorios a escanear: ${CONFIG.scanDirs.join(', ')}`);
    this.log(`📄 Extensiones: ${CONFIG.fileExtensions.join(', ')}`);
    
    // Limpiar archivo de log anterior
    if (fs.existsSync(CONFIG.logFile)) {
      fs.unlinkSync(CONFIG.logFile);
    }

    // Escanear directorios
    for (const dir of CONFIG.scanDirs) {
      if (fs.existsSync(dir)) {
        this.log(`📂 Escaneando: ${dir}`);
        await this.scanDirectory(dir);
      } else {
        this.log(`⚠️  Directorio no encontrado: ${dir}`);
      }
    }

    // Generar reporte final
    this.generateReport();
  }

  generateReport() {
    this.log('\n' + '='.repeat(60));
    this.log('📊 REPORTE FINAL DEL CRAWLER');
    this.log('='.repeat(60));
    this.log(`📁 Archivos procesados: ${this.processedFiles}`);
    this.log(`🔗 Enlaces totales encontrados: ${this.totalLinks}`);
    this.log(`❌ Enlaces rotos encontrados: ${this.brokenLinks.length}`);
    this.log(`✅ Enlaces reparados: ${this.fixedLinks.length}`);
    this.log(`⚠️  Enlaces no reparados: ${this.brokenLinks.length - this.fixedLinks.length}`);

    if (this.fixedLinks.length > 0) {
      this.log('\n🔧 ENLACES REPARADOS:');
      this.fixedLinks.forEach(link => {
        this.log(`  ✅ ${link.original} → ${link.replacement}`);
        this.log(`     📁 ${link.file}`);
      });
    }

    if (this.brokenLinks.length > this.fixedLinks.length) {
      this.log('\n❌ ENLACES NO REPARADOS:');
      this.brokenLinks.forEach(link => {
        if (!this.fixedLinks.some(fixed => fixed.original === link.url)) {
          this.log(`  ❌ ${link.url} (status: ${link.status})`);
          this.log(`     📁 ${link.file}`);
        }
      });
    }

    this.log('\n🎯 RECOMENDACIONES:');
    if (this.fixedLinks.length > 0) {
      this.log('  ✅ Se repararon enlaces automáticamente');
    }
    if (this.brokenLinks.length > this.fixedLinks.length) {
      this.log('  ⚠️  Revisar manualmente los enlaces no reparados');
      this.log('  💡 Considerar agregar más URLs de reemplazo en REPLACEMENT_URLS');
    }
    
    this.log('\n📝 Log completo guardado en: ' + CONFIG.logFile);
    this.log('='.repeat(60));
  }
}

// Ejecutar crawler
async function main() {
  const crawler = new LinkCrawler();
  await crawler.run();
}

// Ejecutar si se llama directamente
if (require.main === module) {
  main().catch(console.error);
}

module.exports = LinkCrawler;
