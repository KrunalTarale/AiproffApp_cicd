import React from 'react';
import express from 'express';
import fs from 'fs';
import path from 'path';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from '../src/App.jsx';

const app = express();

// Serve static files first
app.use('/dist', express.static(path.resolve(__dirname, '..', 'dist')));

// Handle redirects for specific file types
app.use((req, res, next) => {
  if (/\.js$|\.css$|\.png$|\.jpg$|\.webp$/.test(req.path)) {
    if (!req.path.startsWith('/dist')) {
      return res.redirect('/dist' + req.path);
    }
  }
  next();
});

// Server-side rendering middleware
const serverRenderer = (req, res) => {
  const context = {};
  fs.readFile(path.resolve('../dist/index.html'), 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('An error occurred');
    }

    

    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToString(
          <StaticRouter location={req.url} context={context}>
            <App />
          </StaticRouter>
        )}</div>`
      )
    );
  });
};

// Handle all other requests with server-side rendering
app.use('/', serverRenderer);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


