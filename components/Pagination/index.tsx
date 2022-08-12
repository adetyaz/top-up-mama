import { FC } from 'react'
import Pagination from 'react-bootstrap/Pagination'

type PaginationProps = {
	usersPerPage: number
	totalUsers: any
	paginate: any
}

export const PagePagination: FC<PaginationProps> = ({
	usersPerPage,
	totalUsers,
	paginate,
}) => {
	const pageNumbers = []

	for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
		pageNumbers.push(i)
	}
	return (
		<nav>
			<ul className='pagination'>
				{pageNumbers.map((number) => (
					<li key={number} className='page-item'>
						<a onClick={() => paginate(number)} href='!#' className='page-link'>
							{number}
						</a>
					</li>
				))}
			</ul>
		</nav>
	)
}
