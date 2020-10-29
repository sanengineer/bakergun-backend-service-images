const { Mongoose } = require("mongoose");

const mongoose = require("mongoose");
// const { ObjectId } = mongoose.Schema;

const gameboardImagesAssets = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("gameboard", gameboardImagesAssets);
