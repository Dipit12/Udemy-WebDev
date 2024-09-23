import express from 'express'

const app = express();
app.use((req,res,next) =>{
    console.log("Request Method: ", req.method);
    next();
})
function logger(req,res,next){
    console.log("Request URL: ", req.url);
    next();
}
app.use(logger)
const port = 3000;

app.get('/',(req,res)=>{
    res.send("hi")
})

app.listen(port, ()=>{
    console.log(`App is listening on ${port}`)
})
