'use client';
import { Container } from '@components/container/Container';
import { Heading } from '@components/text/Heading';
import { useQuery } from '@apollo/client/react';
import { GetPopularDocument } from '@/app/api/graphql/generated/graphql';

export default function MoviePopularPage() {
    const { data } = useQuery(GetPopularDocument, {
        fetchPolicy: 'no-cache',
    });

    return (
        <Container>
            <Heading as={'h1'}>Popular Movies</Heading>
            CLIENT side API Data:
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </Container>
    );
}
