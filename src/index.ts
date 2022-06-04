import {PrismaClient} from "@prisma/client";
import {ApolloServer} from "apollo-server";
import schema from "./graphql/allSchema";

const server = new ApolloServer({schema: schema});
export const client = new PrismaClient();
try {
    client
        .$connect()
        .then(() => {
            server.listen().then(({url}) => {
                console.log(`🚀 Server ready at ${url}`);
            });
        })
        .catch((err) => {
            console.error(err);
            process.exit(1);
        });
} catch (e) {
    console.error(e);
    process.exit(1);
}
