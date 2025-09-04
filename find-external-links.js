const fs = require('fs');
const path = require('path');

// Configuración
const CONFIG = {
  scanDirs: ['app', 'components', 'public'],
  fileExtensions: ['.tsx', '.ts', '.js', '.jsx', '.html', '.md'],
  outputFile: 'external-links-report.json'
};

// Patrones para encontrar enlaces externos
const LINK_PATTERNS = [
  // Enlaces href
  /href=["'](https?:\/\/[^"']+)["']/g,
  // Enlaces src
  /src=["'](https?:\/\/[^"']+)["']/g,
  // URLs en CSS
  /url\(["']?(https?:\/\/[^"']+)["']?\)/g,
  // Enlaces en texto plano
  /(https?:\/\/[^\s<>"']+)/g,
  // Enlaces en markdown
  /\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g
];

class ExternalLinkFinder {
  constructor() {
    this.externalLinks = new Map();
    this.processedFiles = 0;
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }

  extractDomain(url) {
    try {
      return new URL(url).hostname.toLowerCase();
    } catch (error) {
      return 'invalid-url';
    }
  }

  processFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const relativePath = path.relative(process.cwd(), filePath);
      
      for (const pattern of LINK_PATTERNS) {
        const matches = [...content.matchAll(pattern)];
        
        for (const match of matches) {
          let url;
          let linkText = '';
          
          if (match.length > 2) {
            // Patrón de markdown [texto](url)
            linkText = match[1];
            url = match[2];
          } else {
            // Otros patrones
            url = match[1] || match[0];
          }
          
          // Limpiar URL
          url = url.replace(/['"`]/g, '').trim();
          
          // Verificar que sea una URL válida
          if (url.startsWith('http://') || url.startsWith('https://')) {
            const domain = this.extractDomain(url);
            
            if (!this.externalLinks.has(domain)) {
              this.externalLinks.set(domain, {
                domain: domain,
                urls: new Set(),
                files: new Set(),
                count: 0
              });
            }
            
            const domainData = this.externalLinks.get(domain);
            domainData.urls.add(url);
            domainData.files.add(relativePath);
            domainData.count++;
          }
        }
      }
      
      this.processedFiles++;
    } catch (error) {
      this.log(`❌ Error procesando ${filePath}: ${error.message}`);
    }
  }

  scanDirectory(dirPath) {
    try {
      const items = fs.readdirSync(dirPath);
      
      for (const item of items) {
        const fullPath = path.join(dirPath, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          this.scanDirectory(fullPath);
        } else if (stat.isFile()) {
          const ext = path.extname(item);
          if (CONFIG.fileExtensions.includes(ext)) {
            this.processFile(fullPath);
          }
        }
      }
    } catch (error) {
      this.log(`❌ Error escaneando directorio ${dirPath}: ${error.message}`);
    }
  }

  generateReport() {
    const report = {
      summary: {
        processedFiles: this.processedFiles,
        totalDomains: this.externalLinks.size,
        totalLinks: Array.from(this.externalLinks.values()).reduce((sum, domain) => sum + domain.count, 0)
      },
      domains: []
    };

    // Convertir Map a Array y ordenar por frecuencia
    for (const [domain, data] of this.externalLinks) {
      report.domains.push({
        domain: domain,
        urls: Array.from(data.urls),
        files: Array.from(data.files),
        count: data.count
      });
    }

    // Ordenar por frecuencia de uso
    report.domains.sort((a, b) => b.count - a.count);

    // Guardar reporte
    fs.writeFileSync(CONFIG.outputFile, JSON.stringify(report, null, 2));
    
    // Mostrar resumen
    this.log('\n' + '='.repeat(60));
    this.log('📊 REPORTE DE ENLACES EXTERNOS');
    this.log('='.repeat(60));
    this.log(`📁 Archivos procesados: ${report.summary.processedFiles}`);
    this.log(`🌐 Dominios únicos: ${report.summary.totalDomains}`);
    this.log(`🔗 Enlaces totales: ${report.summary.totalLinks}`);
    
    this.log('\n📈 TOP 10 DOMINIOS MÁS USADOS:');
    report.domains.slice(0, 10).forEach((domain, index) => {
      this.log(`  ${index + 1}. ${domain.domain} (${domain.count} enlaces)`);
    });
    
    this.log('\n🎯 DOMINIOS GUBERNAMENTALES:');
    const govDomains = report.domains.filter(d => 
      d.domain.includes('.gob.ar') || 
      d.domain.includes('.gov.ar') ||
      d.domain.includes('ansv') ||
      d.domain.includes('dnrpa')
    );
    
    if (govDomains.length > 0) {
      govDomains.forEach(domain => {
        this.log(`  🏛️  ${domain.domain} (${domain.count} enlaces)`);
        domain.urls.slice(0, 3).forEach(url => {
          this.log(`     - ${url}`);
        });
        if (domain.urls.length > 3) {
          this.log(`     ... y ${domain.urls.length - 3} más`);
        }
      });
    } else {
      this.log('  ⚠️  No se encontraron dominios gubernamentales');
    }
    
    this.log(`\n📝 Reporte completo guardado en: ${CONFIG.outputFile}`);
    this.log('='.repeat(60));
    
    return report;
  }

  run() {
    this.log('🔍 Iniciando búsqueda de enlaces externos...');
    
    for (const dir of CONFIG.scanDirs) {
      if (fs.existsSync(dir)) {
        this.log(`📂 Escaneando: ${dir}`);
        this.scanDirectory(dir);
      } else {
        this.log(`⚠️  Directorio no encontrado: ${dir}`);
      }
    }
    
    return this.generateReport();
  }
}

// Ejecutar si se llama directamente
if (require.main === module) {
  const finder = new ExternalLinkFinder();
  finder.run();
}

module.exports = ExternalLinkFinder;
