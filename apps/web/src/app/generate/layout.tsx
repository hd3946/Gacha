'use client'
import Header from '../../components/HeaderTest'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  )
}
