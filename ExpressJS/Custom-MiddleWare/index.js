import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser';
const app = express();
app.use(morgan("combined")) // middleware to log in timestamps and system info
const port = 3000;
app.use(bodyParser.urlencoded({extended:true}))
app.get('/',(req,res)=>{
    res.send("hi")
})

app.listen(port, ()=>{
    console.log(`App is listening on ${port}`)
})
