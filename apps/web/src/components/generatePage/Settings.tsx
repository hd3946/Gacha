const Settings = () => {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex pb-12 pt-32 md:pb-20 md:pt-40">
          <div className="mx-auto max-w-sm">
            <form>
              <div className="-mx-3 mb-4 flex flex-wrap">
                <div className="w-full px-3">
                  <label className="mb-1 block text-sm font-medium text-gray-800" htmlFor="name">
                    Collection Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="border-1 mb-1 w-full rounded-md border-gray-300 px-3 py-2 transition-colors focus:border-indigo-500 focus:outline-none"
                    placeholder=""
                    required
                  />
                </div>
              </div>
              <div className="-mx-3 mb-4 flex flex-wrap">
                <div className="w-full px-3">
                  <label className="mb-1 block text-sm font-medium text-gray-800" htmlFor="email">
                    Collection Description <span className="text-red-600">*</span>
                  </label>
                  <div className="text-sm text-gray-500">The description will appear in the NFT metadata</div>
                  <input
                    id="email"
                    type="text"
                    className="border-1 mb-1 w-full rounded-md border-gray-300 px-3 py-2 transition-colors focus:border-indigo-500 focus:outline-none"
                    placeholder=""
                    required
                  />
                </div>
              </div>
              <div className="-mx-3 mb-4 flex flex-wrap">
                <div className="w-full px-3">
                  <label className="mb-1 block text-sm font-medium text-gray-800" htmlFor="email">
                    Collection Size <span className="text-red-600">*</span>
                  </label>
                  <div className="text-sm text-gray-500">The description will appear in the NFT metadata</div>
                  <input
                    id="email"
                    type="number"
                    className="border-1 mb-1 w-full rounded-md border-gray-300 px-3 py-2 transition-colors focus:border-indigo-500 focus:outline-none"
                    placeholder=""
                    required
                  />
                </div>
              </div>
              <div className="-mx-3 mb-4 flex flex-wrap">
                <div className="w-full px-3">
                  <label className="mb-1 block text-sm font-medium text-gray-800" htmlFor="email">
                    Name of each NFT <span className="text-red-600">*</span>
                  </label>
                  <div className="text-sm text-gray-500">The description will appear in the NFT metadata</div>
                  <input
                    id="email"
                    type="text"
                    className="border-1 mb-1 w-full rounded-md border-gray-300 px-3 py-2 transition-colors focus:border-indigo-500 focus:outline-none"
                    placeholder=""
                    required
                  />
                </div>
              </div>
              <div className="-mx-3 mb-4 flex flex-wrap">
                <div className="w-full px-3">
                  <label className="mb-1 block text-sm font-medium text-gray-800" htmlFor="email">
                    Export Format <span className="text-red-600">*</span>
                  </label>
                  <div className="text-sm text-gray-500">The description will appear in the NFT metadata</div>
                  <input
                    id="email"
                    type="email"
                    className="border-1 mb-1 w-full rounded-md border-gray-300 px-3 py-2 transition-colors focus:border-indigo-500 focus:outline-none"
                    placeholder=""
                    required
                  />
                </div>
              </div>
              <div className="-mx-3 mb-4 flex flex-wrap">
                <div className="w-full px-3">
                  <label className="mb-1 block text-sm font-medium text-gray-800" htmlFor="email">
                    Blockchain <span className="text-red-600">*</span>
                  </label>
                  <div className="text-sm text-gray-500">The description will appear in the NFT metadata</div>
                  <input
                    id="email"
                    type="email"
                    className="border-1 mb-1 w-full rounded-md border-gray-300 px-3 py-2 transition-colors focus:border-indigo-500 focus:outline-none"
                    placeholder=""
                    required
                  />
                </div>
              </div>
              <div className="-mx-3 mb-4 flex flex-wrap">
                <div className="w-full px-3">
                  <label className="mb-1 block text-sm font-medium text-gray-800" htmlFor="email">
                    Dimensions <span className="text-red-600">*</span>
                  </label>
                  <div className="text-sm text-gray-500">The description will appear in the NFT metadata</div>
                  <div className="flex">
                    <input
                      id="email"
                      type="number"
                      className="border-1 mb-1 w-full rounded-md border-gray-300 px-3 py-2 transition-colors focus:border-indigo-500 focus:outline-none"
                      placeholder=""
                      required
                    />
                    <input
                      id="email"
                      type="number"
                      className="border-1 mb-1 w-full rounded-md border-gray-300 px-3 py-2 transition-colors focus:border-indigo-500 focus:outline-none"
                      placeholder=""
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="-mx-3 mt-6 flex flex-wrap">
                <div className="w-full px-3">
                  <button className="btn h-8 w-full bg-blue-600 text-white hover:bg-blue-700">Continue</button>
                </div>
              </div>
            </form>
            <div className="my-6 flex items-center">
              <div className="mr-3 grow border-t border-gray-300" aria-hidden="true"></div>
              <div className="italic text-gray-600">Or</div>
              <div className="ml-3 grow border-t border-gray-300" aria-hidden="true"></div>
            </div>
            <form>
              <div className="-mx-3 mb-3 flex flex-wrap">
                <div className="max-w-[50%] px-3">
                  <button className="btn relative flex h-10 w-full items-center bg-gray-900 px-0 text-white hover:bg-gray-800">
                    <svg
                      className="mx-4 h-4 w-4 shrink-0 fill-current text-white opacity-75"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.114,3.923h-4.589V2.427c0-0.252-0.207-0.459-0.46-0.459H7.935c-0.252,0-0.459,0.207-0.459,0.459v1.496h-4.59c-0.252,0-0.459,0.205-0.459,0.459c0,0.252,0.207,0.459,0.459,0.459h1.51v12.732c0,0.252,0.207,0.459,0.459,0.459h10.29c0.254,0,0.459-0.207,0.459-0.459V4.841h1.511c0.252,0,0.459-0.207,0.459-0.459C17.573,4.127,17.366,3.923,17.114,3.923M8.394,2.886h3.214v0.918H8.394V2.886z M14.686,17.114H5.314V4.841h9.372V17.114z M12.525,7.306v7.344c0,0.252-0.207,0.459-0.46,0.459s-0.458-0.207-0.458-0.459V7.306c0-0.254,0.205-0.459,0.458-0.459S12.525,7.051,12.525,7.306M8.394,7.306v7.344c0,0.252-0.207,0.459-0.459,0.459s-0.459-0.207-0.459-0.459V7.306c0-0.254,0.207-0.459,0.459-0.459S8.394,7.051,8.394,7.306"></path>
                    </svg>
                    <span className="-ml-16 flex-auto pl-16 pr-8 text-xs">Reset collection</span>
                  </button>
                </div>
                <div className="max-w-[50%] px-3">
                  <button className="btn relative flex h-10 w-full items-center bg-red-600 px-0 text-white hover:bg-red-700">
                    <svg
                      className="mx-4 h-4 w-4 shrink-0 fill-current text-white opacity-75"
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.613,10c0,0.23-0.188,0.419-0.419,0.419H10.42v3.774c0,0.23-0.189,0.42-0.42,0.42s-0.419-0.189-0.419-0.42v-3.774H5.806c-0.23,0-0.419-0.189-0.419-0.419s0.189-0.419,0.419-0.419h3.775V5.806c0-0.23,0.189-0.419,0.419-0.419s0.42,0.189,0.42,0.419v3.775h3.774C14.425,9.581,14.613,9.77,14.613,10 M17.969,10c0,4.401-3.567,7.969-7.969,7.969c-4.402,0-7.969-3.567-7.969-7.969c0-4.402,3.567-7.969,7.969-7.969C14.401,2.031,17.969,5.598,17.969,10 M17.13,10c0-3.932-3.198-7.13-7.13-7.13S2.87,6.068,2.87,10c0,3.933,3.198,7.13,7.13,7.13S17.13,13.933,17.13,10"></path>{' '}
                    </svg>
                    <span className="-ml-16 flex-auto pl-16 pr-8 text-xs">Start a new collection</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="max-w-600px mx-auto max-w-[50%] rounded-lg bg-gray-200 p-5 px-5 pb-10 pt-16 text-gray-700 shadow-lg">
            <div className="mx-auto max-w-3xl pb-6 md:pb-8">
              <h1 className="h2">Collection Settings</h1>
              <h1 className="h5">
                Welcome to the NFT Art Generator. The most powerful no-code NFT tool trusted by the world’s largest NFT
                creators.
              </h1>
            </div>
            <div className="mx-auto max-w-3xl pb-6 md:pb-8">
              <img src="https://nft-generator.art/images/test.png" className=""></img>
            </div>
            <div className="mx-auto max-w-3xl pb-6 md:pb-8">
              <h1 className="h2">Setup your NFT Collection</h1>
              <h1 className="h5">
                Select the desired Blockchain, give your collection a name, a description, and set up the size of the
                final art pieces. Once you are ready, click the "Save & Continue" button to proceed to the next step.
              </h1>
            </div>
            <div className="mx-auto max-w-3xl pb-6 md:pb-8">
              <h1 className="h2">Import your art into the tool.</h1>
              <h1 className="h5">
                You can import a single image or a folder of images. The tool will automatically generate the
                corresponding metadata for each image.
              </h1>
            </div>
            <div className="mx-auto max-w-3xl pb-6 md:pb-8">
              <h1 className="h2">Preview and Generate your collection.</h1>
              <h1 className="h5">
                Once the metadata is generated the NFTs and download the metadata file. You can also upload the metadata
                file to IPFS to generate the NFTs.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Settings
