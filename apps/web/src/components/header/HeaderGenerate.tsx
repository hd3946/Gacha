'use client'
import useLogoMode from '@/hooks/useLogoMode'
import useMounted from '@/hooks/useMouted'
import { useTabValueStore } from '@/store/store'
import { GenerateTab } from '@/types/taps'
import ImageLogo from 'next/image'
import Link from 'next/link'
import {
  IoConstructOutline,
  IoFlaskOutline,
  IoMoonOutline,
  IoSettingsOutline,
  IoSparklesOutline,
  IoSunnyOutline
} from 'react-icons/io5'
import { WalletButton } from '../button'

export default function Header() {
  const [logo, colorMode, setColorMode] = useLogoMode()
  const { tabNumber, setTabNumber } = useTabValueStore()

  return (
    <div className="hiddenScrollbar relative mx-auto flex h-[4.5rem] max-w-[3000px] items-center justify-between overflow-auto bg-red-200 px-2 dark:bg-gray-800 sm:px-6 lg:px-8">
      <div className="flex flex-1 items-center justify-center gap-10 sm:items-stretch sm:justify-start">
        <div className="flex flex-shrink-0 items-center">
          <Link href="/" passHref>
            <ImageLogo src={logo} alt="Gacha_Logo" width={220} height={40} priority />
          </Link>
        </div>

        <div className="relative z-0 flex flex-1 items-center justify-center">
          <div className="mx-auto my-2 flex space-x-4">
            <button
              className={`settings_btn group ${
                tabNumber === GenerateTab.Settings ? 'border-orange-400 bg-gray-200' : ''
              }`}
              onClick={() => setTabNumber(GenerateTab.Settings)}
              aria-current="page"
              aria-disabled="false">
              <span className="flex items-center justify-center gap-3 text-orange-400 group-hover:text-orange-300 group-hover:text-orange-300 group-hover:text-orange-400 dark:text-orange-300 dark:text-orange-300">
                <span className="inline-flex items-center text-orange-400 group-hover:text-orange-300 group-hover:text-orange-300 group-hover:text-orange-400 dark:text-orange-300 dark:text-orange-300">
                  <IoSettingsOutline />
                </span>
                <span className="settings_span">Settings</span>
              </span>
            </button>
            <span className="mt-4 text-slate-400"></span>
            <button
              className={`organize_btn group ${
                tabNumber === GenerateTab.Organize ? 'border-cyan-400 bg-gray-200' : ''
              }`}
              onClick={() => setTabNumber(GenerateTab.Organize)}>
              <span className="flex items-center justify-center gap-3 text-cyan-400 group-hover:text-cyan-400 group-hover:text-cyan-400 group-hover:text-cyan-400 dark:text-cyan-400 dark:text-cyan-400">
                <span className="inline-flex items-center text-cyan-400 group-hover:text-cyan-400 group-hover:text-cyan-400 group-hover:text-cyan-400 dark:text-cyan-400 dark:text-cyan-400">
                  <IoConstructOutline />
                </span>
                <span className="organize_span">Organize</span>
              </span>
            </button>
            <span className="mt-4 text-slate-400">
              <svg width="3" height="6" aria-hidden="true" />
            </span>
            <button
              className={`preview_btn group ${tabNumber === GenerateTab.Preview && 'border-violet-400 bg-gray-200'}`}
              onClick={() => setTabNumber(GenerateTab.Preview)}>
              <span className="flex items-center justify-center gap-3 text-violet-400 group-hover:text-violet-300 group-hover:text-violet-300 group-hover:text-violet-400 dark:text-violet-300 dark:text-violet-300">
                <span className="inline-flex items-center text-violet-400 group-hover:text-violet-300 group-hover:text-violet-300 group-hover:text-violet-400 dark:text-violet-300 dark:text-violet-300">
                  <IoFlaskOutline />
                </span>
                <span className="hidden text-gray-600 group-hover:text-violet-300 dark:text-gray-400 dark:text-violet-300 dark:group-hover:text-violet-400 lg:inline">
                  Preview
                </span>
              </span>
            </button>
            <span className="mt-4 text-slate-400">
              <svg width="3" height="6" aria-hidden="true"></svg>
            </span>
            <button
              className={`export_btn group ${tabNumber === GenerateTab.Export && 'border-teal-400 bg-gray-200'}`}
              onClick={() => setTabNumber(GenerateTab.Export)}>
              <span className="flex items-center justify-center gap-3 text-teal-400 group-hover:text-teal-400 group-hover:text-teal-400 group-hover:text-teal-400 dark:text-teal-400 dark:text-teal-400">
                <span className="inline-flex items-center text-teal-400 group-hover:text-teal-400 group-hover:text-teal-400 group-hover:text-teal-400 dark:text-teal-400 dark:text-teal-400">
                  <IoSparklesOutline />
                </span>
                <span className="hidden text-gray-600 group-hover:text-teal-400 dark:text-gray-400 dark:text-teal-400 dark:group-hover:text-teal-400 lg:inline">
                  Export
                </span>
              </span>
            </button>
          </div>

          <div className="mx-auto">
            <button
              className="ml-4 hidden cursor-pointer items-center justify-between gap-2 rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-600 
            ring-1 ring-sky-600 hover:bg-sky-400/20 dark:text-sky-400 dark:ring-0 lg:flex">
              <span className="whitespace-nowrap font-bold underline">Mint Pass</span>
              <span className="inline-flex items-center"></span>
              <span className="hidden xl:inline-block">Unlock Pro!</span>
            </button>
          </div>
        </div>
        <div className="ml-auto flex items-center justify-end gap-2">
          <button
            className="relative inline-flex h-10 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-md bg-white 
              text-gray-600 text-gray-900 transition-colors duration-200 ease-in-out hover:bg-gray-200 focus:outline-none 
              dark:bg-slate-800 dark:text-gray-400 dark:hover:bg-slate-700"
            role="switch"
            type="button"
            aria-checked="true"
            onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}>
            {!useMounted() ? <IoSunnyOutline /> : colorMode === 'light' ? <IoSunnyOutline /> : <IoMoonOutline />}
          </button>
          <WalletButton />
        </div>
      </div>
    </div>
  )
}
