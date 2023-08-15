const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const petsSchema = new mongoose.Schema({
    name: String,
    gender: String,
    imageUrl: String,
    price: String,
    state : String,
    category: {
      type: String,
      enum: ["dog", "cat", "accesories", "food"],
      default: "accesories"
    }
  });
  
const Pets = mongoose.model("Pets",petsSchema);

module.exports.Pets = Pets;