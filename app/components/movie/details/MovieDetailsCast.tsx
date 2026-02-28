import { useMovieDetails } from '@components/providers/server/MovieDetailsContext';
import { Container } from '@components/container/Container';
import { ResponsiveGrid } from '@components/grid/ResponsiveGrid';
import { ResponsiveGridItem } from '@components/grid/ResponsiveGridItem';
import { imageFacePath, imagePath } from '@/app/utils/stringHelpers';
import { Card } from '@components/card/Card';
import { Heading } from '@components/text/Heading';
import styles from './MovieDetailsCast.module.scss';
import { ContainerFluid } from '@components/container/ContainerFluid';
import { Section } from '@components/container/Section';
export function MovieDetailsCast() {
	const { movie } = useMovieDetails();
	const cast = movie?.getMovieDetailsCredits?.cast?.splice(0, 12) || [];

	return (
		<Section>
			<Container>
				<Heading as={'h3'}>Cast</Heading>
				<ResponsiveGrid className={styles.cast}>
					{cast.map((member, idx) =>
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
											member?.profile_path ?? '',
										)}
										alt={member?.name ?? ''}
									/>
									<div className={styles.copy}>
										<span>{member.name}</span>
										<span>{member.character}</span>
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
