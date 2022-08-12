import { FC, useState } from 'react'
import Card from 'react-bootstrap/Card'
import { Button, Container } from 'react-bootstrap'
import { useUserContext } from '../../contexts/UserContext'
import { PagePagination } from '../Pagination'

export const UserCard: FC = () => {
	const { users, updateUser, removeUser } = useUserContext()
	const [currentPage, setCurrentPage] = useState(1)
	const [usersPerPage] = useState(3)

	const indexOfLastUser = currentPage * usersPerPage
	const indexOfFirstUser = indexOfLastUser - usersPerPage
	const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser)

	const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

	return (
		<Container className='d-flex align-items-center gap-16'>
			{currentUsers?.map((user: any) => (
				<Card className='top-20' key={user.id}>
					<Card.Body>
						<Card.Title>{user.email}</Card.Title>
						<Card.Text>
							{user.first_name} {user.last_name}
						</Card.Text>
						<Button variant='primary' onClick={() => updateUser(user.id)}>
							Edit
						</Button>
						<Button variant='danger' onClick={() => removeUser(user.id)}>
							Delete
						</Button>
					</Card.Body>
				</Card>
			))}
			<PagePagination
				usersPerPage={usersPerPage}
				totalUsers={users?.length}
				paginate={paginate}
			/>
		</Container>
	)
}
