import React from 'react';
import { usePagination } from './PaginationContext';
import PaginationPagesListItem from '@components/pagination/PaginationPagesListItem';

type PaginationPagesListProps = {
    pageArray: number[];
};
export const PaginationPagesList = (
    { pageArray }: PaginationPagesListProps = {
        pageArray: [],
    },
) => {
    const { page } = usePagination();

    if (!pageArray.length) return <span />;

    return (
        <>
            {pageArray.map((pageNumber: number) => (
                <PaginationPagesListItem key={pageNumber} pageNumber={pageNumber} />
            ))}
        </>
    );
};

export default PaginationPagesList;
