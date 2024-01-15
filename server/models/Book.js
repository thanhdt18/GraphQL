const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const BooksSchema = new Schema({
  name: {
    type: String,
  },
  genre: {
    type: String,
  },
  arthorId: {
    type: String,
  },
});

module.exports = mongoose.model("books", BooksSchema);
