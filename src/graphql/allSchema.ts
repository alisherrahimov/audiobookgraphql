import { join } from "path";
import { addResolversToSchema } from "@graphql-tools/schema";
import { loadSchemaSync } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import resolvers from "./resolvers";

const gqlFiles = loadSchemaSync(join(__dirname + "/typedefs", "*.graphql"), {
  loaders: [new GraphQLFileLoader()],
});

const schema = addResolversToSchema({
  schema: gqlFiles,
  resolvers: resolvers,
});
export default schema;
