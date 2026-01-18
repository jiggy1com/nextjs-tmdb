import React from 'react';
import { getClient } from '@/app/ApolloClient';

import { GreetingQueryDocument, GreetingQueryQuery } from '@/app/api/graphql/generated/graphql';

const Greeting = async (): Promise<React.JSX.Element | React.JSX.Element[]> => {
    const result = await getClient()
        .query<GreetingQueryQuery>({
            query: GreetingQueryDocument,
            fetchPolicy: 'no-cache', // never use cache
        })

        .catch((error) => {
            console.error('Error fetching greeting:', error);
            console.log('error fetching greeting:', error);
            return { data: { greeting: [] } };
        });
    const { data } = result;

    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error :({error.message})</p>;

    return !data?.greeting ? (
        <></>
    ) : (
        data.greeting.map((greeting, idx: number) => {
            return (
                <h1
                    key={idx}
                    style={{
                        color: 'white',
                    }}>
                    {greeting?.message}
                </h1>
            );
        })
    );
};

export default Greeting;
