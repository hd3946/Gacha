'use client'
import { useUploadBoxOpen } from '@/store/store'
import { IonIcon } from '@ionic/react'
import { addOutline, settingsOutline } from 'ionicons/icons'
import AddFileButton from '../button/organize/AddFilesButton'
import AddNewLayerButton from '../button/organize/AddNewLayerButton'
import LayerMetadataButton from '../button/organize/LayerMetadataButton'
import ImageUploadBox from './organize/UploadBox'

const Organize = () => {
  const store = useUploadBoxOpen()
  const Open = store.open
  return (
    <div className="mx-auto min-h-screen w-full max-w-[3000px] px-6 dark:bg-gray-800">
      <div className="flex flex-col px-4 pl-0 pt-3 md:flex-row md:gap-10">
        <aside className="relative h-fit w-full shrink overflow-y-auto px-[1px] pb-10 pt-[1px] md:h-full md:w-[16rem] md:shrink-0">
          <div className="relative flex h-10 w-full items-center rounded-lg bg-white ring-1 ring-slate-200 hover:ring-slate-300 dark:bg-slate-700/40 dark:ring-inset dark:ring-slate-500 dark:ring-white/5">
            <input
              min="3"
              required
              type="text"
              id="layer name"
              className="group flex h-auto w-full flex-none items-center bg-transparent py-3 pl-4 pr-3.5 text-sm outline-none focus:placeholder:text-white/75 dark:focus:text-white"
              placeholder="New layer name"
            />
            <button className="border-1 absolute bottom-[5px] right-[5px] top-[5px] rounded-lg border border-slate-200/10 px-2 py-1 text-sm text-cyan-400 hover:bg-slate-700/10 dark:hover:text-violet-200">
              <div className="relative flex items-center gap-0.5">
                <span className="inline-flex items-center">
                  <IonIcon icon={addOutline} role="img" className="hi" />
                </span>
                <span>Add</span>
              </div>
            </button>
          </div>
          {/* 아래 */}
          <div className="hiddenScrollbar h-fit overflow-y-auto px-0.5 md:h-[calc(100vh-175px)]">
            <div id="Background" role="button" draggable="true">
              <div className="transition-bg group mt-3 grid w-full cursor-pointer grid-cols-12 items-center rounded-md bg-slate-700/30 px-3 py-1 text-sm outline-none transition duration-100 hover:bg-slate-700/20 dark:bg-slate-700/50 dark:hover:bg-slate-700/50">
                <div className="col-span-11 flex items-center">
                  <div className="flex w-full flex-col">
                    <p className="truncate whitespace-nowrap text-sm font-medium text-black dark:text-cyan-400 ">
                      Background
                    </p>
                    <div className="flex dark:text-gray-200 dark:group-hover:text-gray-200">
                      <span className="inline-flex rounded-md text-[10px] ">0 Files</span>
                      <span className="mx-2 mt-2 h-1 w-1 rounded-full bg-gray-500  dark:bg-gray-200"></span>
                      <span className="inline-flex rounded-md text-[10px] ">100% Rarity</span>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 ml-auto text-gray-900 transition-all hover:text-white dark:text-white/50 dark:hover:text-white">
                  <button type="button" className="flex items-center">
                    <IonIcon icon={settingsOutline} role="img" className="md hydrated" aria-label="settings outline" />
                  </button>
                </div>
              </div>
              <div className="relative -mb-2 mt-1 flex w-full flex-col items-center justify-center">
                <div className="h-[5px] w-[1px] bg-gray-300 dark:bg-gray-500"></div>
                <AddNewLayerButton />
              </div>
            </div>
          </div>
        </aside>

        <main className="grow overflow-hidden">
          {/* 첫번째 */}
          <div className="space-y-2 pb-4 transition-all duration-200 ease-in-out" style={{ position: 'relative' }}>
            <div className="hiddenScrollbar flex h-10 max-w-full items-center gap-4 overflow-auto whitespace-nowrap px-2">
              <div className="flex items-center gap-4">
                <div className="relative inline-block h-[36px] min-w-[10px]">
                  <span className="invisible h-full p-0.5 text-2xl font-semibold">Background</span>
                  <input
                    type="text"
                    className="absolute inset-0 h-full w-full rounded-sm border-none bg-transparent p-0.5 text-2xl font-semibold text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
                  />
                </div>
                <LayerMetadataButton />
                <AddFileButton />
              </div>
              <div className="ml-auto flex gap-4">
                <button
                  type="button"
                  className="my-auto inline-block rounded-full bg-cyan-500/20 px-3 py-1 text-xs  font-medium leading-5 text-cyan-500 empty:hidden hover:bg-cyan-500/30 dark:hover:text-cyan-300">
                  <span className="flex items-center">
                    <span className="ml-1">Save in cloud</span>
                    <span className="relative ml-2 flex h-3 w-3">
                      <span className="animationLimit absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-sky-500"></span>
                    </span>
                  </span>
                </button>

                <button className="my-auto inline-block rounded-full bg-cyan-500/20 px-3 py-1 text-xs  font-medium leading-5 text-cyan-500 empty:hidden hover:bg-cyan-500/30 dark:hover:text-cyan-300">
                  <span className="flex items-center gap-0.5">
                    <span className="-100 flex h-2 w-2 items-center justify-center rounded-full bg-cyan-900/20 dark:bg-cyan-900"></span>
                    <span className="ml-1">Advanced</span>
                  </span>
                </button>

                <button className="my-auto inline-block rounded-full bg-cyan-500/20 px-3 py-1 text-xs  font-medium leading-5 text-cyan-500 empty:hidden hover:bg-cyan-500/30 dark:hover:text-cyan-300">
                  <span className="flex items-center gap-1">
                    <span className="-100 flex h-2 w-2 items-center justify-center rounded-full bg-cyan-900/20 dark:bg-cyan-900"></span>
                    <span>Quick Preview</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
          {/* 두번째 */}
          {Open && <ImageUploadBox />}
          {/* 세번째 */}
          <div className="relative block min-h-[calc(100vh-150px)] w-full"></div>
        </main>
      </div>
    </div>
  )
}
export default Organize
