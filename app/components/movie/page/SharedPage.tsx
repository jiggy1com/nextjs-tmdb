'use client';
import { MovieList } from '@components/movie/list/MovieList';
import {
	GetMoviesPopularDocument,
	GetNowPlayingDocument,
	MovieObject,
} from '@/app/api/graphql/generated/graphql';
import Pagination from '@components/pagination/Pagination';
import { useQuery } from '@apollo/client/react';
import JsonViewer from '@components/jsonViewer/JsonViewer';

type SharedPagePropsQuery =
	| typeof GetNowPlayingDocument
	| typeof GetMoviesPopularDocument;

type SharedPageProps = {
	page: number;
	query: SharedPagePropsQuery;
	type: 'popular' | 'now_playing' | 'upcoming';
	baseUrl: string;
};

export function SharedPage({ page, query, type, baseUrl }: SharedPageProps) {
	const { data } = useQuery(query, {
		variables: {
			page,
			type,
		},
		// disabling no-cache to use cache-first which is the default
		// fetchPolicy: 'no-cache',
	});

	/**
	 * | Policy                  | What It Does                                       | When to Use                   |
	 * | ----------------------- | -------------------------------------------------- | ----------------------------- |
	 * | `cache-first` (default) | Use cache if available, otherwise fetch            | Most standard queries         |
	 * | `cache-and-network`     | Return cache immediately, then update from network | Dashboards, dynamic data      |
	 * | `network-only`          | Always fetch from server                           | Admin panels                  |
	 * | `no-cache`              | Fetch but don’t store result                       | Sensitive or one-time queries |
	 * | `cache-only`            | Only use cache, never fetch                        | Local state queries           |
	 * | `standby`               | Like cache-first but won’t auto-update             | Conditional queries           |
	 */

	if (!data) {
		return <></>;
	}

	return (
		<>
			<MovieList
				movieList={(data?.getMovies?.results ?? []) as MovieObject[]}
			/>
			<Pagination
				baseUrl={baseUrl}
				initialPage={page}
				totalPages={data?.getMovies?.total_pages ?? 1}
				totalResults={data?.getMovies?.total_results ?? 0}
			/>
			CLIENT side API Data:
			<JsonViewer data={data} />
		</>
	);
}
