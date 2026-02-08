import { dollarFormat } from '@/app/utils/stringHelpers';
import { useMovieDetails } from '@components/providers/server/MovieDetailsContext';
import styles from './MovieDetailsSidebar.module.scss';
export function MovieDetailsSidebar() {
	const { movie } = useMovieDetails();

	return (
		<div className={styles.sidebar}>
			Budget: {dollarFormat(movie.budget)}
		</div>
	);
}
