const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended:true}))

app.get("/", (req,res)=>{
    const data ={
        title: "EJS Blog title",
        description: "EJS Blog Description"
    };
    res.render("index.ejs", data)
})
app.post("/", (req,res)=>{
   const data = Object.assign({tite:req.header.title}, {description:req.header.description})
})
app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})