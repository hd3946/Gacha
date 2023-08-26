import Link from 'next/link'

export default function Main() {
  return (
    <div className="relative flex items-center justify-center overflow-hidden bg-slate-900 pt-36 text-white">
      <section className="px-3">
        <div className="mb-5 ">
          <h1 className="flex justify-center text-4xl font-bold">No Code NFT collection generator</h1>
          <p className="flex justify-center">
            The most powerfull NFT generation tool trusted by the world's largest NFT Collections
          </p>
        </div>
        <div>
          <span>
            <style>
              {
                'box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%'
              }
            </style>
            <span>
              <style>
                {
                  'box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;max-width:100%'
                }
              </style>
            </span>
          </span>
        </div>
        <div className="flex flex-col items-center  justify-center gap-6">
          <Link
            href="./generate"
            className="mb-2 mr-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Start Creating
          </Link>

          <span className=" -mt-3 text-center text-sm text-white">No signup required</span>
        </div>
        <video
          autoPlay
          muted
          loop
          src="https://cdn.nft-generator.art/images/app-preview.webm"
          className="mt-6 px-64"></video>

        <a
          target="_blank"
          rel="noopener noreferrer"
          className="jsx-c716df531c354a4b ctaBox"
          href="https://www.youtube.com/watch?v=jIsMStw6Mqk">
          <p className="jsx-c716df531c354a4b">Watch How It Works</p>
          <button className="jsx-c716df531c354a4b">YouTube</button>
        </a>

        <div className="jsx-6b6d74aff214a72b highlights">
          <div className="jsx-6b6d74aff214a72b highlight">
            <h6 className="jsx-6b6d74aff214a72b">Images Generated</h6>
            <h3 className="jsx-6b6d74aff214a72b">3,000,000 +</h3>
          </div>
          <div className="jsx-6b6d74aff214a72b highlight">
            <h6 className="jsx-6b6d74aff214a72b">NFT Collections Created</h6>
            <h3 className="jsx-6b6d74aff214a72b">250,000 +</h3>
          </div>
          <div className="jsx-6b6d74aff214a72b highlight">
            <h6 className="jsx-6b6d74aff214a72b">Smart Contracts Deployed</h6>
            <h3 className="jsx-6b6d74aff214a72b">8,000 +</h3>
          </div>
        </div>
      </section>
    </div>
  )
}
