'use client'
import { IonIcon } from '@ionic/react'
import { addCircleOutline, addOutline, colorPaletteOutline, settingsOutline } from 'ionicons/icons'

const Organize = () => {
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
            <div data-rbd-droppable-id="droppable" data-rbd-droppable-context-id="0">
              <div>
                <div
                  id="Background|z5fIU"
                  data-rbd-draggable-context-id="0"
                  data-rbd-draggable-id="Background|z5fIU"
                  role="button"
                  aria-describedby="rbd-hidden-text-0-hidden-text-0"
                  data-rbd-drag-handle-draggable-id="Background|z5fIU"
                  data-rbd-drag-handle-context-id="0"
                  draggable="false">
                  <div className="transition-bg group mt-3 grid w-full cursor-pointer grid-cols-12 items-center rounded-md bg-slate-700/30 px-3 py-1 text-sm outline-none transition duration-100 hover:bg-slate-700/20 dark:bg-slate-700/50 dark:hover:bg-slate-700/50">
                    <div className="col-span-11 flex items-center">
                      <div className="flex w-full flex-col">
                        <p className="truncate whitespace-nowrap text-sm font-medium text-black dark:text-cyan-400 ">
                          Background
                        </p>
                        <div className="flex dark:text-gray-200  dark:group-hover:text-gray-200">
                          <span className="inline-flex rounded-md text-[10px] ">0 Files</span>
                          <span className="mx-2 mt-2 h-1 w-1 rounded-full bg-gray-500  dark:bg-gray-200"></span>
                          <span className="inline-flex rounded-md text-[10px] ">100% Rarity</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-1 ml-auto text-gray-900 transition-all hover:text-white dark:text-white/50 dark:hover:text-white">
                      <button type="button" className="flex items-center">
                        <IonIcon
                          icon={settingsOutline}
                          name=""
                          role="img"
                          className="md hydrated"
                          aria-label="settings outline"
                        />
                      </button>
                    </div>
                  </div>
                  <div className="relative -mb-2 mt-1 flex w-full flex-col items-center justify-center">
                    <div className="h-[5px] w-[1px] bg-gray-300 dark:bg-gray-500"></div>
                    <button
                      type="button"
                      className="flex items-center p-0.5 text-gray-500 hover:!text-cyan-400 dark:text-white">
                      <IonIcon
                        icon={addCircleOutline}
                        role="img"
                        className="md hydrated"
                        aria-label="add circle outline"
                      />
                    </button>
                  </div>
                </div>
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
                <button
                  type="button"
                  className="text-bray-400 my-auto flex items-center rounded-full bg-gray-500/20 px-3 py-1 text-xs font-medium leading-5 hover:bg-gray-500/50">
                  <span>
                    <svg
                      width="3"
                      height="6"
                      className="mr-3 overflow-visible transition-transform duration-200 ease-in-out"
                      aria-hidden="true">
                      <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor"></path>
                    </svg>
                  </span>
                  <span>Manage</span>
                </button>
                <button
                  type="button"
                  className="text-bray-400 my-auto flex items-center gap-1 rounded-full bg-gray-500/20 px-3 py-1 text-xs font-medium leading-5 hover:bg-gray-500/50">
                  <span>
                    <svg
                      width="3"
                      height="6"
                      className="mr-3 overflow-visible transition-transform duration-200 ease-in-out"
                      aria-hidden="true">
                      <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor"></path>
                    </svg>
                  </span>
                  <span>Add Files</span>
                </button>
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
          <div className="flex gap-2">
            <div className="m-auto flex h-[140px] w-full cursor-pointer items-center justify-center rounded-md border border-dashed border-slate-500 px-6 transition hover:border-slate-300">
              <div className="drop w-full">
                <div className="file-drop-target">
                  <div className="ml-auto space-y-1 text-center">
                    <svg
                      aria-hidden="true"
                      className="mx-auto h-12 w-12 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                    </svg>
                    <div className="ml-auto text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md font-medium text-cyan-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-cyan-400 focus-within:ring-offset-2 hover:text-cyan-400">
                        <span>Upload files</span>
                        <input accept="image/png, image/gif, video/mp4, video/webm" type="file" className="hidden" />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      image/png, image/gif, video/mp4, video/webm up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="flex h-[140px] w-fit max-w-[200px] cursor-pointer flex-col items-center justify-center rounded-md border border-slate-500 p-4 transition hover:border-slate-300"
              title="These assets will not have an image/video attached to them, meaning they will only be used for the metadata.">
              <span className="inline-flex items-center text-gray-400">
                <IonIcon icon={colorPaletteOutline} />
              </span>
              <p className="relative cursor-pointer rounded-md text-sm font-medium text-cyan-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-cyan-400 focus-within:ring-offset-2 hover:text-cyan-400">
                Add Custom Asset
              </p>
              <p className="text-xs text-gray-500">An asset with no file that will only be used for metadata.</p>
            </button>
          </div>
          {/* 세번째 */}
          <div className="relative block min-h-[calc(100vh-150px)] w-full"></div>
        </main>
      </div>
    </div>
  )
}
export default Organize
