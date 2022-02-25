import { useQuery } from "@apollo/client";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";
import { getBooks } from "../graphql/queries";
import BookDetail from "./BookDetail";

const BookList = () => {
	const [selectedBook, setSelectedBook] = useState(null);
	const { loading, error, data } = useQuery(getBooks);
	if (loading)
		return (
			<Spinner animation="border" role="status" variant="primary">
				<span className="visually-hidden">Loading...</span>
			</Spinner>
		);
	if (error)
		return (
			<Alert variant="danger">
				<Alert.Heading>Error!</Alert.Heading>
			</Alert>
		);
	return (
		<Row>
			<Col xs={4} md={6}>
				{data.books.map((book, index) => (
					<Card
						border="info"
						text="info"
						className="text-center shadow mb-2"
						key={index}
						onClick={() => setSelectedBook(book.id)}
					>
						<Card.Body>{book.title}</Card.Body>
					</Card>
				))}
			</Col>
			<Col>
				{selectedBook ? <BookDetail bookSelectedID={selectedBook} /> : null}
			</Col>
		</Row>
	);
};
export default BookList;
