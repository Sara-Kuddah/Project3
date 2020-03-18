const mongoose = require("mongoose");
const machineSchema = new mongoose.Schema(
  {
    name: { type: String, required: true }, 
    description: String, 
    type: { type: String, default: "Machine" },
    price: Number, 
    img: String
  },
  {
    timestamps: true
  }
);
const Machine = mongoose.model("Machine", machineSchema);
module.exports = Machine;