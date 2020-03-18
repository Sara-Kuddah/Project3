const mongoose = require("mongoose");

const toolSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },  
    description: String, 
    type:{ type: String, default: "tool" },
    price: Number, 
    img:String
  },
  {
    timestamps: true
  }
);
const Tool = mongoose.model("Tool", toolSchema);
module.exports = Tool;