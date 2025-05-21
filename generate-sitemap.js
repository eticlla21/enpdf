// generate-sitemap.js

const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, 'enpdf'); // Carpeta donde están tus archivos HTML
const OUTPUT_FILE = path.join(PUBLIC_DIR, 'sitemap.xml');
const BASE_URL = 'https://eticlla21.github.io/enpdf/ ';

function generateSitemap() {
  fs.readdir(PUBLIC_DIR, (err, files) => {
    if (err) {
      return console.error('No se pudo leer la carpeta:', err);
    }

    const urls = files
      .filter(file => file.endsWith('.html'))
      .map(file => `${BASE_URL}${file === 'index.html' ? '' : file}`);

    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    url => `
  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>`
  )
  .join('')}
</urlset>`;

    fs.writeFile(OUTPUT_FILE, sitemapContent, err => {
      if (err) {
        return console.error('Error al escribir sitemap.xml:', err);
      }
      console.log(`✅ Sitemap generado correctamente en ${OUTPUT_FILE}`);
    });
  });
}

generateSitemap();
