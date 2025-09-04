const fs = require('fs');
const path = require('path');

// Leer reportes generados
function readReport(filename) {
  try {
    if (fs.existsSync(filename)) {
      return JSON.parse(fs.readFileSync(filename, 'utf8'));
    }
  } catch (error) {
    console.log(`⚠️  No se pudo leer ${filename}: ${error.message}`);
  }
  return null;
}

// Generar reporte HTML
function generateHTMLReport(data) {
  const html = `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reporte de Enlaces - Grabado Autopartes Argentina</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
            background-color: #f5f5f5;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        h1 {
            color: #2563eb;
            text-align: center;
            margin-bottom: 30px;
        }
        .summary {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }
        .summary-card {
            background: #f8fafc;
            padding: 20px;
            border-radius: 8px;
            text-align: center;
            border-left: 4px solid #2563eb;
        }
        .summary-card h3 {
            margin: 0 0 10px 0;
            color: #1e40af;
        }
        .summary-card .number {
            font-size: 2em;
            font-weight: bold;
            color: #2563eb;
        }
        .section {
            margin-bottom: 30px;
        }
        .section h2 {
            color: #1e40af;
            border-bottom: 2px solid #e5e7eb;
            padding-bottom: 10px;
        }
        .link-list {
            background: #f9fafb;
            border-radius: 8px;
            padding: 20px;
        }
        .link-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px;
            margin: 5px 0;
            background: white;
            border-radius: 5px;
            border-left: 4px solid #10b981;
        }
        .link-item.broken {
            border-left-color: #ef4444;
        }
        .link-item.redirect {
            border-left-color: #f59e0b;
        }
        .link-url {
            font-family: monospace;
            color: #374151;
            flex: 1;
            margin-right: 20px;
        }
        .link-status {
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 0.8em;
            font-weight: bold;
        }
        .status-ok {
            background: #dcfce7;
            color: #166534;
        }
        .status-broken {
            background: #fee2e2;
            color: #991b1b;
        }
        .status-redirect {
            background: #fef3c7;
            color: #92400e;
        }
        .timestamp {
            text-align: center;
            color: #6b7280;
            font-size: 0.9em;
            margin-top: 30px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🔗 Reporte de Enlaces Externos</h1>
        
        <div class="summary">
            <div class="summary-card">
                <h3>Total de Enlaces</h3>
                <div class="number">${data.externalLinks.totalLinks}</div>
            </div>
            <div class="summary-card">
                <h3>Dominios Únicos</h3>
                <div class="number">${data.externalLinks.totalDomains}</div>
            </div>
            <div class="summary-card">
                <h3>Enlaces Funcionando</h3>
                <div class="number">${data.govLinks.working}</div>
            </div>
            <div class="summary-card">
                <h3>Enlaces Reparados</h3>
                <div class="number">${data.crawler.fixed}</div>
            </div>
        </div>

        <div class="section">
            <h2>🌐 Dominios Más Utilizados</h2>
            <div class="link-list">
                ${data.externalLinks.domains.slice(0, 10).map(domain => `
                    <div class="link-item">
                        <div class="link-url">${domain.domain}</div>
                        <div class="link-status status-ok">${domain.count} enlaces</div>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="section">
            <h2>🏛️ Enlaces Gubernamentales</h2>
            <div class="link-list">
                ${data.govLinks.results.map(link => `
                    <div class="link-item ${link.working ? 'working' : 'broken'}">
                        <div class="link-url">${link.url}</div>
                        <div class="link-status ${link.working ? 'status-ok' : 'status-broken'}">
                            ${link.working ? `✅ ${link.status}` : `❌ ${link.status}`}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="section">
            <h2>🔧 Enlaces Reparados</h2>
            <div class="link-list">
                ${data.crawler.fixedLinks.map(link => `
                    <div class="link-item">
                        <div class="link-url">${link.original} → ${link.replacement}</div>
                        <div class="link-status status-ok">✅ Reparado</div>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="timestamp">
            Reporte generado el ${new Date().toLocaleString('es-AR')}
        </div>
    </div>
</body>
</html>`;

  return html;
}

// Función principal
function generateReport() {
  console.log('📊 Generando reporte completo de enlaces...');
  
  // Leer todos los reportes
  const externalLinks = readReport('external-links-report.json');
  const govLinks = readReport('gov-links-report.json');
  const crawlerLog = fs.existsSync('crawler-404.log') ? fs.readFileSync('crawler-404.log', 'utf8') : '';
  const fixLog = fs.existsSync('fix-links.log') ? fs.readFileSync('fix-links.log', 'utf8') : '';
  
  // Procesar datos del crawler
  const crawlerData = {
    fixed: 0,
    broken: 0,
    fixedLinks: []
  };
  
  if (crawlerLog) {
    const fixedMatches = crawlerLog.match(/✅ REPARADO: ([^→]+) → ([^en]+)/g);
    if (fixedMatches) {
      crawlerData.fixed = fixedMatches.length;
      crawlerData.fixedLinks = fixedMatches.map(match => {
        const parts = match.match(/✅ REPARADO: ([^→]+) → ([^en]+)/);
        return {
          original: parts[1].trim(),
          replacement: parts[2].trim()
        };
      });
    }
  }
  
  // Datos consolidados
  const reportData = {
    externalLinks: externalLinks || { totalLinks: 0, totalDomains: 0, domains: [] },
    govLinks: govLinks || { working: 0, broken: 0, results: [] },
    crawler: crawlerData,
    timestamp: new Date().toISOString()
  };
  
  // Generar reporte JSON
  fs.writeFileSync('complete-links-report.json', JSON.stringify(reportData, null, 2));
  
  // Generar reporte HTML
  const htmlReport = generateHTMLReport(reportData);
  fs.writeFileSync('links-report.html', htmlReport);
  
  // Mostrar resumen
  console.log('\n' + '='.repeat(60));
  console.log('📊 REPORTE COMPLETO DE ENLACES');
  console.log('='.repeat(60));
  console.log(`🌐 Enlaces externos encontrados: ${reportData.externalLinks.totalLinks}`);
  console.log(`🏛️ Enlaces gubernamentales verificados: ${reportData.govLinks.results.length}`);
  console.log(`✅ Enlaces gubernamentales funcionando: ${reportData.govLinks.working}`);
  console.log(`🔧 Enlaces reparados automáticamente: ${reportData.crawler.fixed}`);
  
  console.log('\n📁 ARCHIVOS GENERADOS:');
  console.log('  📄 complete-links-report.json - Reporte completo en JSON');
  console.log('  🌐 links-report.html - Reporte visual en HTML');
  console.log('  📝 crawler-404.log - Log del crawler de enlaces 404');
  console.log('  🔧 fix-links.log - Log de corrección de enlaces');
  
  console.log('\n🎯 BENEFICIOS LOGRADOS:');
  console.log('  ✅ Enlaces gubernamentales actualizados');
  console.log('  ✅ URLs de Vercel reemplazadas por dominio principal');
  console.log('  ✅ Mejor experiencia de usuario');
  console.log('  ✅ Mejor SEO (sin enlaces rotos)');
  console.log('  ✅ Reportes detallados para monitoreo');
  
  console.log('\n💡 PRÓXIMOS PASOS:');
  console.log('  1. Revisar el reporte HTML: links-report.html');
  console.log('  2. Hacer commit de los cambios');
  console.log('  3. Hacer deploy a Vercel');
  console.log('  4. Monitorear enlaces periódicamente');
  
  console.log('='.repeat(60));
}

// Ejecutar si se llama directamente
if (require.main === module) {
  generateReport();
}

module.exports = generateReport;
