// sitemap-generator.js
import { SitemapStream, streamToPromise } from 'sitemap';
import fs from 'fs';
import path from 'path';

async function generateSitemap() {
  const hostname = 'https://www.aiproff.ai';
  const routes = [
    { url: '/', changefreq: 'weekly' },
    { url: '/about', changefreq: 'weekly' },
    { url: '/contact', changefreq: 'monthly' },
    { url: '/blog', changefreq: 'daily' },
    { url: '/applied-ai', changefreq: 'monthly' },
    { url: '/reliable-and-robust-ai', changefreq: 'monthly' },
    { url: '/introduction-to-nlp', changefreq: 'monthly' },
    { url: '/forecasting-using-ai', changefreq: 'monthly' },
    { url: '/computer-vision', changefreq: 'monthly' },
    { url: '/articles', changefreq: 'daily' },
    { url: '/faq', changefreq: 'weekly' },
    { url: '/privacy-policy', changefreq: 'weekly' },
    { url: '/legal', changefreq: 'weekly' },
    { url: '/mvp', changefreq: 'weekly' },
    { url: '/poc', changefreq: 'weekly' },
    { url: '/cat', changefreq: 'weekly' },
    { url: '/try', changefreq: 'weekly' },
    { url: '/buy', changefreq: 'weekly' },
    { url: '/assessment', changefreq: 'weekly' },
    { url: '/sign-in', changefreq: 'weekly' },
    { url: '/login  ', changefreq: 'weekly' },
  ];

  const sitemapStream = new SitemapStream({ hostname });

  routes.forEach((route) => {
    sitemapStream.write(route);
  });

  sitemapStream.end();

  try {
    const sitemap = await streamToPromise(sitemapStream);

    // Define the path to save the sitemap.xml file
    const sitemapPath = path.join('../public/sitemap.xml');

    // Save the sitemap content to the sitemap.xml file
    fs.writeFileSync(sitemapPath, sitemap.toString());

    console.log('Sitemap saved to', sitemapPath);
  } catch (error) {
    console.error(error);
  }
}

generateSitemap();
