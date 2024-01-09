import { Source_Sans_3 } from 'next/font/google'
import './globals.css'

// const inter = Inter({ subsets: ['latin'] })
const SS3 = Source_Sans_3({ subsets: ['latin'] })

export const metadata = {
	title: 'List K-Drama Budi',
	description: 'Website development using NextJS',
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={SS3.className}>{children}</body>
		</html>
	)
}
