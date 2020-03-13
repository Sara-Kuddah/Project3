const mongoose = require("mongoose");

const toolSchema = new mongoose.Schema(
  {
    name: { type: String, required: true }, // Chemex Classic Coffee Maker 
    description: String, //Brews Delicious Tasting Coffee
    type:{ type: String, default: "tool" },
    price: Number, // 50
    img:String
  },
  {
    timestamps: true
  }
);
const Tool = mongoose.model("Tool", toolSchema);
module.exports = Tool;