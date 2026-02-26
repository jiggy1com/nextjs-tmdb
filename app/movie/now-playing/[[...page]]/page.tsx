import { Container } from '@components/container/Container';
import { Heading } from '@components/text/Heading';
import { GetNowPlayingDocument } from '@/app/api/graphql/generated/graphql';
import { SharedPage } from '@components/movie/page/SharedPage';

export default async function MovieNowPlayingPage({
	params,
}: {
	params: Promise<{ page?: string[] }>;
}) {
	// unwrap the params Promise
	const resolvedParams = await params;

	// grab the first segment or default
	const page = parseInt(resolvedParams.page?.[0] ?? '1');

	return (
		<Container>
			<Heading as={'h1'}>Now Playing Movies - Client Side</Heading>
			<SharedPage
				page={page}
				type={'now_playing'}
				baseUrl={'/movie/now-playing'}
				query={GetNowPlayingDocument}
			/>
		</Container>
	);
}
