const server = require('http');

const PORT = process.env.PORT || 5000;

server.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World');
}).listen(PORT, () => console.log('Server Running'));





