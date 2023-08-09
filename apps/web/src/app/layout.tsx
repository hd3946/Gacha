'use client'
import AppProvider from '@/components/AppProvider'
import Footer from 'components/footer/Footer'
import Header from 'components/header/Header'
import { usePathname } from 'next/navigation'
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
        <AppProvider>
          {isExceptHeader() && <Header />}
          {children}
          {isExceptFooter() && <Footer />}
        </AppProvider>
      </body>
    </html>
  )
}
