import { getClient } from '@/app/ApolloClient';
import { GetUpcomingDocument } from '@/app/api/graphql/generated/graphql';
import { Heading } from '@components/text/Heading';
import { Container } from '@components/container/Container';
import Pagination from '@components/pagination/Pagination';

export default async function MovieUpcomingPage({
    params,
}: {
    params: Promise<{ page?: string[] }>;
}) {
    // unwrap the params Promise
    const resolvedParams = await params;

    // grab the first segment or default
    const page = resolvedParams.page?.[0] ?? '1';

    console.log('resolvedParams:', resolvedParams);
    console.log('page:', page);

    const result = await getClient()
        .query({
            query: GetUpcomingDocument,
            variables: {
                page: parseInt(page),
            },
            fetchPolicy: 'no-cache',
        })
        .catch((err) => {
            console.log('MoviesUpcomingPage:err', err);
            return {
                result: {
                    data: {
                        getUpcoming: {
                            results: [],
                            total_pages: 0,
                            total_results: 0,
                        },
                    },
                },
            };
        });
    const data = { result };

    console.log('data', data);

    // const [state, setState] = useState({
    //     currentPage: 1,
    //     total_pages: data?.result?.data?.getUpcoming?.total_pages ?? 0,
    //     total_results: data?.result?.data?.getUpcoming?.total_results ?? 0,
    // });

    return (
        <Container>
            <Heading as={'h1'}>Upcoming Movies</Heading>

            <div>param page: {page}</div>
            <div>total pages: {data.result.data.getUpcoming.total_pages}</div>
            <div>SERVER side API Data:</div>
            <Pagination
                totalPages={data.result.data.getUpcoming.total_pages}
                totalResults={data.result.data.getUpcoming.total_results}
                initialPage={1}
            />
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </Container>
    );
}
