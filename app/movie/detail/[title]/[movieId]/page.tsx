export default async function MovieDetailPage({
    params,
}: {
    params: Promise<{ title: string; movieId: string }>;
}) {
    console.log('params:', params);
    const { title, movieId } = await params;

    return (
        <>
            <div>Movie Detail Page</div>
            <p>Category: {title}</p>
            <p>MovieId: {movieId}</p>
        </>
    );
}
