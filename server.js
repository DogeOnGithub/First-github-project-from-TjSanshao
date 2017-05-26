const http = require('http'); //http模块
const fs = require('fs');   //文件系统模块 file system

const PORT = 3000;

const server = http.createServer((req, res) => {
    fs.readFile('index.html', (err, data) => {
        res.writeHead(200, {"Content-Type" : "text/html"});
        res.write(data);
        res.end();
    });
});

server.listen(PORT, () => {
    console.log(`Server`);
});