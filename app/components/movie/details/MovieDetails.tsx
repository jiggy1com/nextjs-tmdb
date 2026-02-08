'use client';
import { MovieDetailsCast } from '@components/movie/details/MovieDetailsCast';
import { MovieDetailsImages } from '@components/movie/details/MovieDetailsImages';
import { MovieDetailsKeywords } from '@components/movie/details/MovieDetailsKeywords';
import { MovieDetailsMedia } from '@components/movie/details/MovieDetailsMedia';
import { MovieDetailsRecommendations } from '@components/movie/details/MovieDetailsRecommendations';
import { MovieDetailsReleaseDates } from '@components/movie/details/MovieDetailsReleaseDates';
import { MovieDetailsReviews } from '@components/movie/details/MovieDetailsReviews';
import { MovieDetailsSimilar } from '@components/movie/details/MovieDetailsSimilar';
import { MovieDetailsTranslations } from '@components/movie/details/MovieDetailsTranslations';
import { MovieDetailsWatchProviders } from '@components/movie/details/MovieDetailsWatchProviders';
import { Heading } from '@components/text/Heading';
import JsonViewer from '@components/jsonViewer/JsonViewer';
import { MovieDetailsHero } from '@components/movie/details/MovieDetailsHero';

import { useMovieDetails } from '@components/providers/server/MovieDetailsContext';
import { ResponsiveGrid } from '@components/grid/ResponsiveGrid';
import { ResponsiveGridItem } from '@components/grid/ResponsiveGridItem';
import { MovieDetailsCrew } from '@components/movie/details/MovieDetailsCrew';
import { dollarFormat } from '@/app/utils/stringHelpers';
import { MovieDetailsSidebar } from '@components/movie/details/MovieDetailsSidebar';

export function MovieDetails() {
	const { movie } = useMovieDetails();

	return (
		<>
			<MovieDetailsHero />
			<ResponsiveGrid>
				<ResponsiveGridItem mobile={12} tablet={7} desktop={9}>
					<MovieDetailsCast />

					<MovieDetailsCrew />

					{/*<MovieDetailsImages />*/}
					{/*<MovieDetailsKeywords />*/}
					{/*<MovieDetailsMedia />*/}
					{/*<MovieDetailsRecommendations />*/}
					{/*<MovieDetailsReleaseDates />*/}
					{/*<MovieDetailsReviews />*/}
					{/*<MovieDetailsSimilar />*/}
					{/*<MovieDetailsTranslations />*/}
					{/*<MovieDetailsWatchProviders />*/}
				</ResponsiveGridItem>
				<ResponsiveGridItem mobile={12} tablet={5} desktop={3}>
					<MovieDetailsSidebar />
				</ResponsiveGridItem>
			</ResponsiveGrid>

			<JsonViewer data={movie} />
		</>
	);
}
