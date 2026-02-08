import { getClient } from '@/app/ApolloClient';
import { GetUpcomingDocument, GetUpcomingQuery } from '@/app/api/graphql/generated/graphql';
import { Heading } from '@components/text/Heading';
import { Container } from '@components/container/Container';
import Pagination from '@components/pagination/Pagination';
import { ApolloClient } from '@apollo/client';
import QueryResult = ApolloClient.QueryResult;
import JsonViewer from '@components/jsonViewer/JsonViewer';

export default async function MovieUpcomingPage({
    params,
}: {
    params: Promise<{ page?: string[] }>;
}) {
    // unwrap the params Promise
    const resolvedParams = await params;

    // grab the first segment or default
    const page = parseInt(resolvedParams.page?.[0] ?? '1');

    console.log('resolvedParams:', resolvedParams);
    console.log('page:', page);

    const result = await getClient()
        .query({
            query: GetUpcomingDocument,
            variables: {
                page: page,
            },
            fetchPolicy: 'no-cache',
        })
        .catch((err) => {
            console.log('MoviesUpcomingPage:err', err);
            return {
                data: {
                    getUpcoming: {
                        results: [],
                        total_pages: 0,
                        total_results: 0,
                    },
                },
                loading: false,
                networkStatus: 7,
                error: undefined,
            } as QueryResult<GetUpcomingQuery>;
        });
    const data = { result };

    console.log('data', data);

    const baseUrl = '/movie/upcoming';

    return (
        <Container>
            <Heading as={'h1'}>Upcoming Movies</Heading>

            <div>param page: {page}</div>
            <div>total pages: {data?.result?.data?.getUpcoming?.total_pages}</div>
            <Pagination
                baseUrl={baseUrl}
                totalPages={data?.result?.data?.getUpcoming?.total_pages ?? 0}
                totalResults={data?.result?.data?.getUpcoming?.total_results ?? 0}
                initialPage={page ?? 0}
            />
            <div>SERVER side API Data:</div>
            <JsonViewer data={data?.result?.data?.getUpcoming?.results} />
        </Container>
    );
}
