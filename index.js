const server = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 5000;

server.createServer((req, res) => {

    console.log(req.url);

    fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
        if (err) throw err;        
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(content);
    })

}).listen(PORT, () => console.log('Server Running'));





