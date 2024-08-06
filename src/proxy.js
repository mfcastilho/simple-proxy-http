// const http = require('http');
// const httpProxy = require('http-proxy');
// require('dotenv').config();

// const proxy = httpProxy.createProxyServer({
//   secure: false // Não verificar a validade do certificado SSL/TLS (apenas para teste)
// });

// const server = http.createServer((req, res) => {
//   // Lida com solicitações HTTPS
//   proxy.web(req, res, { target: 'https://www.youtube.com/watch?v=mwrE8qzwfdQ', secure: false, changeOrigin: true }, (err) => {
//     if (err) {
//       console.error('Proxy error', err);
//       res.writeHead(500, { 'Content-Type': 'text/plain' });
//       res.end('Something went wrong');
//     }
//   });
// });

// const PORT = 5050;
// server.listen(PORT, () => {
//   console.log(`Server is running on port: ${PORT}`);
// });

//===============================================================



const http = require('http');
const httpProxy = require('http-proxy');
require('dotenv').config();

const proxy = httpProxy.createProxyServer({
  secure: false // Não verificar a validade do certificado SSL/TLS (apenas para teste)
});

const server = http.createServer((req, res) => {
  // Obtém o destino da solicitação
  const target = req.headers.host ? `https://${req.headers.host}` : 'https://www.youtube.com';

  // Lida com solicitações HTTPS
  proxy.web(req, res, { target, secure: false, changeOrigin: true }, (err) => {
    if (err) {
      console.error('Proxy error', err);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Something went wrong');
    }
  });
});

const PORT = 5050;
server.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});




