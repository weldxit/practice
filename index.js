const express = require("express");
const bodyparser = require("body-parser");


const app = express();
app.use(bodyparser.json());

app.listen(3001, ()=>{
    console.log('server is at 3001');
})

app.get('/',(req, res)=>{
    res.send('hello')
})

app.get('/get-quote',(req, res)=>{
    res.send('you just need work on your skills')
})