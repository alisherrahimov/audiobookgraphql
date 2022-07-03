import { PrismaClient } from "@prisma/client";
import { ApolloServer } from "apollo-server-express";
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
  client
    .$connect()
    .then(async () => {
      await server.start();

      server.applyMiddleware({ app });
      app.post(
        "/createbook",
        upload.fields([{ name: "audio" }, { name: "pdf" }, { name: "image" }]),
        createBook
      );
      await new Promise<void>((r) => app.listen(4000, r));
      console.log(
        `🚀 Server ready at http://localhost:4000${server.graphqlPath}`
      );
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
} catch (e) {
  console.error(e);
  process.exit(1);
}
