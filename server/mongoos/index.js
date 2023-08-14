const mongoose = require("mongoose");
const mongoo = "mongodb://127.0.0.1/animals";

// const product = require("/mongoos/productList");


mongoose
  .connect(mongoo)
  .then(() => {
    console.log("db mongo connected");
  })
  .catch((err) => console.log(err));


const db = mongoose.connection;


const getAll = () => {
  return Product.find();
};

const update = (id, data) => {
  return Product.findOneAndUpdate({_id:id}, data, { new: true });
};

const add = (obj)=>{
return Product.create(obj)
}  

const deleteOne = (id) => {
  return Product.findByIdAndDelete({ _id:id });
};