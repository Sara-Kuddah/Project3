
const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  { 
    itemId : String ,
    totalprice : Number ,
    name: { type: String, required: true },
    price: Number, 
    amount :{type : Number , default : 1 },
    img: String
  },
  {
    timestamps: true
  }
);
const Cart = mongoose.model("Cart", CartSchema);
module.exports = Cart;