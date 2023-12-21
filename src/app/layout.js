import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'List K-Drama Budi',
	description: 'Website development using NextJS',
}

export default function RootLayout({ children }) {
	return (
	<html lang="en">
		<body className={inter.className}>{children}</body>
	</html>
	)
}
