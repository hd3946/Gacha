import { default as ImageLogo, default as ImagePower } from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-slate-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-10 gap-8 border-t border-gray-200 py-8 md:py-12">
          <div className="sm:col-span-2 md:col-span-2 lg:col-span-2">
            <div className="mb-2">
              <a href="" target="" rel="noopener noreferrer">
                By <ImageLogo src="/vercel.svg" alt="Vercel Logo" width={100} height={24} priority />
              </a>
            </div>
            <p className="mb-4 text-sm text-gray-300">
              Join our mailing list to stay tuned with the latest news, articles, and resources in the blockchain space.
            </p>
            <form>
              <div className="mb-4 flex flex-wrap">
                <div className="w-full">
                  <label className="sr-only block text-sm" htmlFor="newsletter">
                    Email
                  </label>
                  <div className="relative flex max-w-xs items-center">
                    <input
                      id="newsletter"
                      type="email"
                      className="form-input w-full px-3 py-2 pr-12 text-sm text-gray-800"
                      placeholder="Enter your email"
                      required
                    />
                    <button type="submit" className="absolute inset-0 left-auto" aria-label="Subscribe">
                      <span
                        className="absolute inset-0 right-auto my-2 -ml-px w-px bg-gray-300"
                        aria-hidden="true"></span>
                      <svg
                        className="mx-3 h-3 w-3 shrink-0 fill-current text-blue-600"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                          fillRule="nonzero"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <div className="mb-2">
              <a href="" target="" rel="noopener noreferrer">
                By <ImagePower src="/vercel.svg" alt="Vercel Logo" width={100} height={24} priority />
              </a>
            </div>
          </div>

          <div className="sm:col-span-2 md:col-span-2 lg:col-span-2">
            <h6 className="mb-2 font-medium text-gray-100">Products</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="#0" className="text-gray-300 transition duration-150 ease-in-out hover:text-gray-600">
                  NFT Art Generator
                </a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-300 transition duration-150 ease-in-out hover:text-gray-600">
                  Smart Contracts
                </a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-300 transition duration-150 ease-in-out hover:text-gray-600">
                  Trait Marketplace
                </a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-300 transition duration-150 ease-in-out hover:text-gray-600">
                  Dynamic NFTs
                </a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-300 transition duration-150 ease-in-out hover:text-gray-600">
                  Access List
                </a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-300 transition duration-150 ease-in-out hover:text-gray-600">
                  Metadata Viewer
                </a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-300 transition duration-150 ease-in-out hover:text-gray-600">
                  AI Image Generator
                </a>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-2 md:col-span-2 lg:col-span-2">
            <h6 className="mb-2 font-medium text-gray-100">Resources</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="#0" className="text-gray-300 transition duration-150 ease-in-out hover:text-gray-600">
                  Business Solution
                </a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-300 transition duration-150 ease-in-out hover:text-gray-600">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-300 transition duration-150 ease-in-out hover:text-gray-600">
                  Blog
                </a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-300 transition duration-150 ease-in-out hover:text-gray-600">
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-2 md:col-span-2 lg:col-span-2">
            <h6 className="mb-2 font-medium text-gray-100">Legal</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="#0" className="text-gray-300 transition duration-150 ease-in-out hover:text-gray-600">
                  Terms of Service
                </a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-300 transition duration-150 ease-in-out hover:text-gray-600">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-300 transition duration-150 ease-in-out hover:text-gray-600">
                  Affiliate Program
                </a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-300 transition duration-150 ease-in-out hover:text-gray-600">
                  Contract Us
                </a>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-2 md:col-span-2 lg:col-span-2">
            <h6 className="mb-2 font-medium text-gray-100">Social Media</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="#0" className="text-gray-300 transition duration-150 ease-in-out hover:text-gray-600">
                  Twitter
                </a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-300 transition duration-150 ease-in-out hover:text-gray-600">
                  Discord
                </a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-300 transition duration-150 ease-in-out hover:text-gray-600">
                  Youtube
                </a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-300 transition duration-150 ease-in-out hover:text-gray-600">
                  The Web 3 Show
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="justify-center border-t border-gray-800 py-4 md:flex md:items-center md:py-8">
          <div className="text-sm text-gray-300">Copyright &copy; 2022 - OneMint.io. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}
