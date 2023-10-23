// sitemap-generator.js
import { SitemapStream, streamToPromise } from 'sitemap';

async function generateSitemap() {
  const hostname = 'https://www.example.com';
  const routes = [
    '/',
    '/about',
    '/contact',
    // Add more routes as needed
  ];

  const sitemapStream = new SitemapStream({ hostname });

  routes.forEach((route) => {
    sitemapStream.write({ url: route });
  });

  sitemapStream.end();

  try {
    const sitemap = await streamToPromise(sitemapStream);
    console.log(sitemap.toString());
  } catch (error) {
    console.error(error);
  }
}

generateSitemap();
