import React from 'react';
import { getClient } from '@/app/ApolloClient';
import { gql } from 'graphql-tag';

const GREETING_QUERY = gql`
    query ExampleQuery {
        greeting {
            message
        }
    }
`;

type GreetingObj = {
    message: string;
};

const Greeting = async (): Promise<React.JSX.Element | React.JSX.Element[]> => {
    const result = await getClient().query<{ greeting: GreetingObj[] }>({
        query: GREETING_QUERY,
    }).catch((error) => {
        console.error('Error fetching greeting:', error);
        return { data: { greeting: [] } };
    });
    const { data } = result;

    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error :({error.message})</p>;

    return !data?.greeting ? (
        <></>
    ) : (
        data.greeting.map((greeting: GreetingObj, idx: number) => {
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
