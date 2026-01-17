import { NextRequest } from 'next/server';
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

// const handler = startServerAndCreateNextHandler(server);
const handler = startServerAndCreateNextHandler<NextRequest>(server, {
    context: async req => ({ req }),
});
// Create the Next.js handler
// const handler = startServerAndCreateNextHandler(server, {
//     context: async (req, res) => {
//         // You can add a context function to pass req, res, or user info to your resolvers
//         return { req, res };
//     },
// });

// export default handler;
// export { handler as GET, handler as POST };

export async function GET(request: NextRequest) {
    return handler(request);
}

export async function POST(request: NextRequest) {
    return handler(request);
}