const Sixth = () => {
  return (
    <div
      className="mt-28"
      style={{
        backgroundImage: 'radial-gradient(hsla(0,0%,100%,.2)2%,transparent 0)',
        backgroundColor: '#0e0f1a',
        backgroundPosition: '0 0,50px 50px',
        backgroundSize: '100px 100px'
      }}>
      <section aria-labelledby="comfort-heading" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative overflow-hidden rounded-lg">
          <div className="absolute inset-0">
            <img
              src="https://ik.imagekit.io/llh50zxqb/images/assets/dynamic-nft/cta.jpeg"
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="relative bg-gray-900 bg-opacity-75 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
            <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
              <h2 id="comfort-heading" className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Already Own an NFT Project?
              </h2>
              <p className="mt-3 text-xl text-white">
                Upgrade your existing collection to Dynamic NFTs and create a new economy for your project in just a few
                clicks!
              </p>
              <p className="mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto">
                Go Dynamic Now
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Sixth
