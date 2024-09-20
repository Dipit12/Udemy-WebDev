import express from 'express'

const app = express();
let port = 3000;

app.get("/", (req,res) =>{
    res.send(<h1>Welcome to DevJams'24</h1>)
})

app.listen(port, () =>{
    console.log(`App listening on ${port}`)
})