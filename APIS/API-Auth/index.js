const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')

const app = express()
const port = 3000;

app.get("/", (req,res)=>{
    try{
        fetch("https://dummyjson.com/todos/")
        .then(async response =>{
            const data = await response.json()
            res.send(data["todos"][1]["todo"])
        })
        
    }catch(err){
        console.log(err)
    }
})

app.listen(port, ()=>{
    console.log(`Port is running on ${port}`)
})
