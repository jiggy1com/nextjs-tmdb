import { MovieObject } from '@/app/api/graphql/generated/graphql';
import { MovieListItem } from '@components/movie/list/MovieListItem';
import { Grid } from '@components/grid/Grid';
import styles from './MovieList.module.scss';

type MovieListProps = {
	movieList: MovieObject[];
};

export function MovieList({ movieList }: MovieListProps) {
	return (
		<Grid className={styles.movieList}>
			{movieList.map((movie: MovieObject) => (
				<MovieListItem key={movie.id} movie={movie} />
			))}
		</Grid>
	);
}
