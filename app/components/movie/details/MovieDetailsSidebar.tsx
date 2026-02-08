import {
	convertMinutesToHoursAndMinutes,
	dollarFormat,
	quickDateFormat,
} from '@/app/utils/stringHelpers';
import { useMovieDetails } from '@components/providers/server/MovieDetailsContext';
import styles from './MovieDetailsSidebar.module.scss';
import { Container } from '@components/container/Container';
import Link from 'next/link';
import { MovieDetailsExternalIds } from '@components/movie/details/MovieDetailsExternalIds';
export function MovieDetailsSidebar() {
	const { movie } = useMovieDetails();

	return (
		<div className={styles.sidebar}>
			<MovieDetailsExternalIds />

			<div className={styles.shortInfo}>
				{movie.homepage && (
					<>
						<span className={styles.heading}>Home Page</span>
						<span className={styles.headingValue}>
							<Link href={movie.homepage} target={'_blank'}>
								{movie.homepage}
							</Link>
						</span>
					</>
				)}

				{movie.status && (
					<>
						<span className={styles.heading}>Status</span>
						<span className={styles.headingValue}>
							{movie.status}
						</span>
					</>
				)}

				{movie.release_date && (
					<>
						<span className={styles.heading}>Release Date</span>
						<span className={styles.headingValue}>
							{quickDateFormat(movie.release_date)}
						</span>
					</>
				)}

				{movie.original_language && (
					<>
						<span className={styles.heading}>
							Original Language
						</span>
						<span className={styles.headingValue}>
							{movie.original_language}
						</span>
					</>
				)}

				{movie.budget > 0 && (
					<>
						<span className={styles.heading}>Budget</span>
						<span className={styles.headingValue}>
							{dollarFormat(movie.budget)}
						</span>
					</>
				)}

				{movie.revenue > 0 && (
					<>
						<span className={styles.heading}>Revenue</span>
						<span className={styles.headingValue}>
							{dollarFormat(movie.revenue)}
						</span>
					</>
				)}

				{movie.runtime && (
					<>
						<span className={styles.heading}>Run Time</span>
						<span className={styles.headingValue}>
							{convertMinutesToHoursAndMinutes(movie.runtime)}
						</span>
					</>
				)}
			</div>
		</div>
	);
}
