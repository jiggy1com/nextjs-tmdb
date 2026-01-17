export default async function TVDetailPage({
    params,
}: {
    params: Promise<{ title: string; id: string }>;
}) {
    console.log('params:', params);
    const { title, id } = await params;

    return (
        <>
            <div>tv Detail Page</div>
            <p>title: {title}</p>
            <p>id: {id}</p>
        </>
    );
}
