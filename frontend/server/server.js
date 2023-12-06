// server.js
import path from 'path';
import fs from 'fs';
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../src/App.jsx';
import { StaticRouter } from 'react-router-dom';

const app = express();

const serverRenderer = (req, res) => {
  fs.readFile(path.resolve('../dist/index.html'), 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('An error occurred');
    }
    const context = {};  // Initialize the context object
    const appHtml = ReactDOMServer.renderToString(
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    );
    return res.send(data.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`));
  });
};

app.get('^/$', serverRenderer);

app.use(express.static(path.resolve(__dirname, '..', 'dist'), { maxAge: '30d' }));

app.listen(3000, () => {
  console.log('Server is running on port 1338');
});
