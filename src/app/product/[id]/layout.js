import { Inter } from 'next/font/google'
import Link from 'next/link'
import Footer from '../../components/Footer'
import Nav from '@/app/components/Nav'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav/>
        {children}
      <Footer/>
      </body>
    </html>
  )
}