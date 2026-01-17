// https://github.com/apollographql/apollo-client-integrations/tree/main/packages/nextjs
import { HttpLink } from '@apollo/client';
import {
    ApolloClient,
    InMemoryCache,
    registerApolloClient,
} from '@apollo/client-integration-nextjs';

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
    const link =
        process.env.NODE_ENV === 'development'
            ? new HttpLink({
                  uri: 'http://localhost:3000/api/graphql',
              })
            : new HttpLink({
                  uri: `https://${process.env.VERCEL_URL}/api/graphql`,
              });

    console.log('Apollo Client Link URI:', (link as HttpLink).options.uri);

    // createHttpLink({
    //       uri: '/api/graphql',
    //   });

    return new ApolloClient({
        cache: new InMemoryCache(),
        link,
        // link: createHttpLink({
        // 	uri: "/api/graphql",
        // }),
        // link: new HttpLink({
        // 	// this needs to be an absolute url, as relative urls cannot be used in SSR
        // 	uri: "http://localhost:3000/api/graphql",
        // 	fetchOptions: {
        // 		// you can pass additional options that should be passed to `fetch` here,
        // 		// e.g. Next.js-related `fetch` options regarding caching and revalidation
        // 		// see https://nextjs.org/docs/app/api-reference/functions/fetch#fetchurl-options
        // 	},
        // }),
    });
});
