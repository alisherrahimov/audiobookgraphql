import { ApolloServer } from "apollo-server";
import schema from "./graphql/index";

const server = new ApolloServer({ schema: schema });

try {
  server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
} catch (e) {
  console.error(e);
  process.exit(1);
}
