import Image from 'next/image'
import Link from 'next/link'

const First = () => {
  const iconSize = 40
  return (
    <section className="flex flex-col items-center px-3">
      {/* first div */}
      <div className="flex max-w-6xl flex-col items-center justify-center text-center">
        <h1 className="mb-12 mt-12 text-5xl font-bold leading-none" style={{ maxWidth: '90%' }}>
          No Code NFT collection generator
        </h1>
        <p className="mb-16 text-lg leading-5 text-gray-400" style={{ maxWidth: '70%' }}>
          Trusted by over 10,000 NFT collections, including Elf Town, Seedify, OKX, and more.
        </p>
        <div className="mb-8 flex gap-5">
          <Image src="/images/Ethereum.svg" width={iconSize} height={iconSize} alt="Ethereum" />
          <Image src="/images/Solana.svg" width={iconSize} height={iconSize} alt="Solana" />
          <Image src="/images/Polygon.svg" width={iconSize} height={iconSize} alt="Polygon" />
          <Image src="/images/Binance.svg" width={iconSize} height={iconSize} alt="Binance" />
          <Image src="/images/MultiverseX.webp" width={iconSize} height={iconSize} alt="MultiverseX" />
        </div>
        <div className="flex flex-col">
          <div className="flex gap-4">
            <Link
              className="rounded-full bg-blue-500 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-blue-400
             focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              href="./generator">
              Start Creating
            </Link>
            <button
              className="rounded-full bg-white/10 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-white/20
             focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/20">
              Book a Demo
            </button>
          </div>
          <span className="text-gray-400">No signup required</span>
        </div>
      </div>

      <video
        autoPlay
        muted
        loop
        src="https://cdn.nft-generator.art/images/app-preview.webm"
        className="mt-6 max-w-3xl"
      />

      <a
        className="mt-12 flex gap-2 rounded-lg bg-black/10 px-3 py-1 text-lg text-sm shadow-sm hover:bg-white/20"
        style={{
          border: '2px solid rgba(255,255,255,.1)'
        }}
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.youtube.com/watch?v=jIsMStw6Mqk">
        <p
          className="pr-2 text-gray-400"
          style={{
            borderRight: '2px solid rgba(255,255,255,.1)'
          }}>
          Watch How It Works
        </p>
        <button className="text-blue-500">Youtube</button>
      </a>

      <div
        className="mb-8 mt-10 flex w-full place-content-evenly pb-10 pt-10 text-center"
        style={{
          borderTop: '1px dashed#1c5fe5',
          borderBottom: '1px dashed#1c5fe5'
        }}>
        <div className="flex flex-col">
          <p className="text-lg text-gray-400">Images Generated</p>
          <p className="text-3xl">3,000,000 +</p>
        </div>
        <div className="flex flex-col">
          <p className="text-lg text-gray-400">NFT Collections Created</p>
          <p className="text-3xl">250,000 +</p>
        </div>
        <div className="flex flex-col">
          <p className="text-lg text-gray-400">Smart Contracts Deployed</p>
          <p className="text-3xl">8,000 +</p>
        </div>
      </div>
    </section>
  )
}

export default First
