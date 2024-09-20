import express from 'express';

const app = express();
const port = 3001;

app.get("/", (req,res) =>{
    res.send("<h1>Welcome to DevJams'24</h1>")
})

app.get("/about", (req,res) =>{
    res.send("<h1> This is the about page</h1>")
})

app.listen(port, () =>{
    console.log(`App listening on ${port}`)
})