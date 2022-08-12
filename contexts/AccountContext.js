import { FC, useState, createContext, useContext, ReactNode } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

// interface AccountProps {
// 	id: number
// 	email: string
// 	password: string
// }

// interface Props {
// 	children: ReactNode
// }

// type AccountContextProps = {
// 	account: any
// 	setAccount: any
// }

const AccountContext = createContext()

export const useAccountContext = () => useContext(AccountContext)

export const AccountProvider = ({ children }) => {
	const [account, setAccount] = useLocalStorage('account', [])
	const [token, setToken] = useState('')

	const login = (email, password) => {
		if (account.email !== email || account.password !== password) {
			alert('Wrong User name or Password')
		} else if (account.email === email && account.password === password) {
			alert('Logged in')
		}
	}

	const updateAccount = (first_name, last_name) => {
		setAccount((prevAccount) => {
			return [...prevAccount, { first_name, last_name }]
		})
	}

	return (
		<AccountContext.Provider value={{ account, setAccount, login }}>
			{children}
		</AccountContext.Provider>
	)
}
