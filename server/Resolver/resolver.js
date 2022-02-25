const resolves = {
	//* Queries
	Query: {
		books: async (parent, args, { dbMethods }) => await dbMethods.getAllBooks(),
		book: async (parent, args, { dbMethods }) =>
			await dbMethods.getBookById(args.id),
		authors: async (parent, args, { dbMethods }) =>
			await dbMethods.getAllAuthors(),
		author: async (parent, args, { dbMethods }) =>
			await dbMethods.getAuthorById(args.id),
	},
	Books: {
		author: async (parent, args, { dbMethods }) =>
			dbMethods.getAuthorById(parent.author_id),
	},
	Author: {
		books: async (parent, args, { dbMethods }) =>
			await dbMethods.getAllBookByAuthorId(parent.id),
	},

	//* Mutations
	Mutation: {
		createAuthor: async (parent, args, { dbMethods }) =>
			await dbMethods.createAuthor(args),
		createBook: async (parent, args, { dbMethods }) =>
			await dbMethods.createBook(args),
	},
};

module.exports = resolves;
