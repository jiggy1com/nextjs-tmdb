import React from 'react';
import { usePagination } from './PaginationContext';
import Link from 'next/link';

export const PaginationPrev = () => {
    const { baseUrl, page, totalPages, prev } = usePagination();

    if (page <= 1) {
        return (
            <Link
                href={``}
                className={'button disabled'}
                onClick={(e) => {
                    e.preventDefault();
                }}>
                <span className="material-symbols-outlined">keyboard_arrow_left</span>
            </Link>
        );
    }

    const prevPage = page - 1;

    return (
        <Link href={`${baseUrl}/${prevPage}`} className={'button primary'}>
            <span className="material-symbols-outlined">keyboard_arrow_left</span>
        </Link>
        // <button className={'primary'} onClick={prev}>
        //     <span className="material-symbols-outlined">keyboard_arrow_left</span>
        // </button>
    );
};
