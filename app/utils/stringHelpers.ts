export const seoFriendlyUrl = (url: string) => {
	return url.replace(/\s+/g, '-').toLowerCase();
};

export const voteAverageToPercentage = (voteAverage: number) => {
	return Math.round((voteAverage / 10) * 100) + '%';
};

type ImagePathSize = '500' | 'original' | '300' | '400' | '185';
type ImagePath = string | null;

export const imagePath = (path: ImagePath, size: ImagePathSize = '300') => {
	if (!path) {
		return `https://thumbs.dreamstime.com/z/playful-missing-image-cartoon-icon-sad-photo-frame-character-bold-outlines-white-background-ui-perspective-funny-design-403989886.jpg?ct=jpeg`;
		return 'https://media1.tenor.com/m/UE8tpiyGN9IAAAAd/its-just-not-available-dj-slope.gif';
	}
	return `https://image.tmdb.org/t/p/w${size}${path}`;
};

export const imageFacePath = (path: ImagePath) => {
	if (!path) {
		return `https://thumbs.dreamstime.com/z/playful-missing-image-cartoon-icon-sad-photo-frame-character-bold-outlines-white-background-ui-perspective-funny-design-403989886.jpg?ct=jpeg`;
		return 'https://media1.tenor.com/m/UE8tpiyGN9IAAAAd/its-just-not-available-dj-slope.gif';
	}
	return `https://image.tmdb.org/t/p/w132_and_h132_face${path}`;
};

export const dollarFormat = (amount: number) => {
	return amount.toLocaleString('en-US', {
		style: 'currency',
		currency: 'USD',
	});
};

export function convertMinutesToHoursAndMinutes(minutes: number): string {
	const hours = Math.floor(minutes / 60);
	const remainingMinutes = minutes % 60;
	return `${hours}h ${remainingMinutes}m`;
}

export function quickDateFormat(dateString: string): string {
	const [year, month, day] = dateString.split('-');
	return `${month}/${day}/${year}`;
}

export function convertNumberWithCommas(num: number): string {
	return num.toLocaleString();
}
