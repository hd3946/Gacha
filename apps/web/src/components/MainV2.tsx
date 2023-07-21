import Organize from './Organize'
import Preview from './Preview'

const MainV2 = () => {
  return (
    <div className="dark:bg-brand-900 border-t border-gray-300 bg-gray-100 text-gray-700 transition-colors duration-200 ease-in-out dark:border-[#1d2034] dark:text-[#f3f4f8]">
      <Organize />
      <Preview />
    </div>
  )
}

export default MainV2
