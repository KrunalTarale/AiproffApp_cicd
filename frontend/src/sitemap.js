// import { SitemapStream, streamToPromise } from 'sitemap';
// import { createGzip } from 'zlib';
// import fs from 'fs';
// import path from 'path';

// // Define the base URL of your website
// const baseUrl = 'https://example.com';

// // Import or manually define your routes
// const routes = [
//   '/',
//   '/about',
//   '/contact',
//   // Add more routes as needed
// ];

// // Create a writable stream to store the sitemap
// const sitemapStream = new SitemapStream({ hostname: baseUrl });
// const writeStream = createGzip();
// sitemapStream.pipe(writeStream);

// // Add each route to the sitemap
// routes.forEach((route) => {
//   sitemapStream.write({ url: route, changefreq: 'daily', priority: 0.7 });
// });

// // End the sitemap and finalize the file
// sitemapStream.end();

// // Create the sitemap.xml file
// const sitemapPath = path.resolve('../public/sitemap.xml');
// const writeStreamPath = fs.createWriteStream(sitemapPath);
// writeStream.pipe(writeStreamPath);

// // Wait for the write stream to finish
// streamToPromise(writeStream).then(() => {
//   console.log('Sitemap generated and saved:', sitemapPath);
// });



// sitemap-generator.js
import { SitemapStream, streamToPromise } from 'sitemap';

async function generateSitemap() {
  const hostname = 'https://www.aiproff.ai';
  const routes = [
    '/',
    '/about',
    '/contact'
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
