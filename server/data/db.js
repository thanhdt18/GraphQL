const Book = require("../models/Book");
const Author = require("../models/Arthor");

const mongodbDataMethods = {
  getAllBooks: async (condition = null) =>
    condition !== null ? await Book.find(condition) : await Book.find(),
  createBook: async (agrs) => {
    const book = new Book(agrs);
    return await book.save();
  },
  createAuthor: async (agrs) => {
    const book = new Author(agrs);
    return await book.save();
  },
  getAllAuthor: async () => await Author.find(),
  findBookById: async (id) => await Book.findById(id),
  findArthorById: async (id) => await Author.findById(id),
};

module.exports = mongodbDataMethods;
