const { books, authors } = require("../Data/static.js");
const resolve = {
	//* Queries
	Query: {
		books: async (parent, args, { dbMethods }) => await dbMethods.getAllBooks(),
		book: async (parent, args, { dbMethods }) =>
			await dbMethods.getBookById(args.id),
		authors: async (parent, args, { dbMethods }) =>
			await dbMethods.getAllAuthors(),
		author: (parent, args) => authors.find((author) => author.id == args.id),
	},
	Books: {
		author: (parent, args) =>
			authors.find((author) => author.id == parent.author_id),
	},
	Author: {
		books: (parent, args) =>
			books.filter((book) => book.author_id == parent.id),
	},

	//* Mutations
	Mutation: {
		createAuthor: async (parent, args, { dbMethods }) =>
			await dbMethods.createAuthor(args),
		createBook: async (parent, args, { dbMethods }) =>
			await dbMethods.createBook(args),
	},
};

module.exports = resolve;
