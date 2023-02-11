const { Console } = require("console");
const http = require("http");
const {reqHandler} =require('./reqListner')
const server = http.createServer(reqHandler);
server.listen(3000);
console.log("Listening for requests");

