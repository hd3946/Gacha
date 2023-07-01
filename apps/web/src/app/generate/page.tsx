'use client'
import Export from '@/components/Export'
import Header from '@/components/HeaderV2'
import Organize from '@/components/Organize'
import Preview from '@/components/Preview'
import Settings from '@/components/Settings'
import { useTabValueStore } from '@/store'
import { TabV2 } from '@/type'

export default function Home() {
  const store = useTabValueStore()
  const TabValue = store.value
  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <div className="bg-gray-100 text-gray-700 dark:bg-brand-900 dark:text-[#f3f4f8] border-t border-gray-300 dark:border-[#1d2034] transition-colors duration-200 ease-in-out">
          {TabValue === TabV2.Organize && <Organize />}
          {TabValue === TabV2.Preview && <Preview />}
          {TabValue === TabV2.Export && <Export />}
          {TabValue === TabV2.Settings && <Settings />}
        </div>
      </main>
    </>
  )
}
