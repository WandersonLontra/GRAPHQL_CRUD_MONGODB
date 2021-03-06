import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';

function startServer({typeDefs, resolvers}){
    mongoose.connect('mongodb://localhost:27017/graphql', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }, (err) => {
        err ? console.log(err) : console.log('Connected to MONGODB')
    })

    const server = new ApolloServer({typeDefs, resolvers });
    server.listen().then(({url}) => console.log(`🔥 Server running at ${url}`))
}

export default startServer;