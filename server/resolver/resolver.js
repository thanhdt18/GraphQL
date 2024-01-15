const BOOKS = [
  {
    id: 1,
    name: "De Men Phieu Luu Ky",
    genre: "Adventure",
    arthorId: 1,
  },
  {
    id: 2,
    name: "Lam giau khong kho",
    genre: "Education",
    arthorId: 2,
  },
];
const ARTHOR = [
  {
    id: 1,
    name: "Thanh",
    age: 27,
  },
  {
    id: 2,
    name: "Nhac",
    age: 27,
  },
];
const ArthorSchema = require("../models/Arthor");
const BooksSchema = require("../models/Book");
const resolvers = {
  // ROOT QUERY
  Query: {
    books: (root, agrs, { mongodbDataMethods }) =>
      mongodbDataMethods.getAllBooks(),
    book: (root, { id }, { mongodbDataMethods }) =>
      mongodbDataMethods.findBookById(id),
    arthor: (root, { id }, { mongodbDataMethods }) =>
      mongodbDataMethods.findArthorById(id),
    arthors: (root, agrs, { mongodbDataMethods }) =>
      mongodbDataMethods.getAllAuthor(),
  },
  Book: {
    arthor: async ({ arthorId }, agrs, { mongodbDataMethods }) =>
      await mongodbDataMethods.findArthorById(arthorId),
  },
  Arthor: {
    books: async ({ _id }, agrs, { mongodbDataMethods }) =>
      await mongodbDataMethods.getAllBooks({ arthorId: _id }),
  },
  // MUTATION
  Mutation: {
    createAuthor: async (parent, agrs, { mongodbDataMethods }) =>
      mongodbDataMethods.createAuthor(agrs),
    createBook: async (parent, agrs, { mongodbDataMethods }) =>
      mongodbDataMethods.createBook(agrs),
  },
};

module.exports = resolvers;
