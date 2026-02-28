import { Card } from '@components/card/Card';
import { useMovieDetails } from '@components/providers/server/MovieDetailsContext';
import Link from 'next/link';
import { seoFriendlyUrl } from '@/app/utils/stringHelpers';
import { GetMovieDetailsKeyword } from '@/app/api/graphql/generated/graphql';
import styles from './MovieDetailsKeywords.module.scss';

export function MovieDetailsKeywords() {
	const { movie } = useMovieDetails();
	const { getMovieDetailsKeywords } = movie ?? {};
	const keywords = (getMovieDetailsKeywords?.keywords ||
		[]) as GetMovieDetailsKeyword[];

	const linkClassList = ['button', 'small', styles.button].join(' ');

	if (!keywords.length) {
		return <></>;
	}

	return (
		<Card
			heading="Keywords"
			isSidebarCard={true}
			addBorder={true}
			addPadding={true}>
			<div className={styles.keywords}>
				{keywords
					.sort((a, b) => {
						const aValue = a?.name ?? '';
						const bValue = b?.name ?? '';

						if (aValue < bValue) {
							return -1;
						}
						if (aValue > bValue) {
							return 1;
						}
						return 0;
					})
					.map((keyword: GetMovieDetailsKeyword) => {
						return (
							<Link
								key={keyword.id}
								className={linkClassList}
								href={`/keyword/${keyword.id}/${seoFriendlyUrl(keyword?.name ?? '')}`}>
								{keyword.name}
							</Link>
						);
					})}
			</div>
		</Card>
	);
}
