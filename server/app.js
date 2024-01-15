const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");

const typeDefs = require("./schema/schema");
const resolvers = require("./resolver/resolver");

// load data
const mongodbDataMethods = require("./data/db");
// connect to mongodb
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://thanhdt18:1234@learn-graphql.mxscoy9.mongodb.net/",
      {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      }
    );
    console.log("connected");
  } catch (error) {
    console.log("connect mongodb error");
  }
};
connectDB();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({ mongodbDataMethods }),
});

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
);
