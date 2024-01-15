import { gql } from "@apollo/client";

const getBooks = gql`
  query getBooks {
    books {
      id
      name
    }
  }
`;
const getBookById = gql`
  query getBookById($id: ID!) {
    book(id: $id) {
      id
      name
      genre
      arthor {
        id
        name
        age
        books {
          id
          name
        }
      }
    }
  }
`;

const getArthors = gql`
  query getArthors {
    arthors {
      id
      name
    }
  }
`;

export { getBooks, getBookById, getArthors };
