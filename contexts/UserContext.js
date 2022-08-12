import {
	useState,
	useEffect,
	createContext,
	useContext,
	ReactNode,
	FC,
} from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

// interface UserProps {
// 	id: number
// 	first_name: string
// 	last_name: string
// 	email: string
// }

// interface Props {
// 	children: ReactNode
// }

// type UserContextProps = {
// 	users: any
// 	setUsers: any
// 	addUser: (user: UserProps) => void
// 	removeUser: (id: number) => void
// 	updateUser: (id: number) => void
// }

export const UserContext = createContext()

export const useUserContext = () => useContext(UserContext)

export const UserProvider = ({ children }) => {
	const [users, setUsers] = useLocalStorage('users', [])

	const addUser = ({ email, first_name, last_name }) => {
		setUsers((prevUsers) => {
			return [
				...prevUsers,
				{
					id: users.length + 1,
					email,
					first_name,
					last_name,
				},
			]
		})
	}

	const updateUser = (id, email, first_name, last_name) => {
		setUsers((prevUsers) => {
			const updateUser = prevUsers.map((user) => user.id === id)
			return [...updateUser, { email, first_name, last_name }]
		})
	}

	const removeUser = (id) => {
		setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id))
	}

	return (
		<UserContext.Provider
			value={{ users, setUsers, addUser, updateUser, removeUser }}
		>
			{children}
		</UserContext.Provider>
	)
}
