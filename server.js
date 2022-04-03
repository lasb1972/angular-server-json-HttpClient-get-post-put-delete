function requireHTTPS(req, res, next) {
  // The 'x-forwarded-proto' check is for Heroku
  if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
    return res.redirect('https://' + req.get('host') + req.url);
  }
  next();
}

const express = require('express');
const app = express();

/*const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("src/db/db.json");
server.use(router);*/

app.use(requireHTTPS);
app.use(express.static('./dist/xxx'));    

app.get('/*', (req, res) =>
  res.sendFile('index.html', {root: 'dist/xxx/'}),
);

app.listen(process.env.PORT || 8080);



