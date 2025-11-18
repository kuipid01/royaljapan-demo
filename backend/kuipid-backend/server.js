import http from 'http';
import { getHealth } from './controllers/health.js'; 

const port = 3000;
const host = 'localhost';

const server = http.createServer((req, res) => {
  if (req.url === '/healthz') {
    return getHealth(res);
  } else {
    // Default response
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello from Node.js Server!');
  }
});

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
