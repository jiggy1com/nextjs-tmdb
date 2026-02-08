export const seoFriendlyUrl = (url: string) => {
	return url.replace(/\s+/g, '-').toLowerCase();
};

export const voteAverageToPercentage = (voteAverage: number) => {
	return Math.round((voteAverage / 10) * 100) + '%';
};

type ImagePathSize = '500' | 'original' | '300' | '400' | '185';
type ImagePath = string | null;

export const imagePath = (path: ImagePath, size: ImagePathSize) => {
	if (!path) {
		return '/placeholder.png';
	}
	return `https://image.tmdb.org/t/p/w${size}${path}`;
};

export const dollarFormat = (amount: number) => {
	return amount.toLocaleString('en-US', {
		style: 'currency',
		currency: 'USD',
	});
};
