'use client'
import useStoreGeneratorTabs from '@/storeGenerateTabs'

export default function Home() {
  const { CurrentTabPage } = useStoreGeneratorTabs()
  return (
    <>
      <main>
        <CurrentTabPage />
      </main>
    </>
  )
}
