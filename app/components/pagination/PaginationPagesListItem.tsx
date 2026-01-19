import React from 'react';
import { usePagination } from './PaginationContext';

type PaginationPagesListItemProps = {
    pageNumber: number;
};
const PaginationPagesListItem = (
    { pageNumber }: PaginationPagesListItemProps = {
        pageNumber: 1,
    },
) => {
    const { page, goToPage } = usePagination();
    const thisClass = page === pageNumber ? 'btn btn-info' : 'btn btn-primary';

    return (
        <button className={thisClass} onClick={() => goToPage(pageNumber)}>
            {pageNumber}
        </button>
    );
};

export default PaginationPagesListItem;
