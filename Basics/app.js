const http = require('http');
const file = require('fs');
const html = "<html><head><title>Hello world</title></head><body><h1>Hello from my NodeJS Server.</h1></body></html>";
const rqListner = (req, res) => {
    const url = req.url;
    res.setHeader('Content-Type', 'text/html');
    if (url === '/') {
        res.write('<html><head><title>Hello world</title></head><body><form action="/message" method="POST"><input type="text" name="message"/><button type="submit">Send</button></form></body></html>');
        return res.end();
    }
    if (url === "/message" && req.method === "POST") {
        const data = [];
        req.on('data', (chunk) => {
            data.push(chunk);
        });
        req.on('end', () => {
            const parseBody = Buffer.concat(data).toString();
            const message = (parseBody.split('=')[1]);
            file.writeFileSync('message.txt', message);
        });
        return res.end();
    }
    res.write(html);
    res.end();
};
const server = http.createServer(rqListner);
server.listen(3000);