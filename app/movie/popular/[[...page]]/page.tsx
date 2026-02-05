import { SharedPage } from '@/app/movie/popular/SharedPage';

export default async function MoviePopularPaginationPage({
    params,
}: {
    params: Promise<{ page?: string[] }>;
}) {
    // unwrap the params Promise
    const resolvedParams = await params;

    // grab the first segment or default
    const page = parseInt(resolvedParams.page?.[0] ?? '1');

    console.log('resolvedParams:', resolvedParams);
    console.log('page:', page);
    return <SharedPage page={page} />;
}
