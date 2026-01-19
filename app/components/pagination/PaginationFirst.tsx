import React from 'react';
import { usePagination } from './PaginationContext';

export const PaginationFirst = () => {
    const { first } = usePagination();
    return (
        <button className="btn btn-primary" onClick={first}>
            <span className="fa fa-chevron-left"></span>
            <span className="fa fa-chevron-left"></span>
        </button>
    );
};
