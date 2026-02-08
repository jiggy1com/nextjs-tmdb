'use client';
import { Heading } from '@components/text/Heading';
import React from 'react';
import { ContainerFluid } from '@components/container/ContainerFluid';
import { Container } from '@components/container/Container';
import { useQuery } from '@apollo/client/react';
import { GetMovieLatestDocument } from '@/app/api/graphql/generated/graphql';
import JsonViewer from '@components/jsonViewer/JsonViewer';

export default function LatestPage() {
    const { data, loading, error, refetch, networkStatus } = useQuery(GetMovieLatestDocument, {
        // fetchPolicy: 'network-only',
        fetchPolicy: 'no-cache',
    });
    console.log('data', data);

    const pre = `
- Next.js App Router
- Apollo Server 
- Apollo Client 
- GraphQL Architecture 
    - Schema (TypeDefs)
    - Resolvers 
    - Queries & Mutations
    - Codegen 
- Configuring resolvers to use Third Party API (The Movie DB)
- Server Side Apollo Client Queries with getClient
- Client Side Apollo Client Queries with useQuery
    `;

    return (
        <ContainerFluid>
            <Container>
                <Heading as={'h1'}>Latest Movie</Heading>
                <p>
                    This page was used to start understanding the setup of the entire app and its
                    usage with:
                </p>
                <pre>{pre}</pre>
                <p>
                    Here is an example of the data returned from CLIENT side.{' '}
                    <code>useQuery(GetMovieLatestDocument)</code>
                </p>

                <JsonViewer data={data} />
            </Container>
        </ContainerFluid>
    );
}
