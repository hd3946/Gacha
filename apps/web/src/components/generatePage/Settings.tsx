import SettingValuesStore from '@/store/settingValuesStore'
import { clear, get, keys, set } from 'idb-keyval'
import { useEffect, useState } from 'react'
import { IoAddOutline, IoFolderOpenOutline, IoHelpCircleOutline, IoTrashOutline } from 'react-icons/io5'
const Settings = () => {
  const [isImageUploadedState, setIsImageUploadedState] = useState(false)
  useEffect(() => {
    keys().then((result) => (result.length == 0 ? setIsImageUploadedState(false) : setIsImageUploadedState(true)))
  }, [])
  const {
    collectionName,
    collectionDescription,
    collectionSize,
    nameOfEachNFT,
    exportFormat,
    blockchain,
    artwork,
    artworkArray,
    blobUrlTest,
    setCollectionName,
    setCollectionDescription,
    setCollectionSize,
    setNameOfEachNFT,
    setExportFormat,
    setBlockchain,
    setArtwork,
    setArtworkArray,
    setBlobUrlTest
  } = SettingValuesStore()

  const onChangeCollectionName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCollectionName(event.target.value)
  }
  const onChangeCollectionDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCollectionDescription(event.target.value)
  }
  const onChangeCollectionSize = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCollectionSize(parseFloat(event.target.value))
  }
  const onChangeNameOfEachNFT = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNameOfEachNFT(event.target.value)
  }
  const onChangeExportFormat = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setExportFormat(event.target.value)
  }
  const onChangeBlockchain = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setBlockchain(event.target.value)
  }
  const onClickReset = () => {
    clear()
    window.location.replace('/generate')
  }

  function fileCheck(fileName: string): boolean {
    if (
      fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length).search('png') == -1 &&
      fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length).search('webp') == -1
    ) {
      console.log(fileName + ' : format error')
      return true
    }
    return false
  }

  type fileInfo = {
    id: any
    lastModified: any
    name: any
    size: any
    type: any
    layerName: any
  }

  const onChangeArtwork = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setArtwork(event.target.files)
      // console.log(event.target.files.toString())
      const files: (File | null)[] = new Array<File>()
      const filesInfos: fileInfo[] = new Array<fileInfo>()
      clear()
      for (let i = 0; i < event.target.files?.length; i++) {
        if (fileCheck(event.target.files?.item(i)?.name!)) {
          continue
        }
        files[i] = event.target.files.item(i)
        console.log(files[i])
        var currentKeys: IDBValidKey[] = []
        keys().then((result) => (currentKeys = result))
        var randomKey = Math.random().toString(36).substring(2, 11)
        while (currentKeys.includes(randomKey)) {
          randomKey = Math.random().toString(36).substring(2, 11)
        }
        set(randomKey, files[i])
        var tempLayerNameLastSlashIndex = files[i]?.webkitRelativePath.lastIndexOf('/')
        var tempLayerName = files[i]?.webkitRelativePath.slice(0, tempLayerNameLastSlashIndex)
        var layerName = tempLayerName?.slice(tempLayerName.lastIndexOf('/') + 1, tempLayerName.length)
        // console.log(tempLayerName)
        // console.log(layerName)
        var testObj: fileInfo = {
          id: randomKey,
          lastModified: files[i]?.lastModified,
          name: files[i]?.name,
          size: files[i]?.size,
          type: files[i]?.type,
          layerName: layerName
        }
        filesInfos.push(testObj)
      }
      var jsonData = JSON.stringify(filesInfos)
      console.log(jsonData)
      set('fileInfo', jsonData)
      setArtworkArray(files)
    }
    keys().then((result) => (result.length == 0 ? setIsImageUploadedState(false) : setIsImageUploadedState(true)))
  }

  const onClickTest = async (event: React.MouseEvent<HTMLElement>) => {
    var currentKeys: IDBValidKey[] = []
    var selectedKey
    await keys().then((result) => {
      currentKeys = result
      console.log(currentKeys)
    })
    selectedKey = currentKeys.at(Math.floor(Math.random() * currentKeys.length) + 1)!
    console.log(selectedKey)
    get(selectedKey).then((result) => {
      var blobImage = new Blob([result], { type: 'image/png' })
      // var test = window.URL.createObjectURL(blobImage)
      // setPreviewImage(window.URL.createObjectURL(blobImage))
      setBlobUrlTest(window.URL.createObjectURL(blobImage))
    })
  }

  // const onSubmit = () => {
  //   const formData = new FormData()
  //   formData.append('file', artwork.items(0))
  //   const value = [
  //     {
  //       value1: 'test1',
  //       value2: 'test2'
  //     }
  //   ]
  //   formData.append('fileInfo', value)
  //   const blob = new Blob([JSON.stringify()], { type: 'application/json' })
  //   formData.append('data', blob)
  //   await axios({
  //     method: 'POST',
  //     url: 'http://test.api',
  //     mode: 'cors',
  //     headers: {
  //       'Content-Type': 'multipart/form-data'
  //     },
  //     data: formData
  //   })
  // }
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-4 gap-2 overflow-hidden px-3 py-12 sm:px-6 md:grid-cols-8 xl:gap-20">
        <div className="col-span-4">
          <div className="group">
            <div className="">
              <form className="space-y-6" action="#" method="POST">
                <div className="">
                  <div className="">
                    <label
                      htmlFor="Collection Name"
                      className="block text-base font-medium dark:font-normal dark:text-white">
                      Collection Name
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      id="Collection Name"
                      name="Collection Name"
                      type="text"
                      className="group flex h-auto w-full flex-none items-center justify-start rounded-lg border-none px-3 py-2.5 text-sm outline-none ring-1 ring-slate-200 hover:ring-slate-300 disabled:cursor-not-allowed disabled:opacity-70 hover:disabled:ring-slate-200 dark:bg-slate-700/40 dark:ring-inset dark:ring-slate-500 dark:ring-white/5 dark:disabled:bg-slate-500/50 dark:hover:disabled:ring-slate-500"
                      value={collectionName}
                      onChange={onChangeCollectionName}
                    />
                  </div>
                </div>
                <div className="">
                  <div className="">
                    <label
                      htmlFor="Collection Description"
                      className="block text-base font-medium dark:font-normal dark:text-white">
                      Collection Description
                    </label>
                    <p className="text-sm text-slate-700 dark:text-slate-400">
                      The description will appear in the NFT metadata
                    </p>
                  </div>
                  <div className="mt-1">
                    <input
                      id="Collection Description"
                      name="Collection Description"
                      type="text"
                      className="group flex h-auto w-full flex-none items-center justify-start rounded-lg border-none px-3 py-2.5 text-sm outline-none ring-1 ring-slate-200 hover:ring-slate-300 disabled:cursor-not-allowed disabled:opacity-70 hover:disabled:ring-slate-200 dark:bg-slate-700/40 dark:ring-inset dark:ring-slate-500 dark:ring-white/5 dark:disabled:bg-slate-500/50 dark:hover:disabled:ring-slate-500"
                      value={collectionDescription}
                      onChange={onChangeCollectionDescription}
                    />
                  </div>
                </div>
                <div className="">
                  <div className="">
                    <label
                      htmlFor="Collection Size"
                      className="block text-base font-medium dark:font-normal dark:text-white">
                      Collection Size
                    </label>
                    <p className="text-sm text-slate-700 dark:text-slate-400">Number of NFTs to generate</p>
                  </div>
                  <div className="mt-1">
                    <input
                      id="Collection Size"
                      name="Collection Size"
                      type="number"
                      className="group flex h-auto w-full flex-none items-center justify-start rounded-lg border-none px-3 py-2.5 text-sm outline-none ring-1 ring-slate-200 hover:ring-slate-300 disabled:cursor-not-allowed disabled:opacity-70 hover:disabled:ring-slate-200 dark:bg-slate-700/40 dark:ring-inset dark:ring-slate-500 dark:ring-white/5 dark:disabled:bg-slate-500/50 dark:hover:disabled:ring-slate-500"
                      value={collectionSize}
                      onChange={onChangeCollectionSize}
                    />
                  </div>
                </div>
                <div className="">
                  <div className="">
                    <label
                      htmlFor="Name of each NFT"
                      className="block text-base font-medium dark:font-normal dark:text-white">
                      Name of each NFT
                    </label>
                    <p className="text-sm text-slate-700 dark:text-slate-400">Preview: "#1"</p>
                  </div>
                  <div className="mt-1">
                    <input
                      id="Name of each NFT"
                      name="Name of each NFT"
                      type="text"
                      className="group flex h-auto w-full flex-none items-center justify-start rounded-lg border-none px-3 py-2.5 text-sm outline-none ring-1 ring-slate-200 hover:ring-slate-300 disabled:cursor-not-allowed disabled:opacity-70 hover:disabled:ring-slate-200 dark:bg-slate-700/40 dark:ring-inset dark:ring-slate-500 dark:ring-white/5 dark:disabled:bg-slate-500/50 dark:hover:disabled:ring-slate-500"
                      value={nameOfEachNFT}
                      onChange={onChangeNameOfEachNFT}
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <label htmlFor="format" className="block text-base font-medium dark:font-normal dark:text-white">
                      Export Format
                    </label>
                    <p className="mt-1 text-sm text-slate-700 dark:text-slate-400">
                      Recommended format: webp (best quality &amp; size)
                    </p>
                  </div>
                  <div className="mt-1">
                    <select
                      value={exportFormat}
                      onChange={onChangeExportFormat}
                      id="format"
                      name="format"
                      className="group flex h-auto w-full flex-none items-center justify-start rounded-lg border-none px-3 py-2.5 text-sm outline-none ring-1 ring-slate-200 hover:ring-slate-300 disabled:cursor-not-allowed disabled:opacity-70 hover:disabled:ring-slate-200 dark:bg-slate-700/40 dark:ring-inset dark:ring-slate-500 dark:ring-white/5 dark:disabled:bg-slate-500/50 dark:hover:disabled:ring-slate-500">
                      <option value="webp">webp</option>
                      <option value="png">png</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-1">
                  <div>
                    <label htmlFor="format" className="block text-base font-medium dark:font-normal dark:text-white">
                      Blockchain
                    </label>
                    <p className="mt-1 text-sm text-slate-700 dark:text-slate-400">
                      Choose the blockchain you will be using to generate the corresponding compatible metadata
                    </p>
                  </div>
                  <div className="space-y-6">
                    <select
                      id="format"
                      name="format"
                      value={blockchain}
                      onChange={onChangeBlockchain}
                      className="group flex h-auto w-full flex-none items-center justify-start rounded-lg border-none px-3 py-2.5 text-sm outline-none ring-1 ring-slate-200 hover:ring-slate-300 disabled:cursor-not-allowed disabled:opacity-70 hover:disabled:ring-slate-200 dark:bg-slate-700/40 dark:ring-inset dark:ring-slate-500 dark:ring-white/5 dark:disabled:bg-slate-500/50 dark:hover:disabled:ring-slate-500">
                      <option value="1">Ethereum, Polygon &amp; other EVM chains</option>
                      <option value="77771">Solana</option>
                      <option value="77773">MultiversX</option>
                      <option value="77777">Cardano</option>
                      <option value="77779">XRP</option>
                    </select>
                  </div>
                </div>
                <div className={isImageUploadedState ? 'hidden' : ''}>
                  <label className="block text-base font-medium dark:font-normal dark:text-white">
                    Artwork (Optional)
                  </label>
                  <p className="mb-2 mt-1 text-sm text-slate-700 dark:text-slate-400">
                    Drag and Drop your assets folder into the box below. We will automatically generate your layers
                    htmlFor you to setup on the next step.
                  </p>
                  <div id="directory-drop" role="presentation">
                    <div className="cursor-pointer rounded border border-dashed border-slate-500 p-3 text-center hover:border-solid">
                      <input
                        accept="image/*,.png,.webp"
                        type="file"
                        className="hidden"
                        id="artwork-input"
                        onChange={onChangeArtwork}
                        ref={(node) => {
                          if (node) {
                            ;['webkitdirectory', 'directory', 'mozdirectory'].forEach((attr) => {
                              node.setAttribute(attr, '')
                            })
                          }
                        }}
                      />
                      <label htmlFor="artwork-input">
                        <div className="">
                          <div className="flex flex-col items-center justify-center rounded-md">
                            <IoFolderOpenOutline
                              role="img"
                              className="md icon-large hydrated"
                              aria-label="folder open outline"
                            />
                          </div>
                          <div className="flex items-start justify-center gap-1 text-sm">
                            <span className="">Drop your assets </span>
                            <div className="jsx-cb040b4b4d36d2c9">
                              <span
                                data-tooltip="Drop your folder containing all the layers and images."
                                className="jsx-cb040b4b4d36d2c9 has-tooltip-arrow has-tooltip-undefined has-tooltip-undefined has-tooltip-multiline">
                                <IoHelpCircleOutline
                                  role="img"
                                  className="md hydrated"
                                  aria-label="help circle outline"
                                />
                              </span>
                            </div>
                          </div>
                          <i className="mt-0 text-sm">We'll import everything htmlFor you</i>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
                <div className={isImageUploadedState ? '' : 'hidden'}>
                  <div>
                    <label className="block text-base font-medium dark:font-normal dark:text-white">Dimensions</label>
                    <p className="mt-1 text-sm text-slate-700 dark:text-slate-400">
                      Optional: Dimensions of your assets (images, gifs, videos) in px. Dimensions are calculated
                      automically once your assets are imported.
                    </p>
                  </div>
                  <div className="mt-1 flex gap-3">
                    <div className="">
                      <div className="mt-1">
                        <input
                          type="number"
                          className="group flex h-auto w-full flex-none items-center justify-start rounded-lg border-none px-3 py-2.5 text-sm outline-none ring-1 ring-slate-200 hover:ring-slate-300 disabled:cursor-not-allowed disabled:opacity-70 hover:disabled:ring-slate-200 dark:bg-slate-700/40 dark:ring-inset dark:ring-slate-500 dark:ring-white/5 dark:disabled:bg-slate-500/50 dark:hover:disabled:ring-slate-500"
                          // value="279"
                        />
                      </div>
                    </div>
                    <div className="">
                      <div className="mt-1">
                        <input
                          type="number"
                          className="group flex h-auto w-full flex-none items-center justify-start rounded-lg border-none px-3 py-2.5 text-sm outline-none ring-1 ring-slate-200 hover:ring-slate-300 disabled:cursor-not-allowed disabled:opacity-70 hover:disabled:ring-slate-200 dark:bg-slate-700/40 dark:ring-inset dark:ring-slate-500 dark:ring-white/5 dark:disabled:bg-slate-500/50 dark:hover:disabled:ring-slate-500"
                          // value="221"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    type="button"
                    className="hover:bg-brand-500 focus:ring-brand-500 flex w-full justify-center rounded-md border border-transparent bg-[#1c5fe5] px-4 py-2 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2">
                    Continue
                  </button>
                </div>
              </form>
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="dark:bg-brand-900 bg-gray-100 px-2 text-gray-500 transition-colors duration-200 ease-in-out dark:text-white">
                      Or
                    </span>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div>
                    <button
                      className="flex w-full items-center justify-center gap-2 rounded-md bg-slate-700 bg-opacity-10 px-4 py-2 text-center text-sm font-medium text-gray-600 shadow-sm hover:bg-opacity-20 hover:text-red-400 focus:outline-none dark:bg-opacity-20 dark:text-white dark:hover:bg-opacity-30 dark:hover:text-red-400"
                      onClick={() => onClickReset()}>
                      <span className="inline-flex items-center">
                        <IoTrashOutline role="img" className="md hydrated" aria-label="trash outline" />
                      </span>
                      <span>Reset collection</span>
                    </button>
                  </div>
                  <div>
                    <a
                      className="flex w-full items-center justify-center gap-2 rounded-md bg-slate-700 bg-opacity-10 px-4 py-2 text-center text-sm font-medium text-gray-600 shadow-sm hover:bg-opacity-20 focus:outline-none dark:bg-opacity-20 dark:text-white dark:hover:bg-opacity-30"
                      href="/generate">
                      <span className="inline-flex items-center">
                        <IoAddOutline role="img" className="md hydrated" aria-label="add outline" />
                      </span>
                      <span>Start a new collection</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-4 mb-10 hidden md:block xl:mb-0">
          <div className="h-auto rounded-2xl bg-slate-700 bg-opacity-[15%] px-10 py-8 text-left text-gray-600 shadow-lg dark:bg-[#191a26] dark:bg-opacity-100 dark:text-white">
            <h2 className="font-display mt-2 text-xl font-bold tracking-tight">Collection Settings</h2>
            <div className="my-2 text-gray-600 dark:text-slate-200">
              Welcome to the NFT Art Generator. The most powerful no-code NFT tool trusted by the world’s largest NFT
              creators.
            </div>
            <img src={blobUrlTest ?? 'images/test.png'} className="my-6 h-48 w-96 rounded-lg" />
            <button type="button" onClick={onClickTest}>
              test
            </button>
            <div className="mt-8 text-gray-600 dark:text-slate-200">
              <strong className="mt-2 text-xl font-extrabold tracking-tight text-gray-600 dark:text-slate-50 ">
                Setup your NFT Collection
              </strong>
              <p className="mt-2 max-w-3xl space-y-6 ">
                Select the desired Blockchain, give your collection a name, a description, and set up the size of the
                final art pieces. Once you are ready, click the "Save &amp; Continue" button to proceed to the next
                step.
              </p>
            </div>
            <div className="mt-8 text-gray-600 dark:text-slate-200">
              <strong className="mt-2 text-xl font-extrabold tracking-tight text-gray-600 dark:text-slate-50 ">
                Import your art into the tool.
              </strong>
              <p className="mt-2 max-w-3xl space-y-6 ">
                You can import a single image or a folder of images. The tool will automatically generate the
                corresponding metadata htmlFor each image.
              </p>
            </div>
            <div className="mt-8 text-gray-600 dark:text-slate-200">
              <strong className="mt-2 text-xl font-extrabold tracking-tight text-gray-600 dark:text-slate-50 ">
                Preview and Generate your collection.
              </strong>
              <p className="mt-2 max-w-3xl space-y-6 ">
                Once the metadata is generated the NFTs and download the metadata file. You can also upload the metadata
                file to IPFS to generate the NFTs.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute transform sm:top-6 sm:translate-x-0">
              <div className="ml-24 flex min-w-max space-x-6 sm:ml-3 lg:space-x-8">
                <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                  <div className="flex-shrink-0">
                    <img
                      className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                      src="https://ik.imagekit.io/llh50zxqb/images/projects/Scremlins.png?tr=w-288,h-288,c-maintain_ratio,f-auto"
                      alt=""
                    />
                  </div>
                  <div className="mt-6 flex-shrink-0 sm:mt-0">
                    <img
                      className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                      src="https://ik.imagekit.io/llh50zxqb/images/projects/ElephrensNFT.jpeg?tr=w-288,h-288,c-maintain_ratio,f-auto"
                      alt=""
                    />
                  </div>
                </div>
                <div className="mt-20 flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                  <div className="flex-shrink-0" />
                  <img
                    loading="lazy"
                    className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                    src="https://ik.imagekit.io/llh50zxqb/images/projects/thepopulars.jpeg?tr=w-288,h-288,c-maintain_ratio,f-auto"
                    alt=""
                  />
                </div>
                <div className="mt-6 flex-shrink-0 sm:mt-0" />
                <img
                  className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                  src="https://ik.imagekit.io/llh50zxqb/images/projects/elftown.jpeg?tr=w-288,h-288,c-maintain_ratio,f-auto"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Settings
