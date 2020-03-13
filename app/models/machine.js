const mongoose = require("mongoose");
const machineSchema = new mongoose.Schema(
  {
    name: { type: String, required: true }, // Chemex Classic Coffee Maker
    description: String, //Brews Delicious Tasting Coffee
    type: { type: String, default: "Machine" },
    price: Number, // 50
    img: String
  },
  {
    timestamps: true
  }
);
const Machine = mongoose.model("Machine", machineSchema);
module.exports = Machine;