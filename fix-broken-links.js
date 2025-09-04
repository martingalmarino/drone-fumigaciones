const fs = require('fs');
const path = require('path');

// Mapeo de URLs rotas a URLs correctas basado en el reporte
const URL_FIXES = {
  // ANSV - URLs que no existen, reemplazar con sitio principal
  'https://www.ansv.gob.ar/': 'https://www.argentina.gob.ar/',
  'https://turnos.ansv.gob.ar/': 'https://www.argentina.gob.ar/',
  'https://consultas.ansv.gob.ar/': 'https://www.argentina.gob.ar/',
  
  // DNRPA - URLs que no existen, reemplazar con sitio principal
  'https://www.dnrpa.gov.ar/': 'https://www.argentina.gob.ar/',
  'https://turnos.dnrpa.gov.ar/': 'https://www.argentina.gob.ar/',
  'https://consultas.dnrpa.gov.ar/': 'https://www.argentina.gob.ar/',
  
  // URLs provinciales que redirigen
  'https://www.buenosaires.gob.ar/': 'https://buenosaires.gob.ar/',
  'https://www.cordoba.gov.ar/': 'https://www.cordoba.gob.ar/',
  'https://www.salta.gov.ar/': 'https://www.salta.gob.ar/',
  'https://www.entrerios.gov.ar/': 'https://portal.entrerios.gov.ar/',
  'https://www.rionegro.gov.ar/': 'https://rionegro.gov.ar/',
  'https://www.chubut.gov.ar/': 'https://www.chubut.gob.ar/',
  'https://www.santacruz.gov.ar/': 'https://www.santacruz.gob.ar/',
  'https://www.sanjuan.gov.ar/': 'https://sj.sanjuan.gob.ar/',
  'https://www.catamarca.gov.ar/': 'https://portal.catamarca.gob.ar/',
  
  // URLs que no funcionan, reemplazar con alternativas
  'https://www.cba.gov.ar/': 'https://www.cordoba.gob.ar/',
  'https://www.corrientes.gov.ar/': 'https://www.argentina.gob.ar/',
  'https://www.formosa.gov.ar/': 'https://www.argentina.gob.ar/',
  'https://www.misiones.gov.ar/': 'https://www.argentina.gob.ar/',
  'https://www.neuquen.gov.ar/': 'https://www.argentina.gob.ar/',
  'https://www.tierradelfuego.gov.ar/': 'https://www.argentina.gob.ar/',
  'https://www.lapampa.gov.ar/': 'https://www.argentina.gob.ar/',
  'https://www.la-rioja.gov.ar/': 'https://www.larioja.gov.ar/',
  'https://www.santiago.gov.ar/': 'https://www.argentina.gob.ar/',
  'https://www.jujuy.gov.ar/': 'https://www.jujuy.gob.ar/',
  
  // URLs de Vercel que deben apuntar al dominio principal
  'https://grabado-autopartes-argentina.vercel.app': 'https://www.grabadoautopartes.com.ar',
  'https://grabado-autopartes-argentina.vercel.app/': 'https://www.grabadoautopartes.com.ar/',
  'https://grabado-autopartes-argentina.vercel.app/jurisdicciones': 'https://www.grabadoautopartes.com.ar/jurisdicciones',
  'https://grabado-autopartes-argentina.vercel.app/sitemap.xml': 'https://www.grabadoautopartes.com.ar/sitemap.xml'
};

// Configuración
const CONFIG = {
  scanDirs: ['app', 'components', 'public'],
  fileExtensions: ['.tsx', '.ts', '.js', '.jsx', '.html', '.md'],
  logFile: 'fix-links.log'
};

class LinkFixer {
  constructor() {
    this.fixedFiles = [];
    this.totalReplacements = 0;
    this.processedFiles = 0;
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${message}`;
    console.log(logMessage);
    
    // Escribir al archivo de log
    fs.appendFileSync(CONFIG.logFile, logMessage + '\n');
  }

  fixFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      let modifiedContent = content;
      let hasChanges = false;
      let fileReplacements = 0;

      // Aplicar todas las correcciones
      for (const [brokenUrl, correctUrl] of Object.entries(URL_FIXES)) {
        const regex = new RegExp(brokenUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
        const matches = modifiedContent.match(regex);
        
        if (matches) {
          modifiedContent = modifiedContent.replace(regex, correctUrl);
          hasChanges = true;
          fileReplacements += matches.length;
          this.totalReplacements += matches.length;
          
          this.log(`  🔧 ${brokenUrl} → ${correctUrl} (${matches.length} veces)`);
        }
      }

      // Guardar archivo si hubo cambios
      if (hasChanges) {
        fs.writeFileSync(filePath, modifiedContent, 'utf8');
        this.fixedFiles.push({
          file: filePath,
          replacements: fileReplacements
        });
        this.log(`💾 ARCHIVO ACTUALIZADO: ${filePath} (${fileReplacements} reemplazos)`);
      }

      this.processedFiles++;
    } catch (error) {
      this.log(`❌ ERROR procesando ${filePath}: ${error.message}`);
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
            this.fixFile(fullPath);
          }
        }
      }
    } catch (error) {
      this.log(`❌ ERROR escaneando directorio ${dirPath}: ${error.message}`);
    }
  }

  generateReport() {
    this.log('\n' + '='.repeat(60));
    this.log('📊 REPORTE DE CORRECCIÓN DE ENLACES');
    this.log('='.repeat(60));
    this.log(`📁 Archivos procesados: ${this.processedFiles}`);
    this.log(`💾 Archivos modificados: ${this.fixedFiles.length}`);
    this.log(`🔧 Total de reemplazos: ${this.totalReplacements}`);

    if (this.fixedFiles.length > 0) {
      this.log('\n📝 ARCHIVOS MODIFICADOS:');
      this.fixedFiles.forEach(file => {
        this.log(`  📄 ${file.file} (${file.replacements} reemplazos)`);
      });
    }

    this.log('\n🎯 CORRECCIONES APLICADAS:');
    for (const [broken, fixed] of Object.entries(URL_FIXES)) {
      this.log(`  🔧 ${broken} → ${fixed}`);
    }

    this.log('\n✅ BENEFICIOS:');
    this.log('  ✅ Enlaces gubernamentales actualizados');
    this.log('  ✅ URLs de Vercel reemplazadas por dominio principal');
    this.log('  ✅ Mejor experiencia de usuario');
    this.log('  ✅ Mejor SEO (sin enlaces rotos)');
    
    this.log('\n📝 Log completo guardado en: ' + CONFIG.logFile);
    this.log('='.repeat(60));
  }

  run() {
    this.log('🔧 Iniciando corrección de enlaces rotos...');
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
        this.scanDirectory(dir);
      } else {
        this.log(`⚠️  Directorio no encontrado: ${dir}`);
      }
    }

    // Generar reporte final
    this.generateReport();
  }
}

// Ejecutar si se llama directamente
if (require.main === module) {
  const fixer = new LinkFixer();
  fixer.run();
}

module.exports = LinkFixer;
