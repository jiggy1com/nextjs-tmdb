import { getClient } from '@/app/ApolloClient';
import {
	GetUpcomingDocument,
	GetUpcomingQuery,
	Movie,
	MovieObject,
} from '@/app/api/graphql/generated/graphql';
import { Heading } from '@components/text/Heading';
import { Container } from '@components/container/Container';
import Pagination from '@components/pagination/Pagination';
import { ApolloClient } from '@apollo/client';
import JsonViewer from '@components/jsonViewer/JsonViewer';
import { MovieList } from '@components/movie/list/MovieList';
import QueryResult = ApolloClient.QueryResult;

export default async function MovieUpcomingPage({
	params,
}: {
	params: Promise<{ page?: string[] }>;
}) {
	// unwrap the params Promise
	const resolvedParams = await params;

	// grab the first segment or default
	const page = parseInt(resolvedParams.page?.[0] ?? '1');

	const apiResponse = await getClient()
		.query({
			query: GetUpcomingDocument,
			variables: {
				page: page,
				type: 'upcoming',
			},
			// fetchPolicy: 'no-cache',
		})
		.catch((err) => {
			console.log('MoviesUpcomingPage:err', err);
			return {
				data: {
					getMovies: {
						results: [] as Movie[],
						total_pages: 0,
						total_results: 0,
					},
				},
				loading: false,
				networkStatus: 7,
				error: undefined,
			} as QueryResult<GetUpcomingQuery>;
		});

	const { results, total_pages, total_results } = apiResponse?.data
		?.getMovies ?? {
		results: [],
		total_pages: 0,
		total_results: 0,
	};

	return (
		<Container>
			<Heading as={'h1'}>Upcoming Movies - Server Side</Heading>
			<MovieList movieList={(results ?? []) as MovieObject[]} />
			<Pagination
				baseUrl={'/movie/upcoming'}
				totalPages={total_pages ?? 0}
				totalResults={total_results ?? 0}
				initialPage={page ?? 0}
			/>
			<div>SERVER side API Data:</div>
			<JsonViewer data={apiResponse} />
		</Container>
	);
}
