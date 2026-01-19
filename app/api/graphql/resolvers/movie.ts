import { doGet } from '../resolverUtils/resolverHelper';

// parent, args, context, info

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
        getUpcoming: async (_, args) => {
            console.log('getUpcoming args:', args);
            return await doGet('movie/upcoming', args);
        },
    },
};
