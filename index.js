const server = require('http');

const PORT = process.env.PORT || 5000;

server.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(String(req));
}).listen(PORT, () => console.log('Server Running'));





