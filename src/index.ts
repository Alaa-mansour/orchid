import "reflect-metadata";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import axios from "axios";

import { EstadoResolver } from "./resolvers/estados";

const main = async () => {
    const app = express();

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [EstadoResolver],
            validate: false
        }),
    })

    apolloServer.applyMiddleware({ app });

    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
        console.log(`The server is running on port: ${PORT}`);
    })
}

main().catch(err => {
    console.log(err);
})