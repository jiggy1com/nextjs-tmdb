import { GetMovieDetailsDocument, GetMovieDetailsQuery } from '@/app/api/graphql/generated/graphql';
import { getClient } from '@/app/ApolloClient';
import { ApolloClient } from '@apollo/client';
import { Heading } from '@components/text/Heading';
import JsonViewer from '@components/jsonViewer/JsonViewer';
import QueryResult = ApolloClient.QueryResult;
import { MovieDetails } from '@components/movie/details/MovieDetails';
import { MovieDetailsProvider } from '@components/providers/server/MovieDetailsContext';
import { useContext } from 'react';

export default async function MovieDetailPage({
    params,
}: {
    params: Promise<{ title: string; movieId: string }>;
}) {
    const { title, movieId } = await params;

    const result: QueryResult<GetMovieDetailsQuery> = await getClient()
        .query({
            query: GetMovieDetailsDocument,
            variables: {
                id: parseInt(movieId),
            },
            fetchPolicy: 'no-cache',
        })
        .catch(() => {
            return {
                data: {
                    getMovieDetails: {
                        id: 0,
                        title: '',
                        original_title: '',
                        overview: '',
                        release_date: '',
                        runtime: '',
                        adult: '',
                        popularity: 0,
                        vote_average: 0,
                        vote_count: 0,
                        genres: [],
                        production_companies: [],
                        production_countries: [],
                        spoken_languages: [],
                        budget: 0,
                        revenue: 0,
                        homepage: '',
                        imdb_id: '',
                        status: '',
                        tagline: '',
                        poster_path: '',
                        backdrop_path: '',
                        video: false,
                    },
                },
            } as unknown as QueryResult<GetMovieDetailsQuery>;
        });

    const { data } = result;

    if (!data?.getMovieDetails) {
        return;
    }

    // const { setMovieDetails } = await import('@components/providers/server/MovieDetailsContext');

    const { getMovieDetails } = data;

    // const {
    //     data: {
    //         getMovieDetails: { id, poster_path, backdrop_path },
    //     },
    // } = result;

    return (
        <MovieDetailsProvider movie={getMovieDetails}>
            <MovieDetails />
        </MovieDetailsProvider>
    );
}
