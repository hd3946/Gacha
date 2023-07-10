'use client'
import { usePathname } from 'next/navigation'
import Footer from '../components/footer'
import Header from '../components/header'
import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const isExceptHeader = () => {
    const exceptHeader = ['/generate', '/login', '/signup']
    return !exceptHeader.includes(pathname)
  }

  const isExceptFooter = () => {
    const exceptFooter = ['/generate', '/login', '/signup']
    return !exceptFooter.includes(pathname)
  }

  return (
    <html>
      <body>
        {isExceptHeader() && <Header />}
        {children}
        {isExceptFooter() && <Footer />}
      </body>
    </html>
  )
}
