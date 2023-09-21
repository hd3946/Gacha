import useAnimation from '@/hooks/useAnimationFrame'
import { useLayerFocusStore, useLayerStore } from '@/store/layerStore'
import { useUploadBoxOpen } from '@/store/store'
import { get, keys } from 'idb-keyval'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { IoAddOutline } from 'react-icons/io5'
import AddFileButton from '../button/organize/AddFilesButton'
import LayerMetadataButton from '../button/organize/LayerMetadataButton'
import { handleSubmit } from '../modal/AddNewLayerModal'
import DragDrop from './organize/DragDrop'
import ImageUploadBox from './organize/UploadBox'

const Organize = () => {
  const [inputText, setInputText] = useState<any>('')
  const [layerName, setLayerName] = useState('')
  const [previewImage, setPreviewImage] = useState('')
  const { divFocus } = useLayerFocusStore()
  const { layers, addLayer } = useLayerStore()
  const { open: Open } = useUploadBoxOpen()

  if (!useAnimation) {
    return null
  }

  const onSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    handleSubmit(inputText, layers?.length as number, addLayer)
    setInputText('')
  }

  const fetchData = async () => {
    const getData: IDBValidKey[] = await keys()
    
    getData.forEach(async (key: any) => {
      const i = await get(key)
      console.log('i', i)
      const blobImage = new Blob([i], { type: 'image/png' })
      // -> fold name -> layer name 
      const d: string = window.URL.createObjectURL(blobImage)
      setPreviewImage(d)
    })
  }

  useEffect(() => {
    fetchData()
    const focusId = Object.keys(divFocus).filter((key) => divFocus[key] === true)
    const findLayer = layers.filter((layer) => layer.id === focusId[0])
    setLayerName(findLayer[0]?.name)
  }, [layers, divFocus])

  return (
    <div className="mx-auto min-h-screen w-full max-w-[3000px] px-6 dark:bg-gray-800">
      <div className="flex flex-col px-4 pl-0 pt-3 md:flex-row md:gap-10">
        <aside
          className="relative h-fit w-full shrink overflow-y-auto px-[1px] pb-10 pt-[1px]
         md:h-full md:w-[16rem] md:shrink-0">
          <div
            className="relative flex h-10 w-full items-center rounded-lg bg-white ring-1 ring-slate-200 hover:ring-slate-300
           dark:bg-slate-700/40 dark:ring-inset dark:ring-slate-500 dark:ring-white/5">
            <form onSubmit={onSubmit}>
              <input
                required
                type="text"
                id="layer name"
                autoComplete="off"
                className="group flex h-auto w-full flex-none items-center border-0 bg-transparent py-3 pl-4 pr-3.5 text-sm
               outline-none focus:ring-0 focus:placeholder:text-white/75 dark:placeholder-gray-400 dark:focus:text-white"
                placeholder="New layer name"
                onChange={(e) => setInputText(e.target.value)}
                value={inputText}
              />
              <button
                type="submit"
                className="border-1 absolute bottom-[5px] right-[5px] top-[5px] rounded-lg border border-slate-200/10
             px-2 py-1 text-sm text-cyan-400 hover:bg-slate-700/10 dark:hover:text-violet-200"
                onClick={onSubmit}>
                <div className="relative flex items-center gap-0.5">
                  <span className="inline-flex items-center">
                    <IoAddOutline role="img" />
                  </span>
                  <span>Add</span>
                </div>
              </button>
            </form>
          </div>
          {/* SideBar */}
          {previewImage && (
            <>
              <Image src={previewImage} alt="preview" width={100} height={100} />
              <img id="output" src={previewImage} alt="preview" />
            </>
          )}
          <p>{previewImage}</p>

          <DragDrop />
        </aside>

        <main className="grow overflow-hidden">
          {/* 첫번째 */}
          <div className="relative space-y-2 pb-4 transition-all duration-200 ease-in-out">
            <div className="hiddenScrollbar flex h-10 max-w-full items-center gap-4 overflow-auto whitespace-nowrap px-2">
              <div className="flex items-center gap-4">
                <div className="relative inline-block h-[36px] min-w-[10px]">
                  <span className="invisible h-full p-0.5 text-2xl font-semibold">{layerName}</span>
                  <input
                    type="text"
                    className="absolute inset-0 h-full w-full rounded-sm border-none bg-transparent p-0.5 text-2xl 
                    font-semibold text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
                    defaultValue={layerName}
                  />
                </div>

                {layers.length > 0 && (
                  <>
                    <LayerMetadataButton />
                    <AddFileButton />
                  </>
                )}
              </div>
              <div className="ml-auto flex gap-4">
                {/* <button
                  type="button"
                  className="my-auto inline-block rounded-full bg-cyan-500/20 px-3 py-1 text-xs  font-medium leading-5 text-cyan-500 empty:hidden hover:bg-cyan-500/30 dark:hover:text-cyan-300">
                  <span className="flex items-center">
                    <span className="ml-1">Save in cloud</span>
                    <span className="relative ml-2 flex h-3 w-3">
                      <span className="animationLimit absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-sky-500"></span>
                    </span>
                  </span>
                </button> */}

                <button
                  className="my-auto inline-block rounded-full bg-cyan-500/20 px-3 py-1 text-xs  font-medium leading-5
                 text-cyan-500 empty:hidden hover:bg-cyan-500/30 dark:hover:text-cyan-300">
                  <span className="flex items-center gap-0.5">
                    <span
                      className="-100 flex h-2 w-2 items-center justify-center 
                    rounded-full bg-cyan-900/20 dark:bg-cyan-900"></span>
                    <span className="ml-1">Advanced</span>
                  </span>
                </button>

                <button
                  className="my-auto inline-block rounded-full bg-cyan-500/20 px-3 py-1 text-xs  font-medium leading-5
                 text-cyan-500 empty:hidden hover:bg-cyan-500/30 dark:hover:text-cyan-300">
                  <span className="flex items-center gap-1">
                    <span
                      className="flex h-2 w-2 items-center justify-center 
                    rounded-full bg-cyan-900/20 dark:bg-cyan-900"></span>
                    <span>Quick Preview</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
          {/* 두번째 */}
          {(Open || layers.length === 0) && <ImageUploadBox />}
          {/* 세번째 */}
          <div className="relative block min-h-[calc(100vh-150px)] w-full"></div>
        </main>
      </div>
    </div>
  )
}
export default Organize
