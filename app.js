const express=require("express");
const bodyParser=require('body-parser');
const app =express();

app.use(bodyParser.urlencoded({extended:false}))
app.post('/message',(req,res,next)=>{
    console.log("Message page sent");
    const body=req.body;
    console.log(body.message)
    res.redirect('/');
})
app.use('/',(req,res,next)=>{
    res.sendFile('E:\\node\\index.html');
    console.log("Home page sent");
})
app.listen(3000);
console.log("Listening for requests");

