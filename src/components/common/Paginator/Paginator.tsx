import React from 'react';
import us from './Paginator.module.css';

type PaginatorType = {
	currentPage: number
	onPageChanged: (page: number) => void
	totalUsersCount: number
	pageSize: number
}

export const Paginator = ({totalUsersCount, pageSize, onPageChanged, currentPage}: PaginatorType) => {

	const pagesCount = Math.ceil(totalUsersCount / pageSize)

	const pages = [];

	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}


	return (
		<div className={us.pagination_wrap}>
			{pages.map((page, ind) => {
				return <span onClick={() => {
					onPageChanged(page)
				}} key={ind} className={currentPage === page ? us.selected : us.page}>{page}</span>
			})}
		</div>
	)
}

