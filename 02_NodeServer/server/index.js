const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("welcome to server!!!");
})
app.listen("1234",()=>console.log("server up at port 1234"))
