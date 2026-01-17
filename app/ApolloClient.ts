// https://github.com/apollographql/apollo-client-integrations/tree/main/packages/nextjs
import { HttpLink } from '@apollo/client';
import {
    ApolloClient,
    InMemoryCache,
    registerApolloClient,
} from '@apollo/client-integration-nextjs';
export const dynamic = 'force-dynamic';
export const { getClient, query, PreloadQuery } = registerApolloClient(() => {


    const isBuild =
        typeof window === 'undefined' &&
        !process.env.NEXT_RUNTIME &&
        process.env.VERCEL_ENV === 'production';
    const protocol = isBuild ? 'https' : 'http';
    const url = `${protocol}://${process.env.VERCEL_URL}/api/graphql`
    const link = new HttpLink({
                  uri: `${url}`,
                // credentials: "same-origin",
              })


    console.log(`Apollo Client Link: /api/graphql`);
    console.log('uri:', url);

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
