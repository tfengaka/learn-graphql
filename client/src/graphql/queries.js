import { gql } from "@apollo/client";

const getBooks = gql`
	query getBooksQuery {
		books {
			id
			title
			pages
			releaseDate
		}
	}
`;

const getSingleBook = gql`
	query getSingleBookQuery($id: ID!) {
		book(id: $id) {
			id
			title
			pages
			releaseDate
			author {
				name
				surName
				country
				books {
					id
					title
				}
			}
		}
	}
`;
export { getBooks, getSingleBook };
