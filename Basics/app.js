const http = require("http");
const app =require("express.js");

app.use((req,res,next)=>{
    console.log("I ran")
})
const server = http.createServer(app);
server.listen(3000);
console.log("Listening for requests");

