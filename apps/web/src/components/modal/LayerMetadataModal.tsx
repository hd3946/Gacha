import { IonIcon } from '@ionic/react'
import { colorPaletteOutline, duplicateOutline, eyeOutline, trashOutline } from 'ionicons/icons'

const LayerMetadataModal = ({ onClose }: { onClose: any }) => {
  return (
    <div
      className="relative my-10 w-11/12 max-w-6xl transform rounded-lg bg-teal-800 text-left shadow-xl transition-all lg:w-full"
      onClick={onClose}
      id="headlessui-dialog-panel-13"
      data-headlessui-state="open">
      <div className="hiddenScrollbar mx-auto h-[92vh] overflow-hidden overflow-y-auto rounded-lg duration-300">
        <div className="flex h-full flex-col">
          <button
            type="button"
            aria-label="close"
            className="shadow-3xl xs:block absolute right-4 top-4 z-[51] hidden rounded-full bg-slate-900 p-3 text-white transition duration-200 ease-in-out">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <div className="col-span-6 flex h-fit w-full flex-col p-8 !pb-4">
            <div className="flex">
              <h1 className="mb-5 cursor-pointer truncate text-2xl font-extrabold tracking-wide text-white underline hover:underline">
                Background
              </h1>
            </div>
            <div className="mb-1">
              <div>
                <div>
                  <h3 className="text-lg font-bold leading-6 text-gray-100">Layer Metadata</h3>
                  <p className=" mb-2 mt-0 text-xs text-gray-400">Layer details appearing in the token metadata.</p>
                  <div className="flex items-center justify-between">
                    <label className="block text-sm font-medium text-gray-200">Name</label>
                    <div className=" mb-1 flex w-20 items-end justify-end text-white">
                      <div
                        aria-describedby="tippy-tooltip-6"
                        data-original-title="This layer will be visible in your metadata"
                        style={{ display: 'inline' }}>
                        <div className=" flex gap-2">
                          <div
                            style={{
                              position: 'relative',
                              display: 'inline-block',
                              textAlign: 'left',
                              opacity: 1,
                              direction: 'ltr',
                              borderRadius: '7.5px',
                              transition:
                                'opacity 0.25s ease 0s touch-action: none; WebkitTapHighlightColor: rgba(0, 0, 0, 0) userSelect: none'
                            }}>
                            <div
                              className="react-switch-bg"
                              style={{
                                height: '15px',
                                width: '30px',
                                margin: '0.5px',
                                position: 'relative',
                                background: 'rgb(0, 136, 0)',
                                borderRadius: '7.5px',
                                cursor: 'pointer',
                                transition: 'background 0.25s ease 0s'
                              }}>
                              <div
                                style={{
                                  height: '15px',
                                  width: '15.5px',
                                  position: 'relative',
                                  opacity: 1,
                                  pointerEvents: 'none',
                                  transition: 'opacity 0.25s ease 0s'
                                }}>
                                <svg
                                  height="100%"
                                  width="100%"
                                  viewBox="-2 -5 17 21"
                                  style={{ position: 'absolute', top: '0px' }}>
                                  <path
                                    d="M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0"
                                    fill="#fff"
                                    fill-rule="evenodd"></path>
                                </svg>
                              </div>
                              <div
                                style={{
                                  height: '15px',
                                  width: '15.5px',
                                  position: 'absolute',
                                  opacity: '0',
                                  right: '0px',
                                  top: '0px',
                                  pointerEvents: 'none',
                                  transition: 'opacity 0.25s ease 0s'
                                }}>
                                <svg
                                  viewBox="-2 -5 14 20"
                                  height="100%"
                                  width="100%"
                                  style={{ position: 'absolute', top: '0px' }}>
                                  <path
                                    d="M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12"
                                    fill="#fff"
                                    fill-rule="evenodd"></path>
                                </svg>
                              </div>
                            </div>
                            <div
                              className="react-switch-handle"
                              style={{
                                height: '16px',
                                width: '16px',
                                background: 'rgb(255, 255, 255)',
                                display: 'inline-block',
                                cursor: 'pointer',
                                borderRadius: '50%',
                                position: 'absolute',
                                transform: 'translateX(15px)',
                                top: '0px',
                                outline: '0px',
                                border: '0px',
                                transition:
                                  'background-color 0.25s ease 0s transform 0.25s ease 0s box-shadow 0.15s ease 0s'
                              }}></div>
                            <input
                              type="checkbox"
                              role="switch"
                              aria-checked="true"
                              style={{
                                border: '0px',
                                clip: 'rect(0px, 0px, 0px, 0px)',
                                height: '1px',
                                margin: '-1px',
                                overflow: 'hidden',
                                padding: '0px',
                                position: 'absolute',
                                width: '1px'
                              }}
                            />
                          </div>
                          <IonIcon
                            icon={eyeOutline}
                            role="img"
                            className="md hydrated"
                            style={{ transform: 'translateY(-1px)', color: 'white' }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <input
                    id="layer-name"
                    type="text"
                    className="focus:border-brand-500 focus:ring-brand-500 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                    value="Background"
                  />
                </div>
                <div className="mt-5">
                  <h3 className="text-sm font-medium leading-6 text-gray-100">Layer Rarity</h3>
                  <p className="mb-2 mt-0 text-xs text-gray-400">
                    Define the chances for this layers to appear in your tokens. ex: 50% means half of your tokens will
                    NOT have this layer.
                  </p>
                  <div className="field is-flex is-justify-content-space-between is-align-items-center">
                    <div className="flex w-full items-center justify-between gap-2 text-gray-200">
                      <span className="flex cursor-pointer items-center rounded-md border-0 bg-white pr-2 text-black ">
                        <input
                          type="number"
                          max="100"
                          min="0.01"
                          step="0.01"
                          className="cursor-pointer rounded-md border-0 bg-white text-sm text-black ring-0"
                          value="100"
                        />
                        %
                      </span>
                      <span className="is-size-7 mr-1">1%</span>
                      <input type="range" id="rarity" name="rarity" min="1" max="100" step="0.5" value="100" />
                      <span className="is-size-7 ml-1">100%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <nav className="mt-2 flex space-x-8 border-b border-slate-100 text-white" aria-label="Tabs">
              <a
                href="#"
                className="flex whitespace-nowrap !border-b-2 border-b-2 !border-gray-200 border-transparent px-1 py-4 text-sm font-medium text-neutral-200 hover:border-gray-200 hover:text-neutral-200">
                Assets
                <span className="ml-3 hidden rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-900 md:inline-block">
                  0
                </span>
              </a>
              <a
                href="#"
                className="flex whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-sm font-medium text-neutral-200 hover:border-gray-200 hover:text-neutral-200">
                Rules
                <span className="ml-3 hidden rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-900 md:inline-block">
                  0
                </span>
              </a>
              <div className="flex-1"></div>
              <a
                href="#"
                className="flex items-center gap-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-sm font-medium text-neutral-200 hover:border-gray-200 hover:text-neutral-200">
                <span className="inline-flex items-center">
                  <IonIcon icon={duplicateOutline} role="img" className="md hydrated" />
                </span>
                Duplicate
              </a>
              <a
                href="#"
                className="flex items-center gap-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-sm font-medium text-red-500 hover:border-gray-200">
                <span className="inline-flex items-center">
                  <IonIcon icon={trashOutline} role="img" className="md hydrated" />
                </span>
                Delete
              </a>
            </nav>
          </div>
          <div className="block grow px-8 pb-5">
            <div className="flex items-stretch gap-2">
              <div className="grow space-y-3">
                <div className="m-auto flex h-[140px] cursor-pointer items-center justify-center rounded-md border border-dashed border-slate-500 px-6 transition hover:border-slate-300">
                  <div className="drop w-full">
                    <div className="file-drop-target">
                      <div className="ml-auto space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true">
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"></path>
                        </svg>
                        <div className="ml-auto text-sm text-gray-600">
                          <label className="relative cursor-pointer rounded-md font-medium text-cyan-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-cyan-400 focus-within:ring-offset-2 hover:text-cyan-400">
                            <span>Upload files</span>
                            <input
                              accept="image/png, image/gif, video/mp4, video/webm"
                              type="file"
                              className="hidden"
                              style={{ display: 'none' }}
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">image/png, image/gif, video/mp4, video/webm up to 10MB</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="flex h-[140px] w-fit max-w-[200px] cursor-pointer flex-col items-center justify-center 
                rounded-md border border-slate-500 p-4 transition hover:border-slate-300"
                title="These assets will not have an image/video attached to them, meaning they will only be used for the metadata.">
                <span className="inline-flex items-center text-gray-400">
                  <IonIcon size="large" icon={colorPaletteOutline} role="img" className="md icon-large hydrated" />
                </span>
                <p
                  className="relative cursor-pointer rounded-md text-sm font-medium text-cyan-500 
                focus-within:outline-none focus-within:ring-2 focus-within:ring-cyan-400 focus-within:ring-offset-2 hover:text-cyan-400">
                  Add Custom Asset
                </p>
                <p className="text-xs text-gray-500">An asset with no file that will only be used for metadata.</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LayerMetadataModal
