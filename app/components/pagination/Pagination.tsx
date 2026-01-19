'use client';
import React, { useMemo } from 'react';
import { PaginationProvider, usePagination } from './PaginationContext';

import { Container } from '@components/container/Container';
import { PaginationPagesList } from '@components/pagination/PaginationPagesList';
import { PaginationNext } from '@components/pagination/PaginationNext';
import { PaginationFirst } from '@components/pagination/PaginationFirst';
import { PaginationPrev } from '@components/pagination/PaginationPrev';
import { PaginationLast } from '@components/pagination/PaginationLast';

const PaginationControllerInner = () => {
    const { page, totalPages, perPage, totalResults } = usePagination();

    const pageArray = useMemo(() => {
        if (page === 0) return [];
        const mid = 4;
        const start = page < mid ? 1 : page - 3;
        let end = page < mid ? 7 : page + 3;
        if (end > totalPages) end = totalPages;
        return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    }, [page, totalPages]);

    if (page === 0) return <span />;

    return (
        <Container>
            <PaginationFirst />
            <PaginationPrev />
            <PaginationPagesList pageArray={pageArray} />
            <PaginationNext />
            <PaginationLast />
        </Container>
    );
};

type PaginationControllerProps = {
    initialPage?: number;
    totalPages?: number;
    totalResults?: number;
    perPage?: number;
    notifyParent?: (data: { page: number }) => void;
};
const Pagination = (
    props: PaginationControllerProps = {
        initialPage: 1,
        totalPages: 0,
        totalResults: 0,
        perPage: 20,
        notifyParent: () => {},
    },
) => (
    <PaginationProvider {...props}>
        <PaginationControllerInner />
    </PaginationProvider>
);

export default Pagination;
