'use client';
import React, { createContext, useContext, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';

const PaginationContext = createContext({
    page: 1,
    totalPages: 0,
    totalResults: 0,
    perPage: 20,
    baseUrl: '',
    goToPage: (page: number) => {},
    first: () => {},
    last: () => {},
    prev: () => {},
    next: () => {},
});

export const usePagination = () => useContext(PaginationContext);

type PaginationProviderProps = {
    children: React.ReactNode;
    initialPage?: number;
    totalPages?: number;
    totalResults?: number;
    perPage?: number;
    notifyParent?: (data: { page: number }) => void;
    baseUrl?: string;
};
export const PaginationProvider = ({
    children,
    initialPage = 1,
    totalPages = 0,
    totalResults = 0,
    perPage = 20,
    notifyParent = () => {},
    baseUrl = '',
}: PaginationProviderProps) => {
    const router = useRouter();
    const [page, setPage] = useState(initialPage);
    const [totalPagesState, setTotalPages] = useState(totalPages);
    const [totalResultsState, setTotalResults] = useState(totalResults);

    const goToPage = useCallback(
        (newPage: number) => {
            setPage(newPage);
            notifyParent({ page: newPage });
        },
        [notifyParent],
    );

    const first = useCallback(() => {
        // goToPage(1), [goToPage]
        router.push(`${baseUrl}/1`);
    }, [router, baseUrl]);
    const last = useCallback(() => {
        // goToPage(totalPagesState), [goToPage, totalPagesState]
        router.push(`${baseUrl}/${totalPagesState}`);
    }, [router, baseUrl, totalPagesState]);
    const prev = useCallback(() => goToPage(Math.max(1, page - 1)), [goToPage, page]);
    const next = useCallback(
        () => goToPage(Math.min(totalPagesState, page + 1)),
        [goToPage, page, totalPagesState],
    );

    return (
        <PaginationContext.Provider
            value={{
                page,
                totalPages: totalPagesState,
                totalResults: totalResultsState,
                perPage,
                baseUrl,
                goToPage,
                first,
                last,
                prev,
                next,
            }}>
            {children}
        </PaginationContext.Provider>
    );
};
