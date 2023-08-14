const mongoose = require("mongoose")
mongoose.Promise = global.Promise;
const bichbichSchema = new mongoose.Schema({

   gender:string,
  name:string,
  price:number,
  state:string,
  imageUrl:string,
  category:string
  
});

const Product = mongoose.model("Bichbich", bichbichSchema);

module.exports.Product = Product;
