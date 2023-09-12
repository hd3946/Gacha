import { useLayerStore } from '@/store/layerStore'
import { SetStateAction, useState } from 'react'
import { IoCloseOutline } from 'react-icons/io5'

export const handleSubmit = (inputText: string, layersIndex: number, addLayer: any, onClose?: () => void): void => {
  if (inputText === '') return
  const newLayer = {
    id: `${layersIndex}`,
    name: inputText,
    imageList: [],
    rarity: 100,
    isShow: true
  }
  addLayer(newLayer)
  if (onClose) onClose()
}

const AddNewLayerModal = ({ onClose }: { onClose: any }) => {
  const [inputText, setInputText] = useState('')
  const { layers, addLayer } = useLayerStore()

  const handleInputChange = (event: { target: { value: SetStateAction<string> } }) => {
    setInputText(event.target.value)
  }

  const onSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    handleSubmit(inputText, layers?.length as number, addLayer, onClose)
  }

  return (
    <form
      className="relative w-[32rem] translate-y-0 transform space-y-3 overflow-hidden rounded-lg bg-gray-800 px-6 pb-4 pt-5 
    text-left text-white opacity-100 shadow-xl transition-all">
      <button
        type="button"
        onClick={onClose}
        className="focus:ring-brand-500 absolute right-4 top-4 flex items-center rounded-md text-gray-300 
        hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2">
        <span className="sr-only">Close</span>
        <span className="inline-flex items-center" aria-hidden="true">
          <IoCloseOutline role="img" />
        </span>
      </button>
      <div className="!mt-0 text-left">
        <h3 className="text-lg font-bold text-white">Add New Layer</h3>
      </div>
      <div className="w-full">
        <label className="sr-only">Layer Name</label>
        <input
          type="text"
          name="field"
          id="field"
          className="focus:border-brand-500 focus:ring-brand-500 block w-full rounded-md 
          border-gray-300 text-black shadow-sm placeholder:text-gray-400 sm:text-sm"
          placeholder="Background"
          onChange={handleInputChange}
          defaultValue={inputText}
        />
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          onClick={onSubmit}
          className="hover:bg-brand-700 focus:ring-brand-500 disabled:hover:bg-brand-500 inline-flex w-full justify-center rounded-md 
          border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow-sm 
          focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto">
          Continue
        </button>
      </div>
    </form>
  )
}

export default AddNewLayerModal
