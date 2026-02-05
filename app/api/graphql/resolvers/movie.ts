import { doGet } from '../resolverUtils/resolverHelper';
import { GetUpcomingResponse, GetMovieDetailsResponse } from '@/app/api/graphql/generated/graphql';

// parent, args, context, info

type anyParentType = unknown;

type getUpcomingArgs = {
    page?: number;
};

type getMovieDetailsArgs = {
    id: number;
};

export const movie = {
    Query: {
        // this endpoint returns a single latest movie object
        // intended for dev purposes only, not for production use
        getMovieLatest: async () => {
            return await doGet('movie/latest');
        },

        // app endpoints
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
            return await doGet<GetUpcomingResponse>('movie/upcoming', args);
        },
        getMovieDetails: async (
            _: unknown,
            args: getMovieDetailsArgs,
        ): Promise<GetMovieDetailsResponse> => {
            console.log('getMovieDetails args:', args);
            return await doGet<GetMovieDetailsResponse>(`movie/${args.id}`);
        },
    },
};
