import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { ApolloServer } from '@apollo/server';
import { gql } from 'graphql-tag';

const resolvers = {
    Query: {
        hello: () => 'world',
        greeting: () => [
            {
                message: 'Hello 1',
            },
            {
                message: 'Hello 2',
            },
        ],
    },
};

const typeDefs = gql`
    type GreetingType {
        message: String
    }
    type Query {
        hello: String
        greeting: [GreetingType]
    }
`;

const server = new ApolloServer({
    resolvers,
    typeDefs,
});

const handler = startServerAndCreateNextHandler(server);

export { handler as GET, handler as POST };
