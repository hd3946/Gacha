'use client'
import { IonIcon } from '@ionic/react'
import { addOutline } from 'ionicons/icons'

const Organize = () => {
  return (
    <div className="mx-auto max-w-[3000px] min-h-screen w-full mt-5 px-6">
      <div className="flex flex-col md:flex-row pt-3 px-4 pl-0 md:gap-10">
        <aside className="w-full md:w-[16rem] pb-10 overflow-y-auto px-[1px] pt-[1px] shrink md:shrink-0 h-fit md:h-full relative">
          <div className="relative w-full ring-1 ring-slate-200 hover:ring-slate-300 dark:ring-white/5 dark:ring-inset bg-white dark:bg-slate-700/40 dark:ring-slate-500 rounded-lg h-10 flex items-center">
            <button className="absolute right-[5px] top-[5px] bottom-[5px] text-cyan-400 dark:hover:text-violet-200 text-sm border rounded-lg px-2 py-1 border-1 border-slate-200/10 hover:bg-slate-700/10">
              <div className="relative gap-0.5 flex items-center">
                <span className="inline-flex items-center">
                  <IonIcon icon={addOutline} role="img" className="hi"></IonIcon>
                </span>
                <span>Add</span>
              </div>
            </button>
          </div>
        </aside>
        <main className="grow overflow-hidden">
          <div className="pb-4 transition-all duration-200 ease-in-out space-y-2" style={{ position: 'relative' }}>
            <div className="flex h-10 items-center gap-4 overflow-auto hiddenScrollbar max-w-full whitespace-nowrap px-2">
              <div className="flex items-center gap-4">
                <div className="inline-block relative h-[36px] min-w-[10px]">
                  <span className="h-full invisible font-semibold text-2xl p-0.5"></span>
                </div>
              </div>
              <div className="ml-auto flex gap-4">
                <button
                  type="button"
                  className="empty:hidden inline-block my-auto font-medium text-xs leading-5 rounded-full  bg-cyan-500/20 py-1 px-3 text-cyan-500 hover:bg-cyan-500/30 dark:hover:text-cyan-300">
                  <span className="flex items-center">
                    <div
                      style={{
                        position: 'relative',
                        display: 'inline-block',
                        textAlign: 'left',
                        opacity: 1,
                        direction: 'ltr',
                        borderRadius: '6px',
                        transition: 'opacity 0.25s ease 0s',
                        touchAction: 'none',
                        WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
                        userSelect: 'none'
                      }}>
                      <div
                        className="react-switch-bg"
                        style={{
                          height: '12px',
                          width: '26px',
                          margin: '1px',
                          position: 'relative',
                          background: 'rgb(136, 136, 136)',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          transition: 'background 0.25s ease 0s'
                        }}>
                        <div
                          style={{
                            height: '12px',
                            width: '14px',
                            position: 'relative',
                            opacity: '0',
                            pointerEvents: 'none',
                            transition: 'opacity 0.25s ease 0s'
                          }}>
                          <svg
                            height="100%"
                            width="100%"
                            viewBox="-2 -5 17 21"
                            style={{
                              position: 'absolute',
                              top: '0px'
                            }}>
                            <path
                              d="M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0"
                              fill="#fff"
                              fillRule="evenodd"></path>
                          </svg>
                        </div>
                        <div
                          style={{
                            height: '12px',
                            width: '14px',
                            position: 'absolute',
                            opacity: '1',
                            right: '0px',
                            top: '0px',
                            pointerEvents: 'none',
                            transition: 'opacity 0.25s ease 0s'
                          }}>
                          <svg
                            viewBox="-2 -5 14 20"
                            height="100%"
                            width="100%"
                            style={{
                              position: 'absolute',
                              top: '0px'
                            }}>
                            <path
                              d="M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12"
                              fill="#fff"
                              fillRule="evenodd"></path>
                          </svg>
                        </div>
                      </div>
                      <div
                        className="react-switch-handle"
                        style={{
                          height: '14px',
                          width: '14px',
                          background: 'rgb(255, 255, 255)',
                          display: 'inline-block',
                          cursor: 'pointer',
                          borderRadius: '50%',
                          position: 'absolute',
                          transform: 'translateX(0px)',
                          top: '0px',
                          outline: '0px',
                          border: '0px',
                          transition:
                            'background-color 0.25s ease 0s, transform 0.25s ease 0s, box-shadow 0.15s ease 0s'
                        }}></div>
                    </div>
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
        </main>
      </div>
    </div>
  )
}
export default Organize
