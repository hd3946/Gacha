import { IonIcon } from '@ionic/react'
import { colorPaletteOutline } from 'ionicons/icons'

const ImageUploadBox = () => {
  return (
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
  )
}

export default ImageUploadBox
