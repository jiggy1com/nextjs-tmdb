import { getClient } from '@/app/ApolloClient';
import { GetUpcomingDocument } from '@/app/api/graphql/generated/graphql';
import { Heading } from '@components/text/Heading';
import { Container } from '@components/container/Container';

export default async function MoviesUpcomingPage() {
    const result = await getClient()
        .query({
            query: GetUpcomingDocument,
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

    return (
        <Container>
            <Heading as={'h1'}>Upcoming Movies</Heading>
            SERVER side API Data:
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </Container>
    );
}
