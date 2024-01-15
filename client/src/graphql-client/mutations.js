const { gql } = require("@apollo/client");

const addBook = gql`
  mutation createBook($name: String, $genre: String, $arthorId: ID!) {
    createBook(name: $name, genre: $genre, arthorId: $arthorId) {
      id
      name
      genre
    }
  }
`;
export { addBook };
