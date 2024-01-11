import { Source_Sans_3 } from 'next/font/google'
import { Inter } from 'next/font/google'
import Script from 'next/script'
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
			<body className={SS3.className}>
				{children}
				{/* deploy */}
				{/* <Script src="/flowbite/dist/flowbite.min.js"></Script> */}
				{/* dev */}
				{/* <script src="/flowbite/dist/flowbite.min.js"></script> */}
			</body>
		</html>
	)
}
