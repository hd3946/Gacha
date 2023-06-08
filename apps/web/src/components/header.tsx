'use client'

import { useState, useEffect } from 'react'
import ImageLogo from 'next/image'
import Link from 'next/link'

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
    <header className={`bg-slate-900 fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top ? 'bg-slate-900 backdrop-blur-sm shadow-lg' : ''}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="shrink-0 mr-4">
            <div className="mb-2">
              <a
                href=""
                target=""
                rel="noopener noreferrer"
              >
                By{' '}
                <ImageLogo src="/vercel.svg" alt="Vercel Logo" width={100} height={24} priority />
              </a>
            </div>
          </div>

          <nav className="hidden md:flex md:grow">
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link href="/signin" className="font-medium text-gray-100 hover:text-gray-400 px-5 py-3 flex items-center transition duration-150 ease-in-out">Products</Link>
              </li>
              <li>
                <Link href="/signin" className="font-medium text-gray-100 hover:text-gray-400 px-5 py-3 flex items-center transition duration-150 ease-in-out">Resources</Link>
              </li>
              <li>
                <Link href="/signin" className="font-medium text-gray-100 hover:text-gray-400 px-5 py-3 flex items-center transition duration-150 ease-in-out">Pricing</Link>
              </li>
              <li>
                <Link href="/signup" className="btn-sm rounded-full text-gray-100 bg-blue-600 hover:bg-blue-400 p-2">
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
