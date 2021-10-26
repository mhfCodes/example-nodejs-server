const server = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 5000;

server.createServer((req, res) => {

    const filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
    const extName = path.extname(filePath);
    let contentType = 'text/html';

    switch(extName) {
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                fs.readFile(path.join(__dirname, 'public', '404.html'), (error, content) => {
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.end(content, 'utf-8');
                })
            } else {
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            res.writeHead(200, {'Content-Type': contentType});
            res.end(content, 'utf-8');
        }
    })

}).listen(PORT, () => console.log(`Server Running on Port ${PORT}`));





