const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	surName: {
		type: String,
		required: true,
	},
	country: {
		type: String,
	},
});
module.exports = mongoose.model("Authors", AuthorSchema);
