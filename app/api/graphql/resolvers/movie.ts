import { doGet } from '../resolverUtils/resolverHelper';
import { GetUpcomingResponse } from '@/app/api/graphql/generated/graphql';

// parent, args, context, info

type anyParentType = unknown;

type getUpcomingArgs = {
    page?: number;
};

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
        getUpcoming: async (_: unknown, args: getUpcomingArgs): Promise<GetUpcomingResponse> => {
            console.log('getUpcoming args:', args);
            return await doGet<GetUpcomingResponse>('movie/upcoming', args);
        },
    },
};
