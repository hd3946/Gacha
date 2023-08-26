import AddNewLayerButton from '@/components/button/organize/AddNewLayerButton'
import LayerMetadataIconButton from '@/components/button/organize/LayerMetadataIconButton'

const LayerButton = ({ layer }: { layer: any }) => {
  return (
    <div id="Background" role="button" draggable="true">
      <div
        className="transition-bg group mt-3 grid w-full cursor-pointer grid-cols-12 items-center rounded-md bg-slate-700/30 
      px-3 py-1 text-sm outline-none transition duration-100 hover:bg-slate-700/20 dark:bg-slate-700/50 dark:hover:bg-slate-700/50">
        <div className="col-span-11 flex items-center">
          <div className="flex w-full flex-col">
            <p className="truncate whitespace-nowrap text-sm font-medium text-black dark:text-cyan-400 ">
              {layer.layerName}
            </p>
            <div className="flex dark:text-gray-200 dark:group-hover:text-gray-200">
              <span className="inline-flex rounded-md text-[10px] ">0 Files</span>
              <span className="mx-2 mt-2 h-1 w-1 rounded-full bg-gray-500  dark:bg-gray-200"></span>
              <span className="inline-flex rounded-md text-[10px] ">100% Rarity</span>
            </div>
          </div>
        </div>
        <div className="col-span-1 ml-auto text-gray-900 transition-all hover:text-white dark:text-white/50 dark:hover:text-white">
          <LayerMetadataIconButton />
        </div>
      </div>
      <div className="relative -mb-2 mt-1 flex w-full flex-col items-center justify-center">
        <div className="h-[5px] w-[1px] bg-gray-300 dark:bg-gray-500"></div>
        <AddNewLayerButton />
      </div>
    </div>
  )
}

export default LayerButton
