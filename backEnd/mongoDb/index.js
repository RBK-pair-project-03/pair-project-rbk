const mongoose = require("mongoose");

const mongoUri = "mongodb://127.0.0.1/Petstores";

const {Pets} = require('./Pets');

mongoose.connect(mongoUri, { useUnifiedTopology: true, useNewUrlParser: true }).then(()=>{console.log("db mongo connected")}).catch(err=>console.log(err));

const db = mongoose.connection;

const getAll = () => {
  
  return Pets.find();
};

const update = (id, data) => {
  return Pets.findOneAndUpdate({_id:id}, data, { new: true });
};

const add = (obj)=>{
return Pets.create(obj)
}  

const deleteOne = (id) => {
  return Pets.findByIdAndDelete({ _id:id });
};

module.exports = {
  db,
  getAll,
  update,
  add,
  deleteOne
};
