const { gql } = require("apollo-server-express");

const typeDefs = gql`
	type Books {
		id: ID
		title: String
		author: Author
		cover_image: String
		pages: Int
		releaseDate: String
	}
	type Author {
		id: ID!
		name: String
		surName: String
		country: String
		books: [Books]
	}

	# Root type
	type Query {
		books: [Books]
		book(id: ID!): Books
		authors: [Author]
		author(id: ID!): Author
	}
	type Mutation {
		createAuthor(name: String!, surName: String!, country: String): Author
		createBook(
			title: String!
			pages: Int!
			cover_image: String
			releaseDate: String
			author_id: ID!
		): Books
	}
`;

module.exports = typeDefs;
