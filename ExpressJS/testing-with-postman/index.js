import express from 'express'
const app = express();

const port = 3002;
app.use()
app.get("/", (req,res) =>{
    res.send("hi")
})

app.post("/send",(req,res) =>{
    res.sendStatus(200);
})

app.put("/user/dipit",(req,res) =>{
    res.sendStatus(200);
})

app.delete("/send",(req,res) =>{
    res.sendStatus(200);
})

app.listen(port, ()=>{
    console.log(`App is listening on ${port}`)
})