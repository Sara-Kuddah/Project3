

const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const CartSchema = new mongoose.Schema(
  {
    totalprice : Number ,
    coffeeorder : [ {
        type: Schema.Types.ObjectId,
        ref: 'Coffee'
      } ,{ amount : { type: Number , default: 1  }}   ],
    machineorder : [ {
        type: Schema.Types.ObjectId,
        ref: 'Machine'
      } ,{ amount : { type: Number , default: 1  }}   ],
    toolorder : [ {
        type: Schema.Types.ObjectId,
        ref: 'Tool'
      } ,{ amount : { type: Number , default: 1  }}   ],
    
  },
  {
    timestamps: true
  }
);
const Cart = mongoose.model("Cart", CartSchema);
module.exports = Cart;