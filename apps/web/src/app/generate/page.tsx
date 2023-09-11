'use client'
import Export from '@/components/generatePage/Export'
import Organize from '@/components/generatePage/Organize'
import Preview from '@/components/generatePage/Preview'
import Settings from '@/components/generatePage/Settings'
import Header from '@/components/header/HeaderGenerate'
import { useTabValueStore } from '@/store/store'
import { GenerateTab } from '@/types/taps'
import Head from 'next/head'

export default function Home() {
  const { tabNumber } = useTabValueStore()

  return (
    <>
      <Head>
        <title>Generate</title>
      </Head>
      <main>
        <Header />
        <div
          className="dark:bg-brand-900 border-t border-gray-300 bg-gray-100 text-gray-700 
      transition-colors duration-200 ease-in-out dark:border-[#1d2034] dark:text-[#f3f4f8]">
          {tabNumber === GenerateTab.Organize && <Organize />}
          {tabNumber === GenerateTab.Preview && <Preview />}
          {tabNumber === GenerateTab.Export && <Export />}
          {tabNumber === GenerateTab.Settings && <Settings />}
        </div>
      </main>
    </>
  )
}
