const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ArthorSchema = new Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
});

module.exports = mongoose.model("arthors", ArthorSchema);
