const mongoose = require("mongoose");
const coffeeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true }, 
    description: String,   
    type: { type: String, default: "Coffee" },    
    price: Number,  
    img:String
  },
  {
    timestamps: true
  }
);
const Coffee = mongoose.model("Coffee", coffeeSchema);
module.exports = Coffee;