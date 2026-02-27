import { useMovieDetails } from '@components/providers/server/MovieDetailsContext';
import { Container } from '@components/container/Container';
import { Heading } from '@components/text/Heading';
import { ResponsiveGrid } from '@components/grid/ResponsiveGrid';
import styles from '@components/movie/details/MovieDetailsCast.module.scss';
import { ResponsiveGridItem } from '@components/grid/ResponsiveGridItem';
import { Card } from '@components/card/Card';
import { imageFacePath, imagePath } from '@/app/utils/stringHelpers';
import { Section } from '@components/container/Section';

export function MovieDetailsCrew() {
	const { movie } = useMovieDetails();
	const crew = movie?.getMovieCredits?.crew?.splice(0, 12) || [];

	return (
		<Section>
			<Container>
				<Heading as={'h3'}>Crew</Heading>
				<ResponsiveGrid className={styles.cast}>
					{crew.map((member, idx) =>
						member ? (
							<ResponsiveGridItem
								key={member.id + '-' + idx}
								mobile={6}
								tabletLandscape={4}
								desktop={3}
								desktopWide={2}>
								<Card fullHeight={true}>
									<img
										src={imageFacePath(
											member.profile_path ?? '',
										)}
										alt={member?.name ?? ''}
									/>
									<div className={styles.copy}>
										<span>{member.name}</span>
										<span>{member.job}</span>
									</div>
								</Card>
							</ResponsiveGridItem>
						) : null,
					)}
				</ResponsiveGrid>
			</Container>
		</Section>
	);
}
