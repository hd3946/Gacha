import { Suspense } from 'react'
import PartsList from './preview/PartsList'
import ImageList from './preview/TokenImageList'

const Preview = () => {
  return (
    <div>
      <Suspense fallback={<p>Loading feed...</p>}>
        <div
          className="dark:bg-brand-900 border-t border-gray-300 bg-gray-100 text-gray-700 transition-colors duration-200 ease-in-out 
        dark:border-[#1d2034] dark:text-[#f3f4f8]">
          <div className="mx-auto mt-8 min-h-screen w-full max-w-[3000px] px-2 sm:px-6 lg:px-8">
            <div className="flex h-[100vh] space-x-5 overflow-hidden pb-8">
              {/* 왼쪽 */}
              <div className="hiddenScrollbar min-w-fit max-w-[350px] shrink-0 space-y-2 overflow-y-auto xl:min-w-[300px]">
                <button
                  type="button"
                  className="w-full rounded-md bg-violet-500 bg-opacity-20 p-2 font-semibold text-violet-400 hover:bg-opacity-40">
                  Randomize
                </button>
                <div className="relative flex items-center justify-between">
                  <input
                    className="group flex h-6 w-full items-center justify-center outline-none sm:justify-start md:h-auto md:flex-none 
                    md:rounded-lg md:py-2.5 md:pl-4 md:pr-3.5 md:text-sm md:ring-1 md:ring-slate-200 md:hover:ring-slate-300 
                    dark:md:bg-slate-700/40 dark:md:ring-inset dark:md:ring-slate-500 dark:md:ring-white/5"
                    value="10"
                  />
                  <span className="absolute right-[10px] top-[50%] -translate-y-1/2 transform text-gray-500 sm:text-sm">
                    tokens
                  </span>
                </div>
                <PartsList />
              </div>
              {/* 오른쪽 */}
              <div className="block grow">
                <div className="mb-3 flex gap-2 pr-px pt-px">
                  <button
                    type="button"
                    className="flex flex-wrap items-center gap-1 rounded-full bg-violet-500/20 bg-violet-500/40 px-3 py-1 text-xs font-medium leading-5 text-violet-500 ring-1 ring-violet-500 empty:hidden hover:bg-violet-500/40 dark:text-violet-400">
                    1 Tokens
                  </button>
                </div>
                <ImageList />
              </div>
            </div>
          </div>
        </div>
      </Suspense>
    </div>
  )
}

export default Preview
