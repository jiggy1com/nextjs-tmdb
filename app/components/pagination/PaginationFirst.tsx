import React from 'react';
import { usePagination } from './PaginationContext';
import Link from 'next/link';

export const PaginationFirst = () => {
    const { baseUrl, page, first } = usePagination();

    if (page <= 1) {
        return (
            <Link
                href={``}
                className={'button disabled'}
                onClick={(e) => {
                    e.preventDefault();
                }}>
                <span className="material-symbols-outlined">keyboard_double_arrow_left</span>
            </Link>
        );
    }

    return (
        <Link href={`${baseUrl}/1`} className={'button primary'}>
            <span className="material-symbols-outlined">keyboard_double_arrow_left</span>
        </Link>
        // <button className={'primary'} onClick={first}>
        //     <span className="material-symbols-outlined">keyboard_double_arrow_left</span>
        // </button>
    );
};
