import { doGet } from '../resolverUtils/resolverHelper';
import {
	GetMovieDetailsResponse,
	GetMoviesResponse,
} from '@/app/api/graphql/generated/graphql';

// parent, args, context, info

type getMovieDetailsArgs = {
	id: number;
};

type getMoviesArgs = {
	type: string;
	page?: number;
};

export const movie = {
	Query: {
		// this endpoint returns a single latest movie object
		// intended for dev purposes only, not for production use
		getMovieLatest: async () => {
			return await doGet('movie/latest');
		},

		// app endpoints
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
			return await doGet<GetMovieDetailsResponse>(`movie/${args.id}`);
		},
	},
	GetMovieDetailsResponse: {
		getMovieDetailsCredits: async (parent: getMovieDetailsArgs) => {
			return await doGet(`movie/${parent.id}/credits`);
		},
		getMovieDetailsRecommendations: async (parent: getMovieDetailsArgs) => {
			return await doGet(`movie/${parent.id}/recommendations?page=1`);
		},
		getMovieDetailsKeywords: async (parent: getMovieDetailsArgs) => {
			return await doGet(`movie/${parent.id}/keywords`);
		},
		getMovieDetailsExternalIds: async (parent: getMovieDetailsArgs) => {
			return await doGet(`movie/${parent.id}/external_ids`);
		},
	},
};
