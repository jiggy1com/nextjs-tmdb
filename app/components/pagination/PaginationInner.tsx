// import { usePagination } from '@components/pagination/PaginationContext';
// import { useMemo } from 'react';
//
// const PaginationInner = () => {
//     const { page, totalPages, perPage, totalResults } = usePagination();
//
//     const pageArray = useMemo(() => {
//         if (page === 0) return [];
//         const mid = 4;
//         let start = page < mid ? 1 : page - 3;
//         let end = page < mid ? 7 : page + 3;
//         if (end > totalPages) end = totalPages;
//         return Array.from({ length: end - start + 1 }, (_, i) => start + i);
//     }, [page, totalPages]);
//
//     if (page === 0) return <span />;
//
//     return (
//         <div className="container-fluid interior-wrapper mb-5">
//             <div className="row">
//                 <div className="col-12 text-center paginationController">
//                     <PaginationFirstComponent />
//                     <PaginationPrevComponent />
//                     <PaginationPagesComponent pageArray={pageArray} />
//                     <PaginationNextComponent />
//                     <PaginationLastComponent />
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export