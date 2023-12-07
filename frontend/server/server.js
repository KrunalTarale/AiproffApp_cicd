// server/index.js
import React from 'react';
import express from 'express';
import fs from 'fs';
import path from 'path';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from '../src/App.jsx';

const app = express();

app.use((req, res, next) => {
  if (/\.js$|\.css$|\.png$|\.jpg$|\.jpeg$|\.gif$|\.svg$/.test(req.path)) {
    res.redirect('/dist' + req.path);
  } else {
    next();
  }
});

app.use('*', (req, res) => {
  const context = {};

  fs.readFile(
    path.resolve('../dist/index.html'),
    'utf-8',
    (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
        return;
      }

      const html = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      );

      res.send(data.replace('<div id="root"></div>', `<div id="root">${html}</div>`));
    }
  );
});

app.use(express.static(path.resolve(__dirname, '..', 'dist'), { maxAge: '30d' }));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
