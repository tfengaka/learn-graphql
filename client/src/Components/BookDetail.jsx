import { useQuery } from "@apollo/client";
import Alert from "react-bootstrap/Alert";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import { getSingleBook } from "../graphql/queries";
const BookDetail = ({ bookSelectedID }) => {
	const { loading, error, data } = useQuery(getSingleBook, {
		variables: { id: bookSelectedID },
	});
	if (loading)
		return (
			<Spinner animation="border" role="status" variant="primary">
				<span className="visually-hidden">Loading...</span>
			</Spinner>
		);
	if (!bookSelectedID && error)
		return (
			<Alert variant="danger">
				<Alert.Heading>
					{error ? `${error.message}` : "Book selected is null"}
				</Alert.Heading>
			</Alert>
		);
	const book = data.book ? data.book : null;
	return (
		<Card bg="info" text="white" className="shadow">
			<Card.Body className="text-center">
				{!book ? (
					<Card.Text>Please select a book</Card.Text>
				) : (
					<>
						<Card.Title>{`Tác Phẩm: ${book.title}`}</Card.Title>
						<Card.Subtitle>
							{`Tác Giả: ${book.author.surName + book.author.name}`}
						</Card.Subtitle>
						<hr />
						<Card.Text>Các tác phẩm khác</Card.Text>
						<ul>
							{book.author.books.map((item) => (
								<li key={item.id}>{item.title}</li>
							))}
						</ul>
					</>
				)}
			</Card.Body>
		</Card>
	);
};

export default BookDetail;
