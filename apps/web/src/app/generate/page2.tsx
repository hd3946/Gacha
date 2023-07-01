'use client'
export const metadata = {
  title: 'Generate NFT',
  description: 'Page description'
}

const Page2 = () => {
  return (
    <section>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css" />
      <div className="flex pt-32 pb-12 md:pt-40 md:pb-20">
        <div className="w-full mx-auto p-5 text-gray-700 max-w-600px">
          <div className="mb-10">
            <h1 className="font-bold text-xl uppercase">Payment Information</h1>
          </div>
          <div className="mb-3">
            <label className="font-bold text-sm mb-2 ml-1">Name</label>
            <div>
              <input
                className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                placeholder="John Doe"
                type="text"
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="font-bold text-sm mb-2 ml-1">Email Address</label>
            <div>
              <input
                className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                placeholder="Enter email address"
                type="email"
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="font-bold text-sm mb-2 ml-1">Card number</label>
            <div className="relative">
              <input
                className="static w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                placeholder="0000 0000 0000 0000"
                type="text"
              />
              <img
                src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
                className="absolute bottom-3 right-3 h-7 my-auto"></img>
            </div>
          </div>
          <div className="mb-3 -mx-2 flex items-end">
            <div className="px-2 w-1/2">
              <label className="font-bold text-sm mb-2 ml-1">Expiration date</label>
              <div>
                <input
                  className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                  placeholder="MM/YY"
                  type="text"
                />
              </div>
            </div>
            <div className="px-2 w-1/2">
              <label className="font-bold text-sm mb-2 ml-1">CVC</label>
              <div>
                <input
                  className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                  placeholder="CVC"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="mb-10">
            <label className="font-bold text-sm mb-2 ml-1">Nation</label>
            <div>
              <select className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                <option value="가나">가나</option>
                <option value="가봉">가봉</option>
                <option value="대한민국">대한민국</option>
                <option value="미국">미국</option>
                <option value="일본">일본</option>
              </select>
            </div>
          </div>
        </div>
        <div className="bg-gray-200 w-full mx-auto rounded-lg shadow-lg p-5 text-gray-700 max-w-600px px-5 pb-10 pt-16">
          <div className="mb-10">
            <h1 className="font-bold text-xl uppercase">Payment Information</h1>
          </div>
          <div className="mb-3">
            <label className="font-bold text-sm mb-2 ml-1">Name</label>
            <div>
              <input
                className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                placeholder="John Doe"
                type="text"
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="font-bold text-sm mb-2 ml-1">Email Address</label>
            <div>
              <input
                className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                placeholder="Enter email address"
                type="email"
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="font-bold text-sm mb-2 ml-1">Card number</label>
            <div className="relative">
              <input
                className="static w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                placeholder="0000 0000 0000 0000"
                type="text"
              />
              <img
                src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
                className="absolute bottom-3 right-3 h-7 my-auto"></img>
            </div>
          </div>
          <div className="mb-3 -mx-2 flex items-end">
            <div className="px-2 w-1/2">
              <label className="font-bold text-sm mb-2 ml-1">Expiration date</label>
              <div>
                <input
                  className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                  placeholder="MM/YY"
                  type="text"
                />
              </div>
            </div>
            <div className="px-2 w-1/2">
              <label className="font-bold text-sm mb-2 ml-1">CVC</label>
              <div>
                <input
                  className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                  placeholder="CVC"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="mb-10">
            <label className="font-bold text-sm mb-2 ml-1">Nation</label>
            <div>
              <select className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                <option value="가나">가나</option>
                <option value="가봉">가봉</option>
                <option value="대한민국">대한민국</option>
                <option value="미국">미국</option>
                <option value="일본">일본</option>
              </select>
            </div>
          </div>
          <div>
            <button className="block w-full max-w-xs mx-auto bg-green-500 hover:bg-green-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
              <i className="mdi mdi-lock-outline mr-1"></i>Pay with Card (USD)
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Page2
