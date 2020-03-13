const mongoose = require("mongoose");
const coffeeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true }, // lavazza beans
    description: String,   // italy 
    type: { type: String, default: "Coffee" },     // arabica
    price: Number,   //100 
    img:String
  },
  {
    timestamps: true
  }
);
const Coffee = mongoose.model("Coffee", coffeeSchema);
module.exports = Coffee;