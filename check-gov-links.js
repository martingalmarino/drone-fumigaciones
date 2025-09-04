const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// URLs gubernamentales específicas para verificar
const GOV_URLS_TO_CHECK = [
  // ANSV (Agencia Nacional de Seguridad Vial)
  'https://www.ansv.gob.ar/',
  'https://turnos.ansv.gob.ar/',
  'https://consultas.ansv.gob.ar/',
  
  // DNRPA (Dirección Nacional de los Registros Nacionales de la Propiedad del Automotor)
  'https://www.dnrpa.gov.ar/',
  'https://turnos.dnrpa.gov.ar/',
  'https://consultas.dnrpa.gov.ar/',
  
  // Sitios provinciales comunes
  'https://www.buenosaires.gob.ar/',
  'https://www.gba.gob.ar/',
  'https://www.cba.gov.ar/',
  'https://www.mendoza.gov.ar/',
  'https://www.santafe.gov.ar/',
  'https://www.cordoba.gov.ar/',
  'https://www.tucuman.gov.ar/',
  'https://www.salta.gov.ar/',
  'https://www.entrerios.gov.ar/',
  'https://www.corrientes.gov.ar/',
  'https://www.chaco.gov.ar/',
  'https://www.formosa.gov.ar/',
  'https://www.misiones.gov.ar/',
  'https://www.neuquen.gov.ar/',
  'https://www.rionegro.gov.ar/',
  'https://www.chubut.gov.ar/',
  'https://www.santacruz.gov.ar/',
  'https://www.tierradelfuego.gov.ar/',
  'https://www.lapampa.gov.ar/',
  'https://www.larioja.gov.ar/',
  'https://www.sanjuan.gov.ar/',
  'https://www.catamarca.gov.ar/',
  'https://www.la-rioja.gov.ar/',
  'https://www.santiago.gov.ar/',
  'https://www.jujuy.gov.ar/'
];

class GovLinkChecker {
  constructor() {
    this.results = [];
    this.workingUrls = [];
    this.brokenUrls = [];
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }

  async checkUrl(url) {
    return new Promise((resolve) => {
      const protocol = url.startsWith('https:') ? https : http;
      const request = protocol.get(url, { 
        timeout: 10000,
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; LinkChecker/1.0)'
        }
      }, (response) => {
        resolve({
          url: url,
          status: response.statusCode,
          working: response.statusCode >= 200 && response.statusCode < 400,
          redirect: response.statusCode >= 300 && response.statusCode < 400,
          finalUrl: response.headers.location || url
        });
      });

      request.on('error', (error) => {
        resolve({
          url: url,
          status: 0,
          working: false,
          error: error.message
        });
      });

      request.on('timeout', () => {
        request.destroy();
        resolve({
          url: url,
          status: 0,
          working: false,
          error: 'Timeout'
        });
      });
    });
  }

  async checkAllUrls() {
    this.log('🔍 Verificando enlaces gubernamentales...');
    this.log(`📊 Total de URLs a verificar: ${GOV_URLS_TO_CHECK.length}`);
    
    for (const url of GOV_URLS_TO_CHECK) {
      this.log(`🔗 Verificando: ${url}`);
      const result = await this.checkUrl(url);
      this.results.push(result);
      
      if (result.working) {
        this.workingUrls.push(result);
        this.log(`  ✅ OK (${result.status})`);
      } else {
        this.brokenUrls.push(result);
        this.log(`  ❌ ROTO (${result.status}) - ${result.error || 'Error desconocido'}`);
      }
      
      // Pequeña pausa para no sobrecargar los servidores
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  }

  generateReport() {
    this.log('\n' + '='.repeat(70));
    this.log('📊 REPORTE DE ENLACES GUBERNAMENTALES');
    this.log('='.repeat(70));
    this.log(`✅ URLs funcionando: ${this.workingUrls.length}`);
    this.log(`❌ URLs rotas: ${this.brokenUrls.length}`);
    this.log(`📊 Total verificado: ${this.results.length}`);

    if (this.workingUrls.length > 0) {
      this.log('\n✅ ENLACES FUNCIONANDO:');
      this.workingUrls.forEach(result => {
        this.log(`  ✅ ${result.url} (${result.status})`);
        if (result.redirect && result.finalUrl !== result.url) {
          this.log(`     ↳ Redirige a: ${result.finalUrl}`);
        }
      });
    }

    if (this.brokenUrls.length > 0) {
      this.log('\n❌ ENLACES ROTOS:');
      this.brokenUrls.forEach(result => {
        this.log(`  ❌ ${result.url} (${result.status})`);
        if (result.error) {
          this.log(`     ↳ Error: ${result.error}`);
        }
      });
    }

    // Agrupar por tipo de sitio
    const ansvUrls = this.results.filter(r => r.url.includes('ansv'));
    const dnrpaUrls = this.results.filter(r => r.url.includes('dnrpa'));
    const provincialUrls = this.results.filter(r => 
      !r.url.includes('ansv') && 
      !r.url.includes('dnrpa') && 
      !r.url.includes('argentina.gob.ar')
    );

    this.log('\n🏛️ RESUMEN POR ORGANISMO:');
    this.log(`  🚗 ANSV: ${ansvUrls.filter(r => r.working).length}/${ansvUrls.length} funcionando`);
    this.log(`  🚙 DNRPA: ${dnrpaUrls.filter(r => r.working).length}/${dnrpaUrls.length} funcionando`);
    this.log(`  🏛️ Provinciales: ${provincialUrls.filter(r => r.working).length}/${provincialUrls.length} funcionando`);

    // Guardar reporte detallado
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        total: this.results.length,
        working: this.workingUrls.length,
        broken: this.brokenUrls.length
      },
      results: this.results,
      working: this.workingUrls,
      broken: this.brokenUrls
    };

    fs.writeFileSync('gov-links-report.json', JSON.stringify(report, null, 2));
    this.log('\n📝 Reporte detallado guardado en: gov-links-report.json');
    this.log('='.repeat(70));

    return report;
  }

  async run() {
    await this.checkAllUrls();
    return this.generateReport();
  }
}

// Ejecutar si se llama directamente
if (require.main === module) {
  const checker = new GovLinkChecker();
  checker.run().catch(console.error);
}

module.exports = GovLinkChecker;
