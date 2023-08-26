'use client'
import Export from '@/components/generatePage/Export'
import Organize from '@/components/generatePage/Organize'
import Preview from '@/components/generatePage/Preview'
import Settings from '@/components/generatePage/Settings'
import Header from '@/components/header/HeaderGenerate'
import { useTabValueStore } from '@/store/store'
import { GenerateTab } from '@/types/taps'

export default function Home() {
  const store = useTabValueStore()
  const TabValue = store.value
  return (
    <>
      <Header />

      <div className="dark:bg-brand-900 border-t border-gray-300 bg-gray-100 text-gray-700 transition-colors duration-200 ease-in-out dark:border-[#1d2034] dark:text-[#f3f4f8]">
        {TabValue === GenerateTab.Organize && <Organize />}
        {TabValue === GenerateTab.Preview && <Preview />}
        {TabValue === GenerateTab.Export && <Export />}
        {TabValue === GenerateTab.Settings && <Settings />}
      </div>
    </>
  )
}
