const server = require('express')();
const createApp = require('/path/to/built-server-bundle.js');
const renderer = require('vue-server-renderer').createRenderer()

server.get('*', (req, res) => {
  const context = { url: req.url };

  createApp(context)
    .then(app => {
      rendered.renderToString(app, (err, html) => {
        if (err) {
          switch (err.code) {
            case 404:
              res.status(404).end('Page Not Found');
              break;
            case 500:
              res.status(500).end('Interal Server Error');
              break;
          }
        } else {
          res.end(html);
        }
      });
    });
});
