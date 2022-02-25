import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Container from "react-bootstrap/Container";
import "./App.css";
import BookList from "./Components/BookList";
import Forms from "./Components/Forms";

const client = new ApolloClient({
	uri: "http://localhost:5000/graphql",
	cache: new InMemoryCache(),
});

function App() {
	return (
		<ApolloProvider client={client}>
			<Container className="py-3 mt-3" style={{ backgroundColor: "lightblue" }}>
				<h1 className="text-center text-info mb-3">My Book</h1>
				<hr />
				<Forms />
				<hr />
				<BookList />
			</Container>
		</ApolloProvider>
	);
}

export default App;
