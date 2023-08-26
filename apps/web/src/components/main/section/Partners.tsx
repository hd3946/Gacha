const Partners = () => {
  return (
    <div
      style={{
        backgroundImage: 'radial-gradient(hsla(0,0%,100%,.2)2%,transparent 0)',
        backgroundColor: '#0e0f1a',
        backgroundPosition: '0 0,50px 50px'
      }}
      className="pb-16 pt-16">
      <div>
        <ul
          role="list"
          className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0">
          <li className="">
            <ul role="list" className=" flex flex-col items-center gap-y-12 sm:flex-row sm:gap-x-20 sm:gap-y-0">
              <li className=" flex">
                <img
                  alt="Starbucks"
                  src="https://cdn.nft-generator.art/images/assets/brands/starbucks.png"
                  width="158"
                  decoding="async"
                  className=""
                />
              </li>
              <li className=" flex">
                <img
                  alt="Seedify"
                  src="https://cdn.nft-generator.art/images/assets/brands/seedify.svg"
                  width="158"
                  decoding="async"
                  className=""
                />
              </li>
              <li className=" flex">
                <img
                  alt="OKX"
                  src="https://cdn.nft-generator.art/images/assets/brands/OKX.png"
                  height="48"
                  decoding="async"
                  className=""
                />
              </li>
              <li className=" flex">
                <img
                  alt="Capgemini"
                  src="https://cdn.nft-generator.art/images/assets/brands/capgemini.svg"
                  width="158"
                  decoding="async"
                  className=""
                />
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className=" relative mx-auto max-w-5xl py-4 pt-20 text-center sm:pt-12 lg:pt-12">
        <h2 className=" text-center text-4xl font-extrabold tracking-tight text-white">
          Trusted by thousands of brands and creators
        </h2>
        <p className=" mx-auto mt-2 max-w-3xl text-center text-lg text-slate-400">
          Save hours of headaches by using our NFT Art Generator and no-code smart-contract deployer.
        </p>
      </div>
    </div>
  )
}

export default Partners
