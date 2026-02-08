import { useMovieDetails } from '@components/providers/server/MovieDetailsContext';
import { Container } from '@components/container/Container';
import { Heading } from '@components/text/Heading';
import { ResponsiveGrid } from '@components/grid/ResponsiveGrid';
import styles from '@components/movie/details/MovieDetailsCast.module.scss';
import { ResponsiveGridItem } from '@components/grid/ResponsiveGridItem';
import { Card } from '@components/card/Card';
import { imagePath } from '@/app/utils/stringHelpers';
import { Section } from '@components/container/Section';

export function MovieDetailsCrew() {
	const { movie } = useMovieDetails();
	const crew = movie?.getMovieCredits?.crew?.splice(0, 6) || [];

	return (
		<Section>
			<Container>
				<Heading as={'h3'}>Crew</Heading>
				<ResponsiveGrid className={styles.cast}>
					{crew.map((member) =>
						member ? (
							<ResponsiveGridItem
								key={member.id}
								mobile={6}
								tablet={3}
								desktop={2}>
								<Card>
									{member.profile_path && (
										<img
											src={imagePath(
												member.profile_path,
												'185',
											)}
											alt={member?.name ?? ''}
										/>
									)}
									<div className={styles.copy}>
										{member.id}
										<span>{member.name}</span> as{' '}
										{member.job}
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
