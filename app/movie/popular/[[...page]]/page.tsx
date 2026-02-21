import { SharedPage } from '@components/movie/page/SharedPage';
import { GetMoviesPopularDocument } from '@/app/api/graphql/generated/graphql';
import { Heading } from '@components/text/Heading';
import { Container } from '@components/container/Container';

export default async function MoviePopularPaginationPage({
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
			<Heading as={'h1'}>Popular Movies</Heading>
			<SharedPage
				page={page}
				type={'popular'}
				baseUrl={'/movie/popular'}
				query={GetMoviesPopularDocument}
			/>
		</Container>
	);
}
