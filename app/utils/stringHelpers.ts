export const seoFriendlyUrl = (url: string) => {
    return url.replace(/\s+/g, '-').toLowerCase();
};

export const voteAverageToPercentage = (voteAverage: number) => {
    return Math.round((voteAverage / 10) * 100) + '%';
};
