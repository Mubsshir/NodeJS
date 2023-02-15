const http = require("http");
const {reqHandler} =require('./Npm scripts/reqHandler')
const server = http.createServer(reqHandler);
server.listen(3000);
console.log("Listening for requests");