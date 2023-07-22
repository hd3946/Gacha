'use client'
import ImageLogo from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Header() {
  const [top, setTop] = useState<boolean>(true)

  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true)
  }

  useEffect(() => {
    scrollHandler()
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  return (
    <header
      className={`fixed z-30 w-full bg-slate-900 transition duration-300 ease-in-out md:bg-opacity-90 ${
        !top ? 'bg-slate-900 shadow-lg backdrop-blur-sm' : ''
      }`}>
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="flex h-16 items-center justify-between md:h-20">
          <div className="mr-4 shrink-0">
            <div className="mb-2">
              <a href="" target="" rel="noopener noreferrer">
                By <ImageLogo src="/vercel.svg" alt="Vercel Logo" width={100} height={24} priority />
              </a>
            </div>
          </div>
          <nav className="hidden md:flex md:grow">
            <ul className="flex grow flex-wrap items-center justify-end">
              <li>
                <Link
                  href="/signin"
                  className="flex items-center px-5 py-3 font-medium text-gray-100 transition duration-150 ease-in-out hover:text-gray-400">
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/signin"
                  className="flex items-center px-5 py-3 font-medium text-gray-100 transition duration-150 ease-in-out hover:text-gray-400">
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/signin"
                  className="flex items-center px-5 py-3 font-medium text-gray-100 transition duration-150 ease-in-out hover:text-gray-400">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/signup" className="btn-sm rounded-full bg-blue-600 p-2 text-gray-100 hover:bg-blue-400">
                  <span>Connect Wallet</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}