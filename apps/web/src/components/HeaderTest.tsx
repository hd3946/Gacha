'use client'
import ImageLogo from 'next/image'
import Link from 'next/link'
import styles from './HeaderTest.module.css'
import { useEffect, useState } from 'react'
import useColorMode from '@/hooks/useColorMode'

export default function HeaderTest() {
  const [colorMode, setColorMode] = useColorMode()

  return (
    <div className={styles.container}>
      <div className="w-1/5 shrink-0">
        <a href="/" target="" rel="noopener noreferrer">
          <ImageLogo src="/assets/logo.png" alt="Gacha Logo" width={220} height={32} priority />
        </a>
      </div>

      <nav className="w-3/5 flex-none">
        <ul className="flex grow flex-wrap items-center">
          <li>
            <Link href="/" className={styles.link}>
              Settings
            </Link>
          </li>
          <li>
            <Link href="/" className={styles.link}>
              Organize
            </Link>
          </li>
          <li>
            <Link href="/" className={styles.link}>
              Preview
            </Link>
          </li>
          <li>
            <Link href="/" className={styles.link}>
              Export
            </Link>
          </li>
        </ul>
      </nav>

      <div className="w-1/5 flex justify-end">
        <button
          type="button"
          className="block text-gray-100 hover:text-gray-400 focus:text-gray-400 focus:outline-none"
          aria-label="Open sidebar"
          onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}>
          <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
            <path fillRule="evenodd" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
          다크모드
        </button>
        <button className={styles.btn}>Connect</button>
      </div>
    </div>
  )
}
