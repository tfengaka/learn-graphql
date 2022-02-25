const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	cover_image: {
		type: String,
	},
	pages: {
		type: Number,
		required: true,
	},
	releaseDate: {
		type: String,
		required: true,
	},
	author_id: {
		type: String,
		required: true,
	},
});
module.exports = mongoose.model("Books", BookSchema);
