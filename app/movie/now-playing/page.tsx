'use client';
import { Container } from '@components/container/Container';
import { Heading } from '@components/text/Heading';
import { useQuery } from '@apollo/client/react';
import { GetNowPlayingDocument } from '@/app/api/graphql/generated/graphql';
import JsonViewer from '@components/jsonViewer/JsonViewer';

export default function NowPlayingPage() {
    const { data } = useQuery(GetNowPlayingDocument, {
        fetchPolicy: 'no-cache',
    });

    return (
        <Container>
            <Heading as={'h1'}>Now Playing Movies</Heading>
            CLIENT side API Data:
            <JsonViewer data={data} />
        </Container>
    );
}
