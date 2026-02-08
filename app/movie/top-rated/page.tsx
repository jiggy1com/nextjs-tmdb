import { getClient } from '@/app/ApolloClient';
import { GetTopRatedDocument } from '@/app/api/graphql/generated/graphql';
import { Heading } from '@components/text/Heading';
import { Container } from '@components/container/Container';
import JsonViewer from '@components/jsonViewer/JsonViewer';

export default async function MoviesTopRatedPage() {
    const result = await getClient()
        .query({
            query: GetTopRatedDocument,
            fetchPolicy: 'no-cache',
        })
        .catch((err) => {
            console.log('MoviesTopRatedPage:err', err);
            return {
                result: {
                    data: {
                        getTopRated: {
                            results: [],
                            total_pages: 0,
                            total_results: 0,
                        },
                    },
                },
            };
        });
    const data = { result };

    return (
        <Container>
            <Heading as={'h1'}>Top Rated Movies</Heading>
            SERVER side API Data:
            <JsonViewer data={data} />
        </Container>
    );
}
