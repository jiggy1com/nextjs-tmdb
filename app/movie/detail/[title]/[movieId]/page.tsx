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
import { Heading } from '@components/text/Heading';

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
            <div
                style={{
                    maxHeight: '600px',
                    display: 'flex',
                    overflow: 'hidden',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                }}>
                {/*background image*/}
                <img
                    style={{
                        objectFit: 'contain',
                        objectPosition: 'center',
                        width: '100%',
                        height: 'auto',
                        opacity: '.5',
                        position: 'absolute',
                        zIndex: 1,
                    }}
                    width={'100%'}
                    src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${getMovieDetails.backdrop_path}`}
                />

                <div>
                    <Heading>{getMovieDetails.title}</Heading>
                </div>
            </div>

            {/*background image*/}
            {/*<img*/}
            {/*    width={'100%'}*/}
            {/*    src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${getMovieDetails.backdrop_path}`}*/}
            {/*/>*/}

            {/*side image*/}
            <img
                width={'100%'}
                src={`https://image.tmdb.org/t/p/w600_and_h900_face/${getMovieDetails.poster_path}`}
            />
            <h1>{getMovieDetails.title}</h1>

            <div>Movie Detail Page</div>
            <p>Category: {title}</p>
            <p>MovieId: {movieId}</p>
            <pre>{JSON.stringify(result, null, 2)}</pre>
        </>
    );
}
