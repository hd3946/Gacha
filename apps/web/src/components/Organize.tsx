'use client'
import { IonIcon } from '@ionic/react'
import { addCircleOutline, addOutline, colorPaletteOutline, settingsOutline } from 'ionicons/icons'

const Organize = () => {
  return (
    <div className="dark:bg-gray-800 mx-auto max-w-[3000px] min-h-screen w-full px-6">
      <div className="flex flex-col md:flex-row pt-3 px-4 pl-0 md:gap-10">
        <aside className="w-full md:w-[16rem] pb-10 overflow-y-auto px-[1px] pt-[1px] shrink md:shrink-0 h-fit md:h-full relative">
          <div className="relative w-full ring-1 ring-slate-200 hover:ring-slate-300 dark:ring-white/5 dark:ring-inset bg-white dark:bg-slate-700/40 dark:ring-slate-500 rounded-lg h-10 flex items-center">
            <input
              min="3"
              required
              type="text"
              id="layer name"
              className="outline-none group flex items-center h-auto flex-none py-3 pl-4 pr-3.5 text-sm dark:focus:text-white focus:placeholder:text-white/75 bg-transparent w-full"
              placeholder="New layer name"
            />
            <button className="absolute right-[5px] top-[5px] bottom-[5px] text-cyan-400 dark:hover:text-violet-200 text-sm border rounded-lg px-2 py-1 border-1 border-slate-200/10 hover:bg-slate-700/10">
              <div className="relative gap-0.5 flex items-center">
                <span className="inline-flex items-center">
                  <IonIcon icon={addOutline} role="img" className="hi" />
                </span>
                <span>Add</span>
              </div>
            </button>
          </div>
          {/* 아래 */}
          <div className="overflow-y-auto h-fit md:h-[calc(100vh-175px)] hiddenScrollbar px-0.5">
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
                  <div className="mt-3 grid grid-cols-12 outline-none group w-full rounded-md items-center text-sm py-1 px-3 hover:bg-slate-700/20 dark:hover:bg-slate-700/50 transition transition-bg duration-100 cursor-pointer bg-slate-700/30 dark:bg-slate-700/50">
                    <div className="col-span-11 flex items-center">
                      <div className="flex flex-col w-full">
                        <p className="whitespace-nowrap text-sm font-medium truncate text-black dark:text-cyan-400 ">
                          Background
                        </p>
                        <div className="flex dark:group-hover:text-gray-200  dark:text-gray-200">
                          <span className="text-[10px] inline-flex rounded-md ">0 Files</span>
                          <span className="w-1 h-1 rounded-full mt-2 mx-2 bg-gray-500  dark:bg-gray-200"></span>
                          <span className="text-[10px] inline-flex rounded-md ">100% Rarity</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-1 ml-auto hover:text-white dark:hover:text-white text-gray-900 dark:text-white/50 transition-all">
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
                  <div className="flex flex-col justify-center w-full items-center relative mt-1 -mb-2">
                    <div className="h-[5px] w-[1px] bg-gray-300 dark:bg-gray-500"></div>
                    <button
                      type="button"
                      className="dark:text-white flex items-center text-gray-500 hover:!text-cyan-400 p-0.5">
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
          <div className="pb-4 transition-all duration-200 ease-in-out space-y-2" style={{ position: 'relative' }}>
            <div className="flex h-10 items-center gap-4 overflow-auto hiddenScrollbar max-w-full whitespace-nowrap px-2">
              <div className="flex items-center gap-4">
                <div className="inline-block relative h-[36px] min-w-[10px]">
                  <span className="h-full invisible font-semibold text-2xl p-0.5">Background</span>
                  <input
                    type="text"
                    className="absolute inset-0 w-full h-full rounded-sm bg-transparent border-none text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 font-semibold text-2xl p-0.5"
                  />
                </div>
                <button
                  type="button"
                  className="flex items-center my-auto font-medium text-xs leading-5 rounded-full text-bray-400 bg-gray-500/20 hover:bg-gray-500/50 py-1 px-3">
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
                  className="flex items-center my-auto font-medium text-xs leading-5 rounded-full text-bray-400 bg-gray-500/20 hover:bg-gray-500/50 py-1 px-3 gap-1">
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
                  className="empty:hidden inline-block my-auto font-medium text-xs leading-5 rounded-full  bg-cyan-500/20 py-1 px-3 text-cyan-500 hover:bg-cyan-500/30 dark:hover:text-cyan-300">
                  <span className="flex items-center">
                    <span className="ml-1">Save in cloud</span>
                    <span className="relative flex h-3 w-3 ml-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75 animationLimit"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                    </span>
                  </span>
                </button>

                <button className="empty:hidden inline-block my-auto font-medium text-xs leading-5 rounded-full  bg-cyan-500/20 hover:bg-cyan-500/30 dark:hover:text-cyan-300 py-1 px-3 text-cyan-500">
                  <span className="flex items-center gap-0.5">
                    <span className="h-2 w-2 -100 rounded-full flex items-center justify-center bg-cyan-900/20 dark:bg-cyan-900"></span>
                    <span className="ml-1">Advanced</span>
                  </span>
                </button>

                <button className="empty:hidden inline-block my-auto font-medium text-xs leading-5 rounded-full  bg-cyan-500/20 hover:bg-cyan-500/30 dark:hover:text-cyan-300 py-1 px-3 text-cyan-500">
                  <span className="flex items-center gap-1">
                    <span className="h-2 w-2 -100 rounded-full flex items-center justify-center bg-cyan-900/20 dark:bg-cyan-900"></span>
                    <span>Quick Preview</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
          {/* 두번째 */}
          <div className="flex gap-2">
            <div className="w-full cursor-pointer transition m-auto justify-center rounded-md border border-dashed border-slate-500 hover:border-slate-300 px-6 h-[140px] flex items-center">
              <div className="drop w-full">
                <div className="file-drop-target">
                  <div className="space-y-1 text-center ml-auto">
                    <svg
                      aria-hidden="true"
                      className="mx-auto h-12 w-12 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                    </svg>
                    <div className="text-sm text-gray-600 ml-auto">
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
              className="max-w-[200px] cursor-pointer transition justify-center rounded-md border border-slate-500 hover:border-slate-300 p-4 w-fit flex flex-col items-center h-[140px]"
              title="These assets will not have an image/video attached to them, meaning they will only be used for the metadata.">
              <span className="inline-flex items-center text-gray-400">
                <IonIcon icon={colorPaletteOutline} />
              </span>
              <p className="relative cursor-pointer text-sm rounded-md font-medium text-cyan-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-cyan-400 focus-within:ring-offset-2 hover:text-cyan-400">
                Add Custom Asset
              </p>
              <p className="text-xs text-gray-500">An asset with no file that will only be used for metadata.</p>
            </button>
          </div>
          {/* 세번째 */}
          <div className="w-full min-h-[calc(100vh-150px)] block relative"></div>
        </main>
      </div>
    </div>
  )
}
export default Organize
