import { useLayerStore } from '@/store/layerStore'
import Image from 'next/image'
import { useState } from 'react'
import { IoColorPaletteOutline } from 'react-icons/io5'

const ImageUploadBox = () => {
  const [selectedFile, setSelectedFile] = useState(null)
  const { layers } = useLayerStore()

  const handleFileChange = (event: any) => {
    const file = event.target.files[0]
    if (!file) return
    console.log('file', file)
    setSelectedFile(file)
  }

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    if (selectedFile) {
      // 서버로 파일 업로드 처리
      console.log('Uploading file:', selectedFile)
    } else {
      console.log('No file selected.')
    }
  }

  return (
    <div className="flex gap-2">
      {layers.length > 0 ? (
        <div
          className="m-auto flex h-[140px] w-full items-center justify-center
       rounded-md border border-dashed border-slate-500 px-6 transition hover:border-slate-300">
          <label
            htmlFor="dropzone-file"
            className="relative flex w-full cursor-pointer flex-col rounded-md text-center text-sm text-cyan-500 focus-within:outline-none focus-within:ring-2
                   focus-within:ring-cyan-400 focus-within:ring-offset-2 hover:text-cyan-400">
            <Image
              src="./images/FileUpload.svg"
              className="mx-auto h-12 w-12 text-gray-400"
              alt="fileUpload_image"
              width={50}
              height={50}
            />
            <span>Upload files</span>
            <input
              id="dropzone-file"
              className="hidden"
              type="file"
              onChange={handleFileChange}
              accept="image/png, image/gif, video/mp4, video/webm"
            />
            <p className="pl-1 text-gray-600">or drag and drop</p>
            <p className="mb-2 text-xs text-gray-400 dark:text-gray-400">
              image/png, image/gif, video/mp4, video/webm up to 10MB
            </p>
          </label>
        </div>
      ) : (
        <></>
      )}
      <button
        className="flex h-[140px] w-fit max-w-[200px] cursor-pointer flex-col items-center justify-center rounded-md border border-slate-500 p-4 transition hover:border-slate-300"
        title="These assets will not have an image/video attached to them, meaning they will only be used for the metadata.">
        <span className="inline-flex items-center text-gray-400">
          <IoColorPaletteOutline />
        </span>
        <p className="relative cursor-pointer rounded-md text-sm font-medium text-cyan-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-cyan-400 focus-within:ring-offset-2 hover:text-cyan-400">
          Add Custom Asset
        </p>
        <p className="text-xs text-gray-500">An asset with no file that will only be used for metadata.</p>
      </button>
    </div>
  )
}

export default ImageUploadBox
