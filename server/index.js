import express from "express";
import graphqlHTTP from "express-graphql";
import schema from "./data/schema";
const { GRAPHQL_PORT: PORT } = require("../config.json");

const app = express();
app.use(
  "/",
  graphqlHTTP({
    schema,
    graphiql: true //set to false if you don't want graphiql enabled
  })
);

app.listen(PORT);
console.log("GraphQL API server running at localhost:" + PORT);
