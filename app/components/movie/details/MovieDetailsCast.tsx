import { useMovieDetails } from '@components/providers/server/MovieDetailsContext';
import { Container } from '@components/container/Container';
import { ResponsiveGrid } from '@components/grid/ResponsiveGrid';
import { ResponsiveGridItem } from '@components/grid/ResponsiveGridItem';
import { imagePath } from '@/app/utils/stringHelpers';
import { Card } from '@components/card/Card';
import { Heading } from '@components/text/Heading';
import styles from './MovieDetailsCast.module.scss';
import { ContainerFluid } from '@components/container/ContainerFluid';
import { Section } from '@components/container/Section';
export function MovieDetailsCast() {
	const { movie } = useMovieDetails();
	const cast = movie?.getMovieCredits?.cast?.splice(0, 6) || [];

	return (
		<Section>
			<Container>
				<Heading as={'h3'}>Cast</Heading>
				<ResponsiveGrid className={styles.cast}>
					{cast.map((member) =>
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
										<span>{member.name}</span> as{' '}
										{member.character}
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
