const http = require("http");
const express=require("express")
const server = http.createServer(reqHandler);
server.relisten(3000);
console.log("Listening for requests");