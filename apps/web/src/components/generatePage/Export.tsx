import { GetServerSideProps } from 'next'

const countries = [
  {
    label: '가나',
    value: '가나'
  },
  {
    label: '가봉',
    value: '가봉'
  },
  {
    label: '대한민국',
    value: '대한민국'
  },
  {
    label: '미국',
    value: '미국'
  }
]

const Export = () => {
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
                className="border-1 mb-1 w-full rounded-md border-gray-300 px-3 py-2 transition-colors focus:border-indigo-500 focus:outline-none"
                placeholder="John Doe"
                type="text"
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="mb-2 ml-1 text-sm font-bold">Email Address</label>
            <div>
              <input
                className="border-1 mb-1 w-full rounded-md border-gray-300 px-3 py-2 transition-colors focus:border-indigo-500 focus:outline-none"
                placeholder="Enter email address"
                type="email"
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="mb-2 ml-1 text-sm font-bold">Card number</label>
            <div className="relative">
              <input
                className="border-1 static mb-1 w-full rounded-md border-gray-300 px-3 py-2 transition-colors focus:border-indigo-500 focus:outline-none"
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
                  className="border-1 mb-1 w-full rounded-md border-gray-300 px-3 py-2 transition-colors focus:border-indigo-500 focus:outline-none"
                  placeholder="MM/YY"
                  type="text"
                />
              </div>
            </div>
            <div className="w-1/2 px-2">
              <label className="mb-2 ml-1 text-sm font-bold">CVC</label>
              <div>
                <input
                  className="border-1 mb-1 w-full rounded-md border-gray-300 px-3 py-2 transition-colors focus:border-indigo-500 focus:outline-none"
                  placeholder="CVC"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="mb-10">
            <label className="mb-2 ml-1 text-sm font-bold">Nation</label>
            <div>
              <select className="form-select border-1 mb-1 w-full cursor-pointer rounded-md border-gray-300 px-3 py-2 transition-colors focus:border-indigo-500 focus:outline-none">
                {countries.map((country) => (
                  <option value={country.value}>{country.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <section
          aria-labelledby="summary-heading"
          className="max-w-600px mx-auto w-full rounded-lg bg-gray-200 p-5 px-5 pb-10 pt-16 text-gray-700 shadow-lg">
          <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
            <dl>
              <dt className="text-sm font-medium">Amount due</dt>
              <dd className="text-3xl font-bold tracking-tight text-gray-700 dark:text-white">$59.00</dd>
            </dl>
            <ul
              role="list"
              className="divide-y divide-gray-400 divide-opacity-10 text-sm font-medium dark:divide-white">
              <li className="flex items-start space-x-4 py-6">
                <div className="flex-auto space-y-1">
                  <h3 className="text-gray-700 dark:text-white">NFT Generation</h3>
                  <p>0 Tokens</p>
                </div>
                <p className="flex-none text-base font-medium text-gray-700 dark:text-white">$59.00</p>
              </li>
            </ul>
            <dl className="mt-6 space-y-6 border-t border-gray-600 border-opacity-10 pt-6 text-sm font-medium text-gray-700 dark:border-white/10 dark:text-white">
              <div className="flex items-center justify-between">
                <dt>Subtotal</dt>
                <dd>$59.00</dd>
              </div>
              <div className="flex h-[20px] items-center justify-between">
                <dt className="cursor-pointer text-[14px]">Have a discount code?</dt>
                <dd>0%</dd>
              </div>
              <div className="flex items-center justify-between border-t border-gray-600 border-opacity-10 pt-6 text-gray-700 dark:border-white/10 dark:text-white">
                <dt className="text-base">Total</dt>
                <dd className="text-base">$59.00</dd>
              </div>
            </dl>
          </div>
          <div className="items-between mt-6 flex">
            <label className="flex items-center gap-1 text-sm font-medium text-gray-700 dark:text-gray-200">
              I agree to the{' '}
              <a href="https://onemint.io/terms" rel="noreferrer" target="_blank" className="underline">
                terms of service
              </a>{' '}
              and{' '}
              <a href="https://onemint.io/privacy" rel="noreferrer" target="_blank" className="underline">
                privacy policy.
              </a>
            </label>
          </div>
          <div className="xs:flex-row mt-6 flex flex-col items-center justify-between gap-2 border-t border-gray-600 border-opacity-10 pt-6 dark:border-white/10">
            <button
              type="submit"
              className="grow rounded-md border border-transparent bg-green-500 px-6 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 disabled:cursor-not-allowed disabled:opacity-50 hover:disabled:bg-green-500">
              Pay with Card (USD)
            </button>
          </div>
        </section>
      </div>
    </section>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {}
  }
}

export default Export
