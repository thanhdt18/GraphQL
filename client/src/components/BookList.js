import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardColumns from "react-bootstrap/CardColumns";
import Card from "react-bootstrap/Card";
import BookDetails from "./BookDetails";
import { useQuery } from "@apollo/client";
import { getBooks } from "../graphql-client/queries";
import { useState } from "react";

const BookList = () => {
  const { loading, error, data } = useQuery(getBooks);
  const [viewBook, setViewBook] = useState(null);
  if (loading) {
    return <p>Loading....</p>;
  }
  if (error) {
    return <p>error....</p>;
  }
  return (
    <Row>
      <Col xs={8}>
        <CardColumns>
          {data.books.map((book) => (
            <Card
              key={book.id}
              border="info"
              text="info"
              className="text-center shadow"
              onClick={() => setViewBook(book.id)}
            >
              <Card.Body>{book.name}</Card.Body>
            </Card>
          ))}
        </CardColumns>
      </Col>
      <Col>
        <BookDetails viewBook={viewBook} />
      </Col>
    </Row>
  );
};

export default BookList;
