export default async function PersonDetailsPage({
    params,
}: {
    params: Promise<{ name: string; id: string }>;
}) {
    console.log('params:', params);
    const { name, id } = await params;

    return (
        <>
            <div>Movie Detail Page</div>
            <p>name: {name}</p>
            <p>id: {id}</p>
        </>
    );
}
