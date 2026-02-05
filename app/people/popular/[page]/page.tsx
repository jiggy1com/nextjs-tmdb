export default async function PeoplePopularPaginationPage({
    params,
}: {
    params: Promise<{ page: string }>;
}) {
    console.log('params:', params);
    const { page } = await params;
    return <div>people popular page: {page}</div>;
}
