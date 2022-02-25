const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

//* Load schema and resolvers
const typeDefs = require("./schema/schema");
const resolvers = require("./resolver/resolver");

//* Load database methods
const dbMethods = require("./Data/database");
//* Connect to MongoDB
const connectDB = async () => {
	try {
		await mongoose.connect(process.env.DB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log("MongoDB Connected...");
	} catch (err) {
		console.log(err.message);
		process.exit(1);
	}
};
connectDB();
const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: () => ({ dbMethods }),
});
server.start().then(() => {
	server.applyMiddleware({ app });
	app.listen({ port: 5000 }, () =>
		console.log(`server ready on http://localhost:5000${server.graphqlPath}`)
	);
});
