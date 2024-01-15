import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useQuery, useMutation } from "@apollo/client";
import Button from "react-bootstrap/Button";
import { getArthors, getBooks } from "../graphql-client/queries";
import { addBook } from "../graphql-client/mutations";
const Forms = () => {
  const { loading, error, data } = useQuery(getArthors);
  const [addBookLocal, dataMutation] = useMutation(addBook);
  const [newBook, setNewBook] = useState({
    name: "",
    genre: "",
    arthorId: "",
  });
  const handleChangeText = (e) => {
    console.log(newBook, "sssshandleChangeTextssssssssss");
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, genre, arthorId } = newBook;
    addBookLocal({
      variables: { name, genre, arthorId },
      refetchQueries: [{ query: getBooks }],
    });
  };
  return (
    <Row>
      <Col>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Book name"
              name="name"
              required
              value={newBook.name}
              onChange={handleChangeText}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="book genre"
              name="genre"
              required
              value={newBook.genre}
              onChange={handleChangeText}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              as="select"
              name="arthorId"
              onChange={handleChangeText}
              value={newBook.arthorId}
            >
              <option disabled value={""}>
                Select Arthor
              </option>
              {!loading &&
                !error &&
                data.arthors.map((ar) => (
                  <option value={ar.id} key={ar.id}>
                    {ar.name}
                  </option>
                ))}
            </Form.Control>
          </Form.Group>
          <Button className="float-right" variant="info" type="submit">
            Add Book
          </Button>
        </Form>
      </Col>
      <Col>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Arthot name"
            name="name"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Arthot age"
            name="genre"
            required
          />
        </Form.Group>
        <Button className="float-right" variant="info" type="submit">
          Add Arthor
        </Button>
      </Col>
    </Row>
  );
};

export default Forms;
