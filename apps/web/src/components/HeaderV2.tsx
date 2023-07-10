'use client'
import useColorMode from '@/hooks/useColorMode'
import { useTabValueStore } from '@/store'
import { TabV2 } from '@/type'
import { IonIcon } from '@ionic/react'
import { constructOutline, moonOutline, settingsOutline, sparklesOutline, sunnyOutline } from 'ionicons/icons'
import ImageLogo from 'next/image'
import style from './HeaderV2.module.css'

export default function HeaderTest() {
  const [colorMode, setColorMode] = useColorMode()
  const store = useTabValueStore()

  const LogoImage = colorMode === 'light' ? '/images/NFTArtGeneratorbyonemintblue.webp' : '/images/logo.png'

  return (
    <div className="dark:bg-gray-800 bg-red-200 mx-auto px-2 sm:px-6 lg:px-8 h-full relative flex items-center justify-between max-w-[3000px] overflow-auto hiddenScrollbar">
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start gap-10">
        <div className="flex flex-shrink-0 items-center">
          <ImageLogo src={LogoImage} alt="Gacha_Logo" width={220} height={40} priority />
        </div>

        <div className="relative z-0 flex flex-1 items-center justify-center">
          <div className="flex space-x-4 my-2 mx-auto">
            <button className={style.settings_btn} onClick={() => store.setValue(TabV2.Settings)}>
              <span className="flex gap-3 items-center justify-center group-hover:text-orange-400 dark:text-orange-300 group-hover:text-orange-300 text-orange-400 dark:text-orange-300 group-hover:text-orange-300">
                <span className="group-hover:text-orange-400 dark:text-orange-300 group-hover:text-orange-300 text-orange-400 dark:text-orange-300 group-hover:text-orange-300 inline-flex items-center">
                  <IonIcon icon={settingsOutline} role="img" className="hi" />
                </span>
                <span className="hidden lg:inline dark:group-hover:text-cyan-400 dark:text-cyan-400 group-hover:text-cyan-400 text-gray-600 dark:text-gray-400">
                  Settings
                </span>
              </span>
            </button>
            <span className="text-slate-400 mt-4"></span>
            <button className={style.organize_btn} onClick={() => store.setValue(TabV2.Organize)}>
              <span className="flex gap-3 items-center justify-center group-hover:text-cyan-400 dark:text-cyan-400 group-hover:text-cyan-400 text-cyan-400 dark:text-cyan-400 group-hover:text-cyan-400">
                <span className="group-hover:text-cyan-400 dark:text-cyan-400 group-hover:text-cyan-400 text-cyan-400 dark:text-cyan-400 group-hover:text-cyan-400 inline-flex items-center">
                  <IonIcon icon={constructOutline} role="img" />
                </span>
                <span className="hidden lg:inline dark:group-hover:text-cyan-400 dark:text-cyan-400 group-hover:text-cyan-400 text-gray-600 dark:text-gray-400">
                  Organize
                </span>
              </span>
            </button>
            <span className="text-slate-400 mt-4">
              <svg width="3" height="6" aria-hidden="true" />
            </span>
            <button className={style.preview_btn} onClick={() => store.setValue(TabV2.Preview)}>
              <span className="flex gap-3 items-center justify-center group-hover:text-violet-400 dark:text-violet-300 group-hover:text-violet-300 text-violet-400 dark:text-violet-300 group-hover:text-violet-300">
                <span className="group-hover:text-violet-400 dark:text-violet-300 group-hover:text-violet-300 text-violet-400 dark:text-violet-300 group-hover:text-violet-300 inline-flex items-center">
                  <IonIcon icon={constructOutline} role="img" />
                </span>
                <span className="hidden lg:inline dark:group-hover:text-violet-400 dark:text-violet-300 group-hover:text-violet-300 text-gray-600 dark:text-gray-400">
                  Preview
                </span>
              </span>
            </button>
            <span className="text-slate-400 mt-4">
              <svg width="3" height="6" aria-hidden="true"></svg>
            </span>
            <button className={style.export_btn} onClick={() => store.setValue(TabV2.Export)}>
              <span className="flex gap-3 items-center justify-center group-hover:text-teal-400 dark:text-teal-400 group-hover:text-teal-400 text-teal-400 dark:text-teal-400 group-hover:text-teal-400">
                <span className="group-hover:text-teal-400 dark:text-teal-400 group-hover:text-teal-400 text-teal-400 dark:text-teal-400 group-hover:text-teal-400 inline-flex items-center">
                  <IonIcon icon={sparklesOutline} role="img" />
                </span>
                <span className="hidden lg:inline dark:group-hover:text-teal-400 dark:text-teal-400 group-hover:text-teal-400 text-gray-600 dark:text-gray-400">
                  Export
                </span>
              </span>
            </button>
          </div>

          <div className="mx-auto">
            <button className="ml-4 text-xs leading-5 font-medium ring-1 ring-sky-600 dark:ring-0 text-sky-600 dark:text-sky-400 bg-sky-400/10 rounded-full py-1 px-3 hidden lg:flex gap-2 items-center justify-between hover:bg-sky-400/20 cursor-pointer">
              <span className="font-bold underline whitespace-nowrap">Mint a Team Pass</span>
              <span className="inline-flex items-center"></span>
              <span className="hidden xl:inline-block">Unlock Pro features!</span>
            </button>
          </div>
        </div>
        <div className="ml-auto flex items-center justify-end gap-2">
          <button
            className="text-gray-600 relative inline-flex items-center justify-center flex-shrink-0 cursor-pointer rounded-md transition-colors duration-200 ease-in-out focus:outline-none h-[36px] w-[36px] bg-white hover:bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-gray-900 dark:text-gray-400"
            id="headlessui-switch-1"
            role="switch"
            type="button"
            aria-checked="true"
            onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}>
            {colorMode === 'light' ? <IonIcon icon={sunnyOutline} /> : <IonIcon icon={moonOutline} />}
          </button>
          <button
            type="button"
            className="bg-white hover:bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-gray-600 dark:text-gray-400 py-2 px-3 text-sm rounded-md">
            Connect
          </button>
        </div>
      </div>
    </div>
  )
}
