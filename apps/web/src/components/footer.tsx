import { default as ImageLogo, default as ImagePower } from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-10 gap-8 py-8 md:py-12 border-t border-gray-200">
          <div className="sm:col-span-2 md:col-span-2 lg:col-span-2">
            <div className="mb-2">
              <a href="" target="" rel="noopener noreferrer">
                By <ImageLogo src="/vercel.svg" alt="Vercel Logo" width={100} height={24} priority />
              </a>
            </div>
            <p className="text-sm text-gray-300 mb-4">
              Join our mailing list to stay tuned with the latest news, articles, and resources in the blockchain space.
            </p>
            <form>
              <div className="flex flex-wrap mb-4">
                <div className="w-full">
                  <label className="block text-sm sr-only" htmlFor="newsletter">
                    Email
                  </label>
                  <div className="relative flex items-center max-w-xs">
                    <input
                      id="newsletter"
                      type="email"
                      className="form-input w-full text-gray-800 px-3 py-2 pr-12 text-sm"
                      placeholder="Enter your email"
                      required
                    />
                    <button type="submit" className="absolute inset-0 left-auto" aria-label="Subscribe">
                      <span
                        className="absolute inset-0 right-auto w-px -ml-px my-2 bg-gray-300"
                        aria-hidden="true"></span>
                      <svg
                        className="w-3 h-3 fill-current text-blue-600 mx-3 shrink-0"
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
            <h6 className="text-gray-100 font-medium mb-2">Products</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="#0" className="text-gray-300 hover:text-gray-600 transition duration-150 ease-in-out">
                  NFT Art Generator
                </a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-300 hover:text-gray-600 transition duration-150 ease-in-out">
                  Smart Contracts
                </a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-300 hover:text-gray-600 transition duration-150 ease-in-out">
                  Trait Marketplace
                </a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-300 hover:text-gray-600 transition duration-150 ease-in-out">
                  Dynamic NFTs
                </a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-300 hover:text-gray-600 transition duration-150 ease-in-out">
                  Access List
                </a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-300 hover:text-gray-600 transition duration-150 ease-in-out">
                  Metadata Viewer
                </a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-300 hover:text-gray-600 transition duration-150 ease-in-out">
                  AI Image Generator
                </a>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-2 md:col-span-2 lg:col-span-2">
            <h6 className="text-gray-100 font-medium mb-2">Resources</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="#0" className="text-gray-300 hover:text-gray-600 transition duration-150 ease-in-out">
                  Business Solution
                </a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-300 hover:text-gray-600 transition duration-150 ease-in-out">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-300 hover:text-gray-600 transition duration-150 ease-in-out">
                  Blog
                </a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-300 hover:text-gray-600 transition duration-150 ease-in-out">
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-2 md:col-span-2 lg:col-span-2">
            <h6 className="text-gray-100 font-medium mb-2">Legal</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="#0" className="text-gray-300 hover:text-gray-600 transition duration-150 ease-in-out">
                  Terms of Service
                </a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-300 hover:text-gray-600 transition duration-150 ease-in-out">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-300 hover:text-gray-600 transition duration-150 ease-in-out">
                  Affiliate Program
                </a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-300 hover:text-gray-600 transition duration-150 ease-in-out">
                  Contract Us
                </a>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-2 md:col-span-2 lg:col-span-2">
            <h6 className="text-gray-100 font-medium mb-2">Social Media</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="#0" className="text-gray-300 hover:text-gray-600 transition duration-150 ease-in-out">
                  Twitter
                </a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-300 hover:text-gray-600 transition duration-150 ease-in-out">
                  Discord
                </a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-300 hover:text-gray-600 transition duration-150 ease-in-out">
                  Youtube
                </a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-300 hover:text-gray-600 transition duration-150 ease-in-out">
                  The Web 3 Show
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="justify-center md:flex md:items-center py-4 md:py-8 border-t border-gray-800">
          <div className="text-sm text-gray-300">Copyright &copy; 2022 - OneMint.io. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}
