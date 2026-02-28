import styles from '@components/movie/details/MovieDetailsHeroCrew.module.scss';
import { useMovieDetails } from '@components/providers/server/MovieDetailsContext';
import { ResponsiveGrid } from '@components/grid/ResponsiveGrid';
import { ResponsiveGridItem } from '@components/grid/ResponsiveGridItem';

export function MovieDetailsHeroCrew() {
	const { movie } = useMovieDetails();
	const crew = movie?.getMovieDetailsCredits?.crew?.slice(0, 6) || [];

	return (
		<ResponsiveGrid className={styles.crew}>
			{crew.map((member, idx) =>
				member ? (
					<ResponsiveGridItem
						key={member.id + '-' + idx}
						mobile={6}
						tablet={4}
						tabletLandscape={3}>
						<div className={styles.crewMember}>
							<p>{member.name}</p>
							<p>{member.job}</p>
						</div>
					</ResponsiveGridItem>
				) : null,
			)}
		</ResponsiveGrid>
	);
}
