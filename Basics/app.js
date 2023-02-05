const http = require('http');
const html = "<html><head><title>Hello world</title></head><body><h1>Hello from my NodeJS Server.</h1></body></html>";
const rqListner = (req, res) => {
    console.log(req.url, req.method, req.headers);
    res.setHeader('Content-Type', 'text/html');
    res.write(html);
    res.end();
};

const server = http.createServer(rqListner);

server.listen(3000);
