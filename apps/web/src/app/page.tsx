import HeaderTest from '../components/HeaderTest'

export default function Home() {
  return (
    <>
      <header>
        <HeaderTest />
      </header>

      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">{/* Your content */}</div>
      </main>
    </>
  )
}
