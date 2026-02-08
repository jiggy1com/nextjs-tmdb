import { useMovieDetails } from '@components/providers/server/MovieDetailsContext';
import { Container } from '@components/container/Container';
import { Section } from '@components/container/Section';
import { Heading } from '@components/text/Heading';
import { ResponsiveGridItem } from '@components/grid/ResponsiveGridItem';
import { ResponsiveGrid } from '@components/grid/ResponsiveGrid';
import {
	imageFacePath,
	imagePath,
	seoFriendlyUrl,
} from '@/app/utils/stringHelpers';
import Link from 'next/link';
import styles from './MovieDetailsRecommendations.module.scss';
import { Card } from '@components/card/Card';

export function MovieDetailsRecommendations() {
	const { movie } = useMovieDetails();
	const recommendations =
		movie.getMovieDetailsRecommendations?.results?.splice(0, 12) || [];

	if (!recommendations.length) {
		return null;
	}

	return (
		<Section>
			<Container>
				<Heading as="h3">Recommendations</Heading>
				<ResponsiveGrid className={styles.recommendations}>
					{recommendations.map((rec) => {
						return rec ? (
							<ResponsiveGridItem
								key={rec.id}
								mobile={6}
								tablet={4}
								tabletLandscape={3}
								desktop={2}>
								<Card>
									<Link
										href={`/movie/detail/${seoFriendlyUrl(rec.title ?? '')}/${rec.id}`}>
										<img
											src={imagePath(
												rec.poster_path ?? '',
											)}
											alt={rec.title ?? ''}
										/>
										<span>{rec.title}</span>
									</Link>
								</Card>
							</ResponsiveGridItem>
						) : null;
					})}
				</ResponsiveGrid>
			</Container>
		</Section>
	);
}
