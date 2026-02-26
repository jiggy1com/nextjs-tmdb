import { getClient } from '@/app/ApolloClient';
import {
	GetTopRatedDocument,
	MovieObject,
} from '@/app/api/graphql/generated/graphql';
import { Heading } from '@components/text/Heading';
import { Container } from '@components/container/Container';
import JsonViewer from '@components/jsonViewer/JsonViewer';
import { MovieList } from '@components/movie/list/MovieList';
import Pagination from '@components/pagination/Pagination';

export default async function MoviesTopRatedPage({
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
			query: GetTopRatedDocument,
			variables: {
				page,
				type: 'top_rated',
			},
			// fetchPolicy: 'no-cache',
		})
		.catch((err) => {
			console.log('MoviesTopRatedPage:err', err);
			return {
				data: {
					getMovies: {
						results: [],
						total_pages: 0,
						total_results: 0,
					},
				},
			};
		});

	const { results, total_pages, total_results } = apiResponse?.data
		?.getMovies ?? {
		results: [],
		total_pages: 0,
		total_results: 0,
	};

	return (
		<Container>
			<Heading as={'h1'}>Top Rated Movies - Server Side</Heading>
			<MovieList movieList={(results ?? []) as MovieObject[]} />
			<Pagination
				baseUrl={'/movie/top-rated'}
				totalPages={total_pages ?? 0}
				totalResults={total_results ?? 0}
				initialPage={page ?? 0}
			/>
			SERVER side API Data:
			<JsonViewer data={apiResponse} />
		</Container>
	);
}
