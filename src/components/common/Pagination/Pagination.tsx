import React, {useMemo} from 'react';
import './Pagination.css'
import {v1} from "uuid";

type PaginationPropsType = {
    totalCount: number
    currentPage: any
    pageSize: number
    onPageChange: (count:number) => void
    siblingCount: number
}

const DOTS = '...'

const usePagination = (props: PaginationPropsType) => {
    const range = (start: number, end: number) => {
        let length = end - start + 1;
        return Array.from({length}, (_, idx) => idx + start)
    }
    const paginationRange = useMemo(() => {
        let totalPageCount = Math.ceil(props.totalCount / props.pageSize)
        const totalPageNumbers = props.siblingCount + 5

        if (totalPageNumbers >= totalPageCount) {
            return range(1, totalPageCount);
        }
        const leftSiblingIndex = Math.max(props.currentPage - props.siblingCount, 1);
        const rightSiblingIndex = Math.min(
            props.currentPage + props.siblingCount,
            totalPageCount
        );
        const shouldShowLeftDots = leftSiblingIndex > 2;
        const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;
        const firstPageIndex = 1;
        const lastPageIndex = totalPageCount;

        if (!shouldShowLeftDots && shouldShowRightDots) {
            let leftItemCount = 3 + 2 * props.siblingCount;
            let leftRange = range(1, leftItemCount);

            return [...leftRange, DOTS, totalPageCount];
        }

        if (shouldShowLeftDots && !shouldShowRightDots) {

            let rightItemCount = 3 + 2 * props.siblingCount;
            let rightRange = range(
                totalPageCount - rightItemCount + 1,
                totalPageCount
            );
            return [firstPageIndex, DOTS, ...rightRange];
        }

        if (shouldShowLeftDots && shouldShowRightDots) {
            let middleRange = range(leftSiblingIndex, rightSiblingIndex);
            return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
        }
    }, [props]);

    return paginationRange;
};

export const Pagination = (props: PaginationPropsType) => {

    const paginationRange = usePagination(props);

    if (props.currentPage === 0 || paginationRange!.length < 2) {
        return null;
    }

    const onNext = () => {
        props.onPageChange(props.currentPage + 1);
    };

    const onPrevious = () => {
        props.onPageChange(props.currentPage - 1);
    };

    let lastPage = paginationRange![paginationRange!.length - 1];
    return (
        <ul
            className={'pagination-container'}
        >
            {/* Left navigation arrow */}
            <li
                className={props.currentPage === 1 ? 'pagination-item.disabled' : 'pagination-item'}
                onClick={onPrevious}
            >
                <div className={props.currentPage === 1 ? "arrow.disabled" : "arrow left"} />
            </li>
            {paginationRange!.map(pageNumber => {

                // If the pageItem is a DOT, render the DOTS unicode character
                if (pageNumber === DOTS) {
                    return <li className="pagination-item dots">&#8230;</li>;
                }

                // Render our Page Pills
                return (
                    <li key={v1()}
                        className={pageNumber === props.currentPage ? 'pagination-item selected' : 'pagination-item'}
                        onClick={() => props.onPageChange(+pageNumber)}
                    >
                        {pageNumber}
                    </li>
                );
            })}
            {/*  Right Navigation arrow */}
            <li
                className={props.currentPage === lastPage ? 'pagination-item.disabled' : 'pagination-item'}
                onClick={onNext}
            >
                <div className={props.currentPage === lastPage ? "arrow.disabled" : "arrow right"} />
            </li>
        </ul>
    );
};
