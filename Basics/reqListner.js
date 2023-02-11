const file = require("fs");
const html =
    "<html><head><title>Hello world</title></head><body><h1>Hello from my NodeJS Server.</h1></body></html>";

const reqListner = (req, res) => {
    let url = req.url;
    if (url === "/") {
        res.write(
            '<html><head><title>Hello world</title></head><body><form action="/message" method="POST"><input type="text" name="message"/><button type="submit">Send</button></form></body></html>'
        );
        return res.end();
    }
    if (url === "/message" && req.method === "POST") {
        const body = [];
        req.on("data", (chunk) => {
            body.push(chunk);
        });
        return req.on("end", () => {
            let parseBody = Buffer.concat(body).toString();
            let message = parseBody.split("=")[1].replaceAll("+", " ");
            file.writeFile("message.txt", message,(err)=>{
                res.statusCode = 302;
                res.setHeader("Location", "");
                return res.end();
            });
        });
    }
    res.setHeader("Content-Type", "text/html");
    res.write(html);
    res.end();
};

module.exports={
    reqHandler:reqListner,
    html:html
}