import { useQuery } from '@apollo/client/react';
import {
    GetMovieDetailsDocument,
    GetMovieDetailsQuery,
    GetPopularDocument,
    GetTopRatedDocument,
} from '@/app/api/graphql/generated/graphql';
import { getClient } from '@/app/ApolloClient';
import { ApolloClient } from '@apollo/client';
import QueryResult = ApolloClient.QueryResult;

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

    const { getMovieDetails } = data;

    // const {
    //     data: {
    //         getMovieDetails: { id, poster_path, backdrop_path },
    //     },
    // } = result;

    return (
        <>
            <img
                width={'100%'}
                src={`https://image.tmdb.org/t/p/w600_and_h900_face/${getMovieDetails.backdrop_path}`}
            />
            <h1>{getMovieDetails.title}</h1>

            <div>Movie Detail Page</div>
            <p>Category: {title}</p>
            <p>MovieId: {movieId}</p>
            <pre>{JSON.stringify(result, null, 2)}</pre>
        </>
    );
}
