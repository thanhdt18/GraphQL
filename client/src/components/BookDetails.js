import Card from "react-bootstrap/Card";
import { useQuery } from "@apollo/client";
import { getBookById } from "../graphql-client/queries";
const BookDetails = ({ viewBook }) => {
  console.log("viewBook", viewBook);
  const { loading, error, data } = useQuery(getBookById, {
    variables: {
      id: viewBook,
    },
    skip: viewBook === null,
  });
  if (!viewBook || loading || error) {
    return <>...</>;
  }

  return (
    <Card bg="info" text="while" className="shadow">
      <Card.Body>
        <Card.Title>{data.book.name}</Card.Title>
        <Card.Subtitle>{data.book.genre}</Card.Subtitle>
        <p>{data.book.arthor.id}</p>
        <p>{data.book.arthor.name}</p>
        <p>All books by this author</p>
        <ul>
          {data.book.arthor.books.map((bok) => (
            <li>{bok.name}</li>
          ))}
        </ul>
      </Card.Body>
    </Card>
  );
};

export default BookDetails;
