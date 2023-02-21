const express =require("express");
const app=express();

app.use('/',(req,res,next)=>{
    res.send("<h2>Home page of ExpressJS</h2>")
    next();
})
app.use('/message',(req,res,next)=>{
    res.send('<h1>hello from ExpressJS</h1>')
    next();
})
app.listen(3000)
console.log("Listening for requests");

