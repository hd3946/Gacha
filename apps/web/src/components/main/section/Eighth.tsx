const Eighth = () => {
  return (
    <div className="mx-auto my-20 max-w-7xl px-6 lg:mt-28 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Learn more on NFTs and how they are being used in the real world.
        </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
          <img
            src="https://ik.imagekit.io/llh50zxqb/images/assets/home/cc.jpeg"
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
          <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
          <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
            <time dateTime="2023-02-10" className="mr-8">
              Feb 10, 2023
            </time>
            <div className="-ml-4 flex items-center gap-x-4">
              <svg viewBox="0 0 2 2" className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                <circle cx="1" cy="1" r="1"></circle>
              </svg>
              <div className="flex gap-x-2.5">
                <img
                  src="https://blog.onemint.io/content/images/2022/07/Captura-de-Pantalla-2022-06-22-a-la-s--16.13.46.png"
                  alt=""
                  className="h-6 w-6 flex-none rounded-full bg-white/10"
                />
                Fernando Segre
              </div>
            </div>
          </div>
          <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
            <a href="blog/crossmint-one-mint-simplifying-the-nft-experience">
              <span className="absolute inset-0"></span>Card Payments to Simplify the NFT Experience
            </a>
          </h3>
        </article>
        <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
          <img
            src="https://ik.imagekit.io/llh50zxqb/images/assets/home/trade.jpeg"
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
          <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
          <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
            <time dateTime="2023-02-14" className="mr-8">
              Feb 14, 2023
            </time>
            <div className="-ml-4 flex items-center gap-x-4">
              <svg viewBox="0 0 2 2" className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                <circle cx="1" cy="1" r="1"></circle>
              </svg>
              <div className="flex gap-x-2.5">
                <img
                  src="https://blog.onemint.io/content/images/2022/06/martin.webp"
                  alt=""
                  className="h-6 w-6 flex-none rounded-full bg-white/10"
                />
                Martin Souto Parga
              </div>
            </div>
          </div>
          <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
            <a href="/blog/onemints-marketplace-a-game-changer-for-nft-projects">
              <span className="absolute inset-0"></span>The Traits Economy and How it's a Game Changer for NFTs
            </a>
          </h3>
        </article>
        <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
          <img
            src="https://blog.onemint.io/content/images/2023/01/80aadfdf-dc31-4b53-8905-6c34d695d3cd.jpeg"
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
          <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
          <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
            <time dateTime="2023-01-26" className="mr-8">
              Jan 26, 2023
            </time>
            <div className="-ml-4 flex items-center gap-x-4">
              <svg viewBox="0 0 2 2" className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                <circle cx="1" cy="1" r="1"></circle>
              </svg>
              <div className="flex gap-x-2.5">
                <img
                  src="https://blog.onemint.io/content/images/2023/01/PXL_20220816_235553339.PORTRAIT--2-.jpg"
                  alt=""
                  className="h-6 w-6 flex-none rounded-full bg-white/10"
                />
                Greg Marcilhacy
              </div>
            </div>
          </div>
          <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
            <a href="/blog/onemints-marketplace-a-game-changer-for-nft-projects">
              <span className="absolute inset-0"></span>NFT Wearables - The Next Big Thing in 2023
            </a>
          </h3>
        </article>
      </div>
    </div>
  )
}

export default Eighth
