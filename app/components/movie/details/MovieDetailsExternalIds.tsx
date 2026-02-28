import { useMovieDetails } from '@components/providers/server/MovieDetailsContext';
import Link from 'next/link';
import { Card } from '@components/card/Card';

type ExternalIdLinkProps = {
	url: string;
	label: string;
};

const ExternalIdLink = ({ url, label }: ExternalIdLinkProps) => {
	return (
		<Link
			href={url}
			title={label}
			className={'button small'}
			target="_blank">
			{label}
		</Link>
	);
};

export function MovieDetailsExternalIds() {
	const { movie } = useMovieDetails();
	const externalIds = movie?.getMovieDetailsExternalIds ?? {
		imdb_id: null,
		wikidata_id: null,
		facebook_id: null,
		instagram_id: null,
		twitter_id: null,
	};

	const externalIdsMap = {
		imdb_id: {
			isValid: externalIds.imdb_id !== null,
			url: `https://www.imdb.com/title/${externalIds.imdb_id}/`,
			label: 'IMDb',
		},
		wikidata_id: {
			isValid: externalIds.wikidata_id !== null,
			url: `https://www.wikidata.org/wiki/${externalIds.wikidata_id}`,
			label: 'Wikidata',
		},
		facebook_id: {
			isValid: externalIds.facebook_id !== null,
			url: `https://www.facebook.com/${externalIds.facebook_id}`,
			label: 'Facebook',
		},
		instagram_id: {
			isValid: externalIds.instagram_id !== null,
			url: `https://www.instagram.com/${externalIds.instagram_id}/`,
			label: 'Instagram',
		},
		twitter_id: {
			isValid: externalIds.twitter_id !== null,
			url: `https://twitter.com/${externalIds.twitter_id}`,
			label: 'Twitter',
		},
	};

	const arr = Object.keys(externalIdsMap);
	return (
		<Card
			heading="External Links"
			isSidebarCard={true}
			addPadding={true}
			addBorder={true}>
			{arr.map((key) => {
				const obj = externalIdsMap[key as keyof typeof externalIdsMap];
				if (obj.isValid) {
					const { url, label } = obj;
					return (
						<ExternalIdLink key={label} url={url} label={label} />
					);
				}
			})}
		</Card>
	);
}
