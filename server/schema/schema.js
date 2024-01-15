const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Book {
    id: ID!
    name: String
    genre: String
    arthor: Arthor
  }
  type Arthor {
    id: ID!
    name: String
    age: Int
    books: [Book]
  }
  type Query {
    books: [Book]
    book(id: ID!): Book
    arthors: [Arthor]
    arthor(id: ID!): Arthor
  }

  type Mutation {
    createAuthor(name: String, age: Int): Arthor
    createBook(name: String, genre: String, arthorId: ID): Book
  }
`;

module.exports = typeDefs;
