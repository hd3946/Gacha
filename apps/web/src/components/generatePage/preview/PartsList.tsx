const PartsList = () => {
  return (
    <div className="pb-5">
      <button className="text-semibold mb-8 flex w-full items-center justify-between font-medium text-slate-700 dark:text-slate-200 lg:mb-3">
        <div className="flex w-full">
          <span>Accessory</span>
          <span className="ml-2 rounded-full bg-violet-500/20 px-4 py-0.5 text-xs font-medium leading-5 text-violet-500 empty:hidden"></span>
          <span className="ml-auto">5</span>
        </div>
      </button>
      <ul className="space-y-6 border-l border-slate-800 lg:space-y-2">
        <div className="flex items-center">
          <div className="-ml-px flex w-full border-l border-transparent text-slate-600 hover:border-violet-500  hover:text-violet-500 dark:text-slate-400 dark:hover:border-violet-300 dark:hover:text-violet-300">
            <button className="ml-3 flex w-full justify-between text-sm">
              <span className="w-[220px] overflow-ellipsis text-left">basic</span>
              <span className="ml-auto block">2</span>
            </button>
          </div>
        </div>
        <div className="flex items-center">
          <div className="-ml-px flex w-full border-l border-transparent text-slate-600 hover:border-violet-500  hover:text-violet-500 dark:text-slate-400 dark:hover:border-violet-300 dark:hover:text-violet-300">
            <button className="ml-3 flex w-full justify-between text-sm">
              <span className="w-[220px] overflow-ellipsis text-left">rainbow</span>
              <span className="ml-auto block">2</span>
            </button>
          </div>
        </div>
        <div className="flex items-center">
          <div className="-ml-px flex w-full border-l border-transparent text-slate-600 hover:border-violet-500  hover:text-violet-500 dark:text-slate-400 dark:hover:border-violet-300 dark:hover:text-violet-300">
            <button className="ml-3 flex w-full justify-between text-sm">
              <span className="w-[220px] overflow-ellipsis text-left">strange</span>
              <span className="ml-auto block">1</span>
            </button>
          </div>
        </div>
      </ul>
    </div>
  )
}

export default PartsList
