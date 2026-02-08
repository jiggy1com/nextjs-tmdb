import { Heading } from '@components/text/Heading';
import { useMovieDetails } from '@components/providers/server/MovieDetailsContext';
import styles from './MovieDetailsHero.module.scss';
import { ResponsiveGrid } from '@components/grid/ResponsiveGrid';
import { ResponsiveGridItem } from '@components/grid/ResponsiveGridItem';
import { Container } from '@components/container/Container';
import { MovieDetailsHeroCrew } from '@components/movie/details/MovieDetailsHeroCrew';
import { dollarFormat } from '@/app/utils/stringHelpers';

export function MovieDetailsHero() {
	const { movie } = useMovieDetails();

	return (
		<div className={styles.movieDetailsHero}>
			{/*background image*/}
			<img
				className={styles.background}
				src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path}`}
			/>

			<ResponsiveGrid className={styles.elevate}>
				<ResponsiveGridItem mobile={12} tablet={4}>
					<Container>
						{/*side image*/}
						<img
							className={styles.poster}
							src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
						/>
					</Container>
				</ResponsiveGridItem>
				<ResponsiveGridItem mobile={12} tablet={8}>
					<div className={styles.content}>
						<Heading>{movie.title}</Heading>
						{movie.tagline && (
							<p className={styles.tagLine}>{movie.tagline}</p>
						)}
						{movie.overview && (
							<p className={styles.overview}>{movie.overview}</p>
						)}
						<MovieDetailsHeroCrew />
					</div>
				</ResponsiveGridItem>
			</ResponsiveGrid>
		</div>
	);
}
