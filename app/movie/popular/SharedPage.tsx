'use client';
import { Container } from '@components/container/Container';
import { Heading } from '@components/text/Heading';
import { MovieList } from '@components/movie/MovieList';
import { GetPopularDocument, Movie } from '@/app/api/graphql/generated/graphql';
import Pagination from '@components/pagination/Pagination';
import { useQuery } from '@apollo/client/react';

type SharedPageProps = {
    page: number;
};

export function SharedPage({ page }: SharedPageProps) {
    const { data } = useQuery(GetPopularDocument, {
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
            <MovieList movieList={(data?.getPopular?.results ?? []) as Movie[]} />
            <Pagination
                baseUrl={'/movie/popular'}
                initialPage={page}
                totalPages={data?.getPopular?.total_pages ?? 1}
                totalResults={data?.getPopular?.total_results ?? 0}
            />
            CLIENT side API Data:
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </Container>
    );
}
