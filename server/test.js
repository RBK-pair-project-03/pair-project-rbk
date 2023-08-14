const express = require('express')
const app = express()
const {getAll, update , add  ,deleteOne } = require("./mongoos/index");
const cors = require ("cors"); 
const {db} = require ("./mongoos/index");
 

app.use(cors()); 
app.use(express.json())


app.get('/api/animals',(request,response)=> {
  getAll().then((result)=>{
    response.status(200).send(result)
  }).catch((err)=>response.status(500).send(err))
})

app.post("/api/animals",(req,res)=>{
  add(req.body).then((result)=>res.status(201).json(result)).catch(err=>res.status(500).send(err))
})
 
app.put("/api/animals/:id",(req,res)=>{
  update(req.params.id,req.body).then((result)=>res.status(202).send(result)).catch(error=>res.send(500).send(error))
  })

app.delete("/api/animals/:id",(req,res)=>{
 const id = req.params.id

deleteOne(id).then((resp)=>res.status(204).send(resp)).catch((err)=>{
  res.status(500).send(err)})
})







app.listen(3000)