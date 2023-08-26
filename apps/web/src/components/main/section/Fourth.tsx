const Fourth = () => {
  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden pb-28 pt-20 sm:py-32"
      style={{
        backgroundImage: 'radial-gradient(hsla(0,0%,100%,.2)2%,transparent 0)',
        backgroundColor: '#0e0f1a',
        backgroundPosition: '0 0,50px 50px',
        backgroundSize: '100px 100px'
      }}>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* title */}
        <div className=" max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className=" text-3xl font-bold tracking-tight text-white sm:text-4xl lg:w-full lg:text-center">
            Providing Value with Endless Features
          </h2>
          <p className=" mt-2 text-xl leading-8 text-gray-100">
            A launchpad with all the tools needed to launch a successful collection.
          </p>
        </div>
        {/* image and button */}
        <div className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0">
          <div className=" -mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
            <div
              className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 
              lg:gap-y-1 lg:whitespace-normal"
              aria-orientation="vertical">
              <div
                className=" group relative rounded-full bg-white px-4 py-1 lg:rounded-l-xl lg:rounded-r-none 
              lg:bg-white/10 lg:p-6 lg:ring-1 lg:ring-inset lg:ring-white/10">
                <h3 className="">
                  <button
                    className="font-display text-lg text-blue-600 focus:outline-none lg:text-white"
                    id="headlessui-tabs-tab-7"
                    role="tab"
                    type="button"
                    aria-selected="true"
                    data-headlessui-state="selected"
                    aria-controls="headlessui-tabs-panel-undefined">
                    <span className=" absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none"></span>Easy To
                    Use
                  </button>
                </h3>
                <p className=" mt-2 hidden text-sm text-white lg:block">
                  No coding required. Create your layers, import your assets, click Generate and you are done!
                </p>
              </div>
              <div className=" group relative rounded-full px-4 py-1 hover:bg-white/10 lg:rounded-l-xl lg:rounded-r-none lg:p-6 lg:hover:bg-white/5">
                <h3 className="">
                  <button
                    className="font-display text-lg text-blue-100 hover:text-white focus:outline-none lg:text-white"
                    id="headlessui-tabs-tab-8"
                    role="tab"
                    type="button"
                    aria-selected="false"
                    data-headlessui-state=""
                    aria-controls="headlessui-tabs-panel-undefined">
                    <span className=" absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none"></span>Rarity
                    Settings
                  </button>
                </h3>
                <p className=" mt-2 hidden text-sm text-blue-100 group-hover:text-white lg:block">
                  Configure the rarity of each layer and each trait.
                </p>
              </div>
              <div className=" group relative rounded-full px-4 py-1 hover:bg-white/10 lg:rounded-l-xl lg:rounded-r-none lg:p-6 lg:hover:bg-white/5">
                <h3 className="">
                  <button
                    className="font-display text-lg text-blue-100 hover:text-white focus:outline-none lg:text-white"
                    id="headlessui-tabs-tab-9"
                    role="tab"
                    type="button"
                    aria-selected="false"
                    data-headlessui-state=""
                    aria-controls="headlessui-tabs-panel-undefined">
                    <span className=" absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none"></span>Metadata
                  </button>
                </h3>
                <p className=" mt-2 hidden text-sm text-blue-100 group-hover:text-white lg:block">
                  We automatically generate metadata compatible with Ethereum &amp; Solana Blockchain.We automatically
                  generate metadata compatible with Ethereum, Polygon, MultiversX &amp; Solana Blockchain.
                </p>
              </div>
              <div className=" group relative rounded-full px-4 py-1 hover:bg-white/10 lg:rounded-l-xl lg:rounded-r-none lg:p-6 lg:hover:bg-white/5">
                <h3 className="">
                  <button
                    className="font-display text-lg text-blue-100 hover:text-white focus:outline-none lg:text-white"
                    id="headlessui-tabs-tab-10"
                    role="tab"
                    type="button">
                    <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none"></span>Export to
                    gifs or videos
                  </button>
                </h3>
                <p className=" mt-2 hidden text-sm text-blue-100 group-hover:text-white lg:block">
                  Import images, gifs and videos and we will generate your collection in the format your decide.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-7">
            <div id="headlessui-tabs-panel-11" role="tabpanel">
              <div className="relative sm:px-6 lg:hidden">
                <div className="absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl"></div>
                <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                  No coding required. Create your layers, import your assets, click Generate and you are done!
                </p>
              </div>
              <div className="shadow-brand-500/10 mt-24 w-[45rem] overflow-hidden rounded-xl border-black bg-slate-50 shadow-xl sm:w-auto lg:mt-10 lg:w-[67.8125rem]">
                <img
                  src="https://ik.imagekit.io/llh50zxqb/images/assets/home/simple.png"
                  alt=""
                  className=" w-full object-fill md:h-[720px]"
                />
              </div>
            </div>
            {/* <div
              id="headlessui-tabs-panel-12"
              role="tabpanel"
              data-headlessui-state=""
              aria-labelledby="headlessui-tabs-tab-undefined">
              <div className=" relative sm:px-6 lg:hidden">
                <div className=" absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl"></div>
                <p className=" relative mx-auto max-w-2xl text-base text-white sm:text-center">
                  Configure the rarity of each layer and each trait.
                </p>
              </div>
              <div className=" shadow-brand-500/10 mt-24 w-[45rem] overflow-hidden rounded-xl border-black bg-slate-50 shadow-xl sm:w-auto lg:mt-10 lg:w-[67.8125rem]">
                <img
                  src="https://ik.imagekit.io/llh50zxqb/images/assets/home/traits.png"
                  alt=""
                  className=" w-full object-fill md:h-[720px]"
                />
              </div>
            </div>
            <div id="headlessui-tabs-panel-13" role="tabpanel" aria-labelledby="headlessui-tabs-tab-undefined">
              <div className=" relative sm:px-6 lg:hidden">
                <div className=" absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl"></div>
                <p className=" relative mx-auto max-w-2xl text-base text-white sm:text-center">
                  We automatically generate metadata compatible with Ethereum &amp; Solana Blockchain.We automatically
                  generate metadata compatible with Ethereum, Polygon, MultiversX &amp; Solana Blockchain.
                </p>
              </div>
              <div className=" shadow-brand-500/10 mt-24 w-[45rem] overflow-hidden rounded-xl border-black bg-slate-50 shadow-xl sm:w-auto lg:mt-10 lg:w-[67.8125rem]">
                <img
                  src="https://ik.imagekit.io/llh50zxqb/images/assets/home/metadata.png"
                  alt=""
                  className=" w-full object-fill md:h-[720px]"
                />
              </div>
            </div>
            <div id="headlessui-tabs-panel-14" role="tabpanel" aria-labelledby="headlessui-tabs-tab-undefined">
              <div className=" relative sm:px-6 lg:hidden">
                <div className=" absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl"></div>
                <p className=" relative mx-auto max-w-2xl text-base text-white sm:text-center">
                  Import images, gifs and videos and we will generate your collection in the format your decide.
                </p>
              </div>
              <div className=" shadow-brand-500/10 mt-24 w-[45rem] overflow-hidden rounded-xl border-black bg-slate-50 shadow-xl sm:w-auto lg:mt-10 lg:w-[67.8125rem]">
                <img
                  src="https://ik.imagekit.io/llh50zxqb/images/assets/home/preview.jpeg"
                  alt=""
                  className=" w-full object-fill md:h-[720px]"
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Fourth
