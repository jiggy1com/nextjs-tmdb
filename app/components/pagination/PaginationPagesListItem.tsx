import React from 'react';
import { usePagination } from './PaginationContext';
import Link from 'next/link';

type PaginationPagesListItemProps = {
    pageNumber: number;
};
const PaginationPagesListItem = (
    { pageNumber }: PaginationPagesListItemProps = {
        pageNumber: 1,
    },
) => {
    const { page, baseUrl, goToPage } = usePagination();
    const thisClass = `button ${page === pageNumber ? 'info' : 'primary'}`;
    return (
        <Link href={`${baseUrl}/${pageNumber}`} className={thisClass}>
            {pageNumber}
        </Link>
        // <button className={thisClass} onClick={() => goToPage(pageNumber)}>
        //     {pageNumber}
        // </button>
    );
};

export default PaginationPagesListItem;
