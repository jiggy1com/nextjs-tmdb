import { Movie } from '@/app/api/graphql/generated/graphql';
import { MovieListItem } from '@components/movie/MovieListItem';
import { Grid } from '@components/grid/Grid';
import { GridItem } from '@components/grid/GridItem';
import { Card } from '@components/card/Card';
import Link from 'next/link';
import styles from './MovieList.module.scss';

type MovieListProps = {
    movieList: Movie[];
};

export function MovieList({ movieList }: MovieListProps) {
    return (
        <Grid className={styles.movieList}>
            {movieList.map((movie: Movie) => (
                <MovieListItem key={movie.id} movie={movie} />
            ))}
        </Grid>
    );
}
