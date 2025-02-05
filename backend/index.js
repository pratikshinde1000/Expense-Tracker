import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import mergedResolvers from './resolvers/index.js';
import mergedTypeDefs from './typeDefs/index.js';
import connectDB from './db/connectDB.js';
const PORT = 4000;
dotenv.config();

const initApp = async () => {
    const app = express();
    app.use(express.json());
    app.use(cors())

    connectDB();

    const server = new ApolloServer({ 
        typeDefs: mergedTypeDefs, 
        resolvers: mergedResolvers 
    });

    await server.start();

    app.use('/graphql', expressMiddleware(server));

    app.listen(PORT, ()=> console.log(`🚀 Server started on port: ${PORT}🚀`))

}

initApp();


