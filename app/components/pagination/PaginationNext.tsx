import React from 'react';
import { usePagination } from './PaginationContext';
import Link from 'next/link';

export const PaginationNext = () => {
    const { baseUrl, page, totalPages, prev } = usePagination();

    if (page >= totalPages) {
        return (
            <Link
                href={``}
                className={'button disabled'}
                onClick={(e) => {
                    e.preventDefault();
                }}>
                <span className="material-symbols-outlined">keyboard_arrow_right</span>
            </Link>
        );
    }

    const nextPage = page + 1;

    return (
        <Link href={`${baseUrl}/${nextPage}`} className={'button primary'}>
            <span className="material-symbols-outlined">keyboard_arrow_right</span>
        </Link>
        // <button className={'primary'} onClick={next}>
        //     <span className="material-symbols-outlined">keyboard_arrow_right</span>
        // </button>
    );
};
