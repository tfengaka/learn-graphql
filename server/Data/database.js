const Books = require("../Model/Book");
const Authors = require("../Model/Author");

const mongoDatabaseMethods = {
	getAllBooks: async () => await Books.find(),
	getBookById: async (id) => await Books.findById(id),
	getAllAuthors: async () => await Authors.find(),
	createAuthor: async (args) => await new Authors(args).save(),
	createBook: async (args) => await new Books(args).save(),
};

module.exports = mongoDatabaseMethods;
