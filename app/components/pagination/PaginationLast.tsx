import React from 'react';
import { usePagination } from './PaginationContext';
import Link from 'next/link';

export const PaginationLast = () => {
    const { baseUrl, totalPages, page, last } = usePagination();

    if (page >= totalPages) {
        return (
            <Link
                href={``}
                className={'button disabled'}
                onClick={(e) => {
                    e.preventDefault();
                }}>
                <span className="material-symbols-outlined">keyboard_double_arrow_right</span>
            </Link>
        );
    }

    return (
        <Link href={`${baseUrl}/${totalPages}`} className={'button primary'}>
            <span className="material-symbols-outlined">keyboard_double_arrow_right</span>
        </Link>
        // <button className={'primary'} onClick={last}>
        //     <span className="material-symbols-outlined">keyboard_double_arrow_right</span>
        // </button>
    );
};
