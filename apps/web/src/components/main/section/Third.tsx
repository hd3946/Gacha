const Third = () => {
  return (
    <div className="mx-auto mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 lg:pb-32 lg:pt-20 xl:mt-10">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
        <div className="mt-6 flex flex-col-reverse items-center gap-x-8 gap-y-20 md:flex-col lg:flex-row lg:items-start">
          <div className="lg:flex lg:flex-auto lg:items-start lg:justify-end">
            <dl className="flex min-h-[300px] w-full flex-col items-center justify-between md:min-h-[100px] md:flex-row lg:h-full lg:w-64 lg:flex-col lg:items-start lg:space-y-10 xl:w-60">
              <div className="mx-2 flex flex-col-reverse items-center gap-y-2 text-right lg:mx-auto lg:items-center lg:justify-center">
                <dt className="text-base leading-7 text-gray-600">NFTs Generated</dt>
                <dd className="text-4xl font-bold tracking-tight text-gray-900">1.2 million</dd>
              </div>
              <div className="mx-2 flex flex-col-reverse items-center gap-y-2 text-right lg:mx-auto lg:items-center lg:justify-center">
                <dt className="text-base leading-7 text-gray-600">Satisfied Creators</dt>
                <dd className="text-4xl font-bold tracking-tight text-gray-900">8,500+</dd>
              </div>
              <div className="mx-2 flex flex-col-reverse items-center gap-y-2 text-right lg:mx-auto lg:items-center lg:justify-center">
                <dt className="text-base leading-7 text-gray-600">Supported Blockchains</dt>
                <dd className="text-4xl font-bold tracking-tight text-gray-900">5</dd>
              </div>
            </dl>
          </div>
          <div className="mb-10 lg:w-full lg:max-w-2xl lg:flex-auto">
            <h1 className="text-5xl font-bold leading-none tracking-tight text-gray-900">
              Industry Leading <br />
              NFT Art Generator
            </h1>
            <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
              Our no-code NFT Art Generator empowers artists and creators to produce stunning, unique, and valuable NFT
              collections without the need for technical expertise. With an intuitive interface, extensive customization
              options, and multi-chain compatibility, we provide the ultimate solution for creating and launching
              successful NFT projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Third
