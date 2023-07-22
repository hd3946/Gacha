'use client'
export const metadata = {
  title: 'Generate NFT',
  description: 'Page description'
}

const Page2 = () => {
  return (
    <section>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css" />
      <div className="flex pb-12 pt-32 md:pb-20 md:pt-40">
        <div className="max-w-600px mx-auto w-full p-5 text-gray-700">
          <div className="mb-10">
            <h1 className="text-xl font-bold uppercase">Payment Information</h1>
          </div>
          <div className="mb-3">
            <label className="mb-2 ml-1 text-sm font-bold">Name</label>
            <div>
              <input
                className="mb-1 w-full rounded-md border-2 border-gray-200 px-3 py-2 transition-colors focus:border-indigo-500 focus:outline-none"
                placeholder="John Doe"
                type="text"
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="mb-2 ml-1 text-sm font-bold">Email Address</label>
            <div>
              <input
                className="mb-1 w-full rounded-md border-2 border-gray-200 px-3 py-2 transition-colors focus:border-indigo-500 focus:outline-none"
                placeholder="Enter email address"
                type="email"
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="mb-2 ml-1 text-sm font-bold">Card number</label>
            <div className="relative">
              <input
                className="static mb-1 w-full rounded-md border-2 border-gray-200 px-3 py-2 transition-colors focus:border-indigo-500 focus:outline-none"
                placeholder="0000 0000 0000 0000"
                type="text"
              />
              <img
                src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
                className="absolute bottom-3 right-3 my-auto h-7"></img>
            </div>
          </div>
          <div className="-mx-2 mb-3 flex items-end">
            <div className="w-1/2 px-2">
              <label className="mb-2 ml-1 text-sm font-bold">Expiration date</label>
              <div>
                <input
                  className="mb-1 w-full rounded-md border-2 border-gray-200 px-3 py-2 transition-colors focus:border-indigo-500 focus:outline-none"
                  placeholder="MM/YY"
                  type="text"
                />
              </div>
            </div>
            <div className="w-1/2 px-2">
              <label className="mb-2 ml-1 text-sm font-bold">CVC</label>
              <div>
                <input
                  className="mb-1 w-full rounded-md border-2 border-gray-200 px-3 py-2 transition-colors focus:border-indigo-500 focus:outline-none"
                  placeholder="CVC"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="mb-10">
            <label className="mb-2 ml-1 text-sm font-bold">Nation</label>
            <div>
              <select className="form-select mb-1 w-full cursor-pointer rounded-md border-2 border-gray-200 px-3 py-2 transition-colors focus:border-indigo-500 focus:outline-none">
                <option value="가나">가나</option>
                <option value="가봉">가봉</option>
                <option value="대한민국">대한민국</option>
                <option value="미국">미국</option>
                <option value="일본">일본</option>
              </select>
            </div>
          </div>
        </div>
        <div className="max-w-600px mx-auto w-full rounded-lg bg-gray-200 p-5 px-5 pb-10 pt-16 text-gray-700 shadow-lg">
          <div className="mb-10">
            <h1 className="text-xl font-bold uppercase">Payment Information</h1>
          </div>
          <div className="mb-3">
            <label className="mb-2 ml-1 text-sm font-bold">Name</label>
            <div>
              <input
                className="mb-1 w-full rounded-md border-2 border-gray-200 px-3 py-2 transition-colors focus:border-indigo-500 focus:outline-none"
                placeholder="John Doe"
                type="text"
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="mb-2 ml-1 text-sm font-bold">Email Address</label>
            <div>
              <input
                className="mb-1 w-full rounded-md border-2 border-gray-200 px-3 py-2 transition-colors focus:border-indigo-500 focus:outline-none"
                placeholder="Enter email address"
                type="email"
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="mb-2 ml-1 text-sm font-bold">Card number</label>
            <div className="relative">
              <input
                className="static mb-1 w-full rounded-md border-2 border-gray-200 px-3 py-2 transition-colors focus:border-indigo-500 focus:outline-none"
                placeholder="0000 0000 0000 0000"
                type="text"
              />
              <img
                src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
                className="absolute bottom-3 right-3 my-auto h-7"></img>
            </div>
          </div>
          <div className="-mx-2 mb-3 flex items-end">
            <div className="w-1/2 px-2">
              <label className="mb-2 ml-1 text-sm font-bold">Expiration date</label>
              <div>
                <input
                  className="mb-1 w-full rounded-md border-2 border-gray-200 px-3 py-2 transition-colors focus:border-indigo-500 focus:outline-none"
                  placeholder="MM/YY"
                  type="text"
                />
              </div>
            </div>
            <div className="w-1/2 px-2">
              <label className="mb-2 ml-1 text-sm font-bold">CVC</label>
              <div>
                <input
                  className="mb-1 w-full rounded-md border-2 border-gray-200 px-3 py-2 transition-colors focus:border-indigo-500 focus:outline-none"
                  placeholder="CVC"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="mb-10">
            <label className="mb-2 ml-1 text-sm font-bold">Nation</label>
            <div>
              <select className="form-select mb-1 w-full cursor-pointer rounded-md border-2 border-gray-200 px-3 py-2 transition-colors focus:border-indigo-500 focus:outline-none">
                <option value="가나">가나</option>
                <option value="가봉">가봉</option>
                <option value="대한민국">대한민국</option>
                <option value="미국">미국</option>
                <option value="일본">일본</option>
              </select>
            </div>
          </div>
          <div>
            <button className="mx-auto block w-full max-w-xs rounded-lg bg-green-500 px-3 py-3 font-semibold text-white hover:bg-green-700 focus:bg-indigo-700">
              <i className="mdi mdi-lock-outline mr-1"></i>Pay with Card (USD)
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Page2
