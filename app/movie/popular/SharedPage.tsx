'use client';
import { Container } from '@components/container/Container';
import { Heading } from '@components/text/Heading';
import { MovieList } from '@components/movie/list/MovieList';
import { GetMoviesPopularDocument, Movie } from '@/app/api/graphql/generated/graphql';
import Pagination from '@components/pagination/Pagination';
import { useQuery } from '@apollo/client/react';
import JsonViewer from '@components/jsonViewer/JsonViewer';

type SharedPageProps = {
    page: number;
};

export function SharedPage({ page }: SharedPageProps) {
    const { data } = useQuery(GetMoviesPopularDocument, {
        variables: {
            page: page,
        },
        fetchPolicy: 'no-cache',
    });

    console.log('SharedPage:data', data);
    console.log('SharedPage:page', page);

    if (!data) {
        return <></>;
    }

    return (
        <Container>
            <Heading as={'h1'}>Popular Movies</Heading>
            <MovieList movieList={(data?.getMoviesPopular?.results ?? []) as Movie[]} />
            <Pagination
                baseUrl={'/movie/popular'}
                initialPage={page}
                totalPages={data?.getMoviesPopular?.total_pages ?? 1}
                totalResults={data?.getMoviesPopular?.total_results ?? 0}
            />
            CLIENT side API Data:
            <JsonViewer data={data} />
        </Container>
    );
}
