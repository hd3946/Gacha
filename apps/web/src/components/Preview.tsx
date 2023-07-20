import { Suspense } from 'react'

const Preview = () => {
  return (
    <div>
      <Suspense fallback={<p>Loading feed...</p>}>
        <div className="bg-gray-100 text-gray-700 dark:bg-brand-900 dark:text-[#f3f4f8] border-t border-gray-300 dark:border-[#1d2034] transition-colors duration-200 ease-in-out">
          <div className="mx-auto px-2 sm:px-6 lg:px-8 min-h-screen w-full mt-8 max-w-[3000px]">
            <div className="flex h-[100vh] overflow-hidden space-x-5 pb-8">
              {/* 왼쪽 */}
              <div className="min-w-fit xl:min-w-[300px] overflow-y-auto hiddenScrollbar shrink-0 max-w-[350px] space-y-2">
                <button
                  type="button"
                  className="bg-violet-500 bg-opacity-20 hover:bg-opacity-40 text-violet-400 font-semibold p-2 w-full rounded-md">
                  Randomize
                </button>
                <div className="flex items-center justify-between relative">
                  <input
                    className="w-full outline-none group flex h-6 items-center justify-center sm:justify-start md:h-auto md:flex-none md:rounded-lg md:py-2.5 md:pl-4 md:pr-3.5 md:text-sm md:ring-1 md:ring-slate-200 md:hover:ring-slate-300 dark:md:ring-inset dark:md:ring-white/5 dark:md:bg-slate-700/40 dark:md:ring-slate-500"
                    value="5"
                  />
                  <span className="absolute right-[10px] top-[50%] transform -translate-y-1/2 text-gray-500 sm:text-sm">
                    tokens
                  </span>
                </div>
              </div>
              {/* 오른쪽 */}
              <div className="grow block">
                <div className="flex gap-2 mb-3 pt-px pr-px">
                  <button
                    type="button"
                    className="flex flex-wrap items-center gap-1 empty:hidden font-medium text-xs leading-5 rounded-full ring-1 ring-violet-500 text-violet-500 dark:text-violet-400 bg-violet-500/20 hover:bg-violet-500/40 py-1 px-3 bg-violet-500/40">
                    1 Tokens
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Suspense>
    </div>
  )
}

export default Preview
