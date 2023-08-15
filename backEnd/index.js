const express = require('express');
const cors =require('cors');
const port = 5000;
const app = express();
const db = require('./mongoDb')
const {getAll} = require('.//mongoDb/index');
app.use(cors());

app.get('/api/get',(req,res)=> {
getAll().then((result)=>{res.status(200).send(result)}).catch((err)=>{res.status(500).send(err)})})






app.listen(port, ()=>{
console.log(`listening on ${port}`);
})