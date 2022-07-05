import { PrismaClient } from "@prisma/client";
import { ApolloServer } from "apollo-server";
import schema from "./graphql/allSchema";
import express, { Request, Response } from "express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import http from "http";
import { upload } from "./helper/middleware/fileUpload";
import { createBook } from "./graphql/resolvers/book/createBook";
const app = express();
const httpServer = http.createServer(app);
const server = new ApolloServer({
  schema: schema,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});
export const client = new PrismaClient();
try {
  client.$connect().then(async () => {
    app.use("/src", express.static("src"));
    app.post(
      "/createbook",
      upload.fields([{ name: "audio" }, { name: "pdf" }, { name: "image" }]),
      createBook
    );
    app.listen(5000, () => {
      console.log("express server running 5000 port");
    });
    server.listen();
    console.log(
      `🚀 Server ready at http://localhost:4000${server.graphqlPath}`
    );
  });
} catch (e) {
  console.error(e);
  process.exit(1);
}
