import { doGet } from '../resolverUtils/resolverHelper';

export const movie = {
    Query: {
        // this endpoint returns a single latest movie object
        // intended for dev purposes only, not for production use
        getMovieLatest: async () => {
            return await doGet('movie/latest');
        },
        getNowPlaying: async () => {
            return await doGet('movie/now_playing');
        },
        getPopular: async () => {
            return await doGet('movie/popular');
        },
        getTopRated: async () => {
            return await doGet('movie/top_rated');
        },
        getUpcoming: async () => {
            return await doGet('movie/upcoming');
        },
    },
};
