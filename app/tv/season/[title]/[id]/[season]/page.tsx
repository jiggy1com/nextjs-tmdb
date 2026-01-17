export default async function TVSeasonDetailPage({
    params,
}: {
    params: Promise<{ title: string; id: string; season: string }>;
}) {
    console.log('params:', params);
    const { title, id, season } = await params;

    return (
        <>
            <div>tv Detail Page</div>
            <p>title: {title}</p>
            <p>id: {id}</p>
            <p>season: {season}</p>
        </>
    );
}
