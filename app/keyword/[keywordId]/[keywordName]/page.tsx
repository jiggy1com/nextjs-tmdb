export default async function KeywordPage({
	params,
}: {
	params: Promise<{ keywordId: string; keywordName: string }>;
}) {
	const { keywordId, keywordName } = await params;
	return (
		<div>
			<p>Keyword ID: {keywordId}</p>

			<p>Keyword: {keywordName}</p>
		</div>
	);
}
