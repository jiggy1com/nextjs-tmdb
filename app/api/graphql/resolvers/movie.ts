import { doGet } from '../resolverUtils/resolverHelper';
import {
	GetMovieDetailsResponse,
	GetMoviesResponse,
} from '@/app/api/graphql/generated/graphql';

// parent, args, context, info

// type anyParentType = unknown;
//
// type getUpcomingArgs = {
// 	page?: number;
// };
//
// type getPopularArgs = {
// 	page?: number;
// };

type getMovieDetailsArgs = {
	id: number;
};

type getMoviesArgs = {
	type: string;
	page?: number;
};

// type getServerSideMoviesArgs = {
// 	page?: number;
// };

export const movie = {
	Query: {
		// this endpoint returns a single latest movie object
		// intended for dev purposes only, not for production use
		getMovieLatest: async () => {
			return await doGet('movie/latest');
		},

		// app endpoints
		// getNowPlaying: async () => {
		// 	return await doGet('movie/now_playing');
		// },
		// getMoviesPopular: async (_: unknown, args: getPopularArgs) => {
		// 	return await doGet(`movie/popular?page=${args.page}`);
		// },
		// getTopRated: async (_: unknown, args: getServerSideMoviesArgs) => {
		// 	return await doGet<GetTopRatedResponse>('movie/top_rated', args);
		// },
		// getUpcoming: async (
		// 	_: unknown,
		// 	args: getServerSideMoviesArgs,
		// ): Promise<GetUpcomingResponse> => {
		// 	return await doGet<GetUpcomingResponse>('movie/upcoming', args);
		// },

		getMovies: async (
			_: unknown,
			args: getMoviesArgs,
		): Promise<GetMoviesResponse> => {
			return await doGet<GetMoviesResponse>(`movie/${args.type}`, {
				page: args.page,
			});
		},

		getMovieDetails: async (
			_: unknown,
			args: getMovieDetailsArgs,
		): Promise<GetMovieDetailsResponse> => {
			console.log('getMovieDetails args:', args);
			return await doGet<GetMovieDetailsResponse>(`movie/${args.id}`);
		},
	},
	GetMovieDetailsResponse: {
		getMovieCredits: async (parent: getMovieDetailsArgs) => {
			console.log('getMovieCredits parent:', parent);
			return await doGet(`movie/${parent.id}/credits`);
		},
		getMovieDetailsRecommendations: async (parent: getMovieDetailsArgs) => {
			console.log('getMovieDetailsRecommendations parent:', parent);
			return await doGet(`movie/${parent.id}/recommendations?page=1`);
		},
	},
};
