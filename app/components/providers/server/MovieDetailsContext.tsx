'use client';

import { createContext, useContext } from 'react';
import { GetMovieDetailsResponse } from '@/app/api/graphql/generated/graphql';

type MovieDetailsContextType = {
    movie: GetMovieDetailsResponse;
};

const MovieDetailsContext = createContext<MovieDetailsContextType | undefined>(undefined);

export function MovieDetailsProvider({
    movie,
    children,
}: {
    movie: GetMovieDetailsResponse;
    children: React.ReactNode;
}) {
    return (
        <MovieDetailsContext.Provider value={{ movie }}>{children}</MovieDetailsContext.Provider>
    );
}

export function useMovieDetails() {
    const context = useContext(MovieDetailsContext);

    if (!context) {
        throw new Error('useMovieDetails must be used within a MovieDetailsProvider');
    }

    return context;
}
