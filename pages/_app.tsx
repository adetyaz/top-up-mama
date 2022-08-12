import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import type { AppProps } from 'next/app'
import { UserProvider, AccountProvider } from '../contexts'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<AccountProvider>
			<UserProvider>
				<Component {...pageProps} />
			</UserProvider>
		</AccountProvider>
	)
}

export default MyApp
