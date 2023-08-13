'use client'
import { IonIcon } from '@ionic/react'
import {
  checkmarkCircleOutline,
  checkmarkOutline,
  chevronBackCircleOutline,
  chevronForwardCircleOutline,
  closeOutline
} from 'ionicons/icons'

export default function Home() {
  return (
    <main>
      <div className="bg-slate-900">
        <div className="pt-12 sm:pt-16 lg:pt-20">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 2xl:px-0">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl sm:leading-none lg:text-5xl">
                Collection Generation
              </h2>
              <p className="max-w-full text-xl text-gray-500">
                No commitment. Generate and download your art and metadata.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 bg-slate-900 pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 "></div>
            <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 2xl:px-0">
              <div className="mx-auto grid max-w-lg grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-50 shadow-lg lg:max-w-none lg:grid-cols-12 lg:divide-x lg:divide-y-0">
                <div className="space-y-6 px-6 py-8 text-center md:px-16 lg:col-span-5 lg:flex lg:flex-shrink-0 lg:flex-col lg:justify-center lg:px-24 lg:py-12">
                  <p className="text-lg font-medium leading-6 text-gray-900">Pay per collection generated</p>
                  <div className="flex justify-between">
                    <div>
                      <button>
                        <IonIcon
                          size="large"
                          icon={chevronBackCircleOutline}
                          role="img"
                          className="md icon-large hydrated"
                          aria-label="chevron back circle outline"></IonIcon>
                      </button>
                    </div>
                    <div>
                      <span className="hidden">
                        <span>100</span>
                        <br />
                        <i className="text-xs">tokens generated</i>
                      </span>
                      <span className="">
                        <span>1,000</span>
                        <br />
                        <i className="text-xs">tokens generated</i>
                      </span>
                      <span className="hidden">
                        <span>5,000</span>
                        <br />
                        <i className="text-xs">tokens generated</i>
                      </span>
                      <span className="hidden">
                        <span>10,000</span>
                        <br />
                        <i className="text-xs">tokens generated</i>
                      </span>
                      <span className="hidden">
                        <span>15,000</span>
                        <br />
                        <i className="text-xs">tokens generated</i>
                      </span>
                      <span className="hidden">
                        <span>20,000</span>
                        <br />
                        <i className="text-xs">tokens generated</i>
                      </span>
                      <span className="hidden">
                        <span>50,000</span>
                        <br />
                        <i className="text-xs">tokens generated</i>
                      </span>
                      <span className="hidden">
                        <span>100,000</span>
                        <br />
                        <i className="text-xs">tokens generated</i>
                      </span>
                      <span className="hidden">
                        <span>150,000</span>
                        <br />
                        <i className="text-xs">tokens generated</i>
                      </span>
                    </div>
                    <div>
                      <button>
                        <IonIcon
                          size="large"
                          icon={chevronForwardCircleOutline}
                          role="img"
                          className="md icon-large hydrated"
                          aria-label="chevron forward circle outline"></IonIcon>
                      </button>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-center text-5xl font-bold tracking-tight text-gray-900">
                    <span>199</span>
                    <span className="ml-3 text-xl font-medium tracking-normal text-gray-500">USD</span>
                  </div>
                  <p className="text-sm">
                    <span className="font-medium text-gray-500 underline">Pay only when your collection is ready</span>
                  </p>
                  <div className="rounded-md shadow">
                    <a
                      href="/app"
                      className="flex items-center justify-center rounded-md border border-transparent bg-blue-500 px-5 py-3 text-base font-medium text-white hover:bg-slate-500 hover:text-white">
                      Create Now
                    </a>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-center space-y-5 px-6 py-8 lg:col-span-7 lg:px-28 lg:py-12">
                  <h4 className="w-full flex-shrink-0 pr-4 text-base font-semibold text-sky-500">Whatʼs included</h4>
                  <ul role="list" className="w-full space-y-4">
                    <li className="flex items-start lg:col-span-1">
                      <div className="flex-shrink-0">
                        <div className="h-5 w-5 text-sky-500">
                          <IonIcon
                            icon={checkmarkCircleOutline}
                            role="img"
                            className="md hydrated"
                            aria-label="checkmark circle outline"></IonIcon>
                        </div>
                      </div>
                      <p className="ml-3 text-sm text-gray-700">Animated collection (PNG, Gif, mp4 support)</p>
                    </li>
                    <li className="flex items-start lg:col-span-1">
                      <div className="flex-shrink-0">
                        <div className="h-5 w-5 text-sky-500">
                          <IonIcon
                            icon={checkmarkCircleOutline}
                            role="img"
                            className="md hydrated"
                            aria-label="checkmark circle outline"></IonIcon>
                        </div>
                      </div>
                      <p className="ml-3 text-sm text-gray-700">Rules maker to block incompatible traits</p>
                    </li>
                    <li className="flex items-start lg:col-span-1">
                      <div className="flex-shrink-0">
                        <div className="h-5 w-5 text-sky-500">
                          <IonIcon
                            icon={checkmarkCircleOutline}
                            role="img"
                            className="md hydrated"
                            aria-label="checkmark circle outline"></IonIcon>
                        </div>
                      </div>
                      <p className="ml-3 text-sm text-gray-700">Multi-Character support (Advanced Mode)</p>
                    </li>
                    <li className="flex items-start lg:col-span-1">
                      <div className="flex-shrink-0">
                        <div className="h-5 w-5 text-sky-500">
                          <IonIcon
                            icon={checkmarkCircleOutline}
                            role="img"
                            className="md hydrated"
                            aria-label="checkmark circle outline"></IonIcon>
                        </div>
                      </div>
                      <p className="ml-3 text-sm text-gray-700">Instant Previews</p>
                    </li>
                    <li className="flex items-start lg:col-span-1">
                      <div className="flex-shrink-0">
                        <div className="h-5 w-5 text-gray-500">
                          <IonIcon
                            icon={checkmarkCircleOutline}
                            role="img"
                            className="md hydrated"
                            aria-label="checkmark circle outline"></IonIcon>
                        </div>
                      </div>
                      <p className="ml-3 text-sm text-gray-700">Saved in browser cache</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="passes" className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-8 2xl:px-0">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl sm:leading-none lg:text-5xl">
              Project Builder
            </h2>
            <p className="max-w-full text-xl text-gray-500">
              Get all the features you will need to launch your NFT project using One Mint's launchpad
            </p>
          </div>
          <div className="mt-16 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
            <div className="relative flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="flex-1">
                <h3 className="text-3xl font-semibold text-gray-900">Bronze Pass</h3>
                <div className="mb-6 mt-4 space-y-6">
                  <p className="flex items-baseline text-gray-900">
                    <span className="ml-1 text-xl font-semibold"></span>
                  </p>
                  <p className="text-lg font-bold text-gray-800">Generation + Contract</p>
                  <div className="!mt-1 flex items-center gap-2"></div>
                </div>
                <h3 className="text-md font-medium text-gray-900">Generation Features:</h3>
                <div className="my-4 flex items-center justify-between gap-3">
                  <p>Collection Size:</p>
                  <div className="flex items-center gap-1 rounded-md border border-gray-100 px-4 py-1 shadow-md">
                    <input
                      type="number"
                      value="10000"
                      className="max-w-[100px] border-none py-1 text-gray-400 focus:border-none focus:text-gray-700 focus:outline-none focus:ring-0"
                      min="0"
                      max="150000"
                      step="100"
                    />
                    <span className="text-gray-700">NFTs</span>
                  </div>
                </div>
                <ul role="list" className="my-3 space-y-3">
                  <li className="flex">
                    <div className="h-6 w-6 flex-shrink-0 text-sky-500">
                      <IonIcon
                        icon={checkmarkCircleOutline}
                        role="img"
                        className="md hydrated"
                        aria-label="checkmark circle outline"></IonIcon>
                    </div>
                    <span className="ml-3 text-gray-500">Save in Cloud</span>
                  </li>
                  <li className="flex">
                    <div className="h-6 w-6 flex-shrink-0 text-sky-500">
                      <IonIcon
                        icon={checkmarkCircleOutline}
                        role="img"
                        className="md hydrated"
                        aria-label="checkmark circle outline"></IonIcon>
                    </div>
                    <span className="ml-3 text-gray-500">Real-time viewers</span>
                  </li>
                  <li className="flex">
                    <div className="h-6 w-6 flex-shrink-0 text-sky-500">
                      <IonIcon
                        icon={checkmarkCircleOutline}
                        role="img"
                        className="md hydrated"
                        aria-label="checkmark circle outline"></IonIcon>
                    </div>
                    <span className="ml-3 text-gray-500">Cloud rendering for GIF and MP4</span>
                  </li>
                  <li className="flex">
                    <div className="h-6 w-6 flex-shrink-0 text-sky-500">
                      <IonIcon
                        icon={checkmarkCircleOutline}
                        role="img"
                        className="md hydrated"
                        aria-label="checkmark circle outline"></IonIcon>
                    </div>
                    <span className="ml-3 text-gray-500">Multi-Character Support</span>
                  </li>
                  <li className="flex">
                    <div className="h-6 w-6 flex-shrink-0 text-sky-500">
                      <IonIcon
                        icon={checkmarkCircleOutline}
                        role="img"
                        className="md hydrated"
                        aria-label="checkmark circle outline"></IonIcon>
                    </div>
                    <span className="ml-3 text-gray-500">Block incompatible traits</span>
                  </li>
                </ul>
                <h3 className="text-md my-8 font-medium text-gray-900">Contract Features</h3>
                <ul role="list" className="my-3 space-y-3">
                  <li className="flex">
                    <div className="h-6 w-6 flex-shrink-0 text-sky-500">
                      <IonIcon
                        icon={checkmarkCircleOutline}
                        role="img"
                        className="md hydrated"
                        aria-label="checkmark circle outline"></IonIcon>
                    </div>
                    <span className="ml-3 text-gray-500">Contract Deployment</span>
                  </li>
                  <li className="flex">
                    <div className="h-6 w-6 flex-shrink-0 text-sky-500">
                      <IonIcon
                        icon={checkmarkCircleOutline}
                        role="img"
                        className="md hydrated"
                        aria-label="checkmark circle outline"></IonIcon>
                    </div>
                    <span className="ml-3 text-gray-500">Free mint</span>
                  </li>
                  <li className="flex">
                    <div className="h-6 w-6 flex-shrink-0 text-sky-500">
                      <IonIcon
                        icon={checkmarkCircleOutline}
                        role="img"
                        className="md hydrated"
                        aria-label="checkmark circle outline"></IonIcon>
                    </div>
                    <span className="ml-3 text-gray-500">Mint custom domain</span>
                  </li>
                  <li className="flex">
                    <div className="h-6 w-6 flex-shrink-0 text-sky-500">
                      <IonIcon
                        icon={checkmarkCircleOutline}
                        role="img"
                        className="md hydrated"
                        aria-label="checkmark circle outline"></IonIcon>
                    </div>
                    <span className="ml-3 text-gray-500">Free IPFS upload (up to 24 GB)</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 w-full text-center">
                <p className="ml-8 text-left text-xl">Price:</p>
                <span className="text-4xl font-bold tracking-tight ">
                  $799
                  <span className="text-xl text-gray-400">USD</span>
                </span>
                <p className="text-sm text-gray-400">*Concierge Service Not Included</p>
              </div>
              <button
                type="button"
                className="mt-2 flex w-full items-center justify-center rounded-md border border-transparent bg-blue-500 px-6 py-3 text-center font-medium text-white hover:bg-blue-400 hover:text-white">
                Connect
              </button>
            </div>
            <div className="relative flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="flex-1">
                <h3 className="text-3xl font-semibold text-gray-900">Silver Pass</h3>
                <div className="mb-6 mt-4 space-y-6">
                  <p className="flex items-baseline text-gray-900">
                    <span className="ml-1 text-xl font-semibold"></span>
                  </p>
                  <p className="text-lg font-bold text-gray-800">Bronze Pass + Dynamic NFTs</p>
                  <div className="!mt-1 flex items-center gap-2"></div>
                </div>
                <h3 className="text-md font-medium text-gray-900">Generation Features:</h3>
                <div className="my-4 flex items-center justify-between gap-3">
                  <p>Collection Size:</p>
                  <div className="flex items-center gap-1 rounded-md border border-gray-100 px-4 py-1 shadow-md">
                    <input
                      type="number"
                      value="10000"
                      className="max-w-[100px] border-none py-1 text-gray-400 focus:border-none focus:text-gray-700 focus:outline-none focus:ring-0"
                      min="0"
                      max="150000"
                      step="100"
                    />
                    <span className="text-gray-700">NFTs</span>
                  </div>
                </div>
                <ul role="list" className="my-3 space-y-3">
                  <li className="flex">
                    <div className="h-6 w-6 flex-shrink-0 text-sky-500">
                      <IonIcon
                        icon={checkmarkCircleOutline}
                        role="img"
                        className="md hydrated"
                        aria-label="checkmark circle outline"></IonIcon>
                    </div>
                    <span className="ml-3 text-gray-500">Save in Cloud</span>
                  </li>
                  <li className="flex">
                    <div className="h-6 w-6 flex-shrink-0 text-sky-500">
                      <IonIcon
                        icon={checkmarkCircleOutline}
                        role="img"
                        className="md hydrated"
                        aria-label="checkmark circle outline"></IonIcon>
                    </div>
                    <span className="ml-3 text-gray-500">Real-time viewers</span>
                  </li>
                  <li className="flex">
                    <div className="h-6 w-6 flex-shrink-0 text-sky-500">
                      <IonIcon
                        icon={checkmarkCircleOutline}
                        role="img"
                        className="md hydrated"
                        aria-label="checkmark circle outline"></IonIcon>
                    </div>
                    <span className="ml-3 text-gray-500">Cloud rendering for GIF and MP4</span>
                  </li>
                  <li className="flex">
                    <div className="h-6 w-6 flex-shrink-0 text-sky-500">
                      <IonIcon
                        icon={checkmarkCircleOutline}
                        role="img"
                        className="md hydrated"
                        aria-label="checkmark circle outline"></IonIcon>
                    </div>
                    <span className="ml-3 text-gray-500">Multi-Character Support</span>
                  </li>
                  <li className="flex">
                    <div className="h-6 w-6 flex-shrink-0 text-sky-500">
                      <IonIcon
                        icon={checkmarkCircleOutline}
                        role="img"
                        className="md hydrated"
                        aria-label="checkmark circle outline"></IonIcon>
                    </div>
                    <span className="ml-3 text-gray-500">Block incompatible traits</span>
                  </li>
                </ul>
                <h3 className="text-md my-8 font-medium text-gray-900">Contract Features</h3>
                <ul role="list" className="my-3 space-y-3">
                  <li className="flex">
                    <div className="h-6 w-6 flex-shrink-0 text-sky-500">
                      <IonIcon
                        icon={checkmarkCircleOutline}
                        role="img"
                        className="md hydrated"
                        aria-label="checkmark circle outline"></IonIcon>
                    </div>
                    <span className="ml-3 text-gray-500">Contract Deployment</span>
                  </li>
                  <li className="flex">
                    <div className="h-6 w-6 flex-shrink-0 text-sky-500">
                      <IonIcon
                        icon={checkmarkCircleOutline}
                        role="img"
                        className="md hydrated"
                        aria-label="checkmark circle outline"></IonIcon>
                    </div>
                    <span className="ml-3 text-gray-500">Free mint</span>
                  </li>
                  <li className="flex">
                    <div className="h-6 w-6 flex-shrink-0 text-sky-500">
                      <IonIcon
                        icon={checkmarkCircleOutline}
                        role="img"
                        className="md hydrated"
                        aria-label="checkmark circle outline"></IonIcon>
                    </div>
                    <span className="ml-3 text-gray-500">Mint custom domain</span>
                  </li>
                  <li className="flex">
                    <div className="h-6 w-6 flex-shrink-0 text-sky-500">
                      <IonIcon
                        icon={checkmarkCircleOutline}
                        role="img"
                        className="md hydrated"
                        aria-label="checkmark circle outline"></IonIcon>
                    </div>
                    <span className="ml-3 text-gray-500">Free IPFS upload (up to 24 GB)</span>
                  </li>
                </ul>
                <h3 className="text-md my-8 font-medium text-gray-900">Extra Features</h3>
                <ul role="list" className="my-3 space-y-3">
                  <li className="flex">
                    <div className="h-6 w-6 flex-shrink-0 text-sky-500">
                      <IonIcon
                        icon={checkmarkCircleOutline}
                        role="img"
                        className="md hydrated"
                        aria-label="checkmark circle outline"></IonIcon>
                    </div>
                    <span className="ml-3 text-gray-500">Dynamic NFT Marketplace</span>
                  </li>
                  <li className="flex">
                    <div className="h-6 w-6 flex-shrink-0 text-sky-500">
                      <IonIcon
                        icon={checkmarkCircleOutline}
                        role="img"
                        className="md hydrated"
                        aria-label="checkmark circle outline"></IonIcon>
                    </div>
                    <span className="ml-3 text-gray-500">Crossmint</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 w-full text-center">
                <p className="ml-8 text-left text-xl">Price:</p>
                <span className="text-4xl font-bold tracking-tight ">
                  $1999
                  <span className="text-xl text-gray-400">USD</span>
                </span>
                <p className="text-sm text-gray-400">*Concierge Service Not Included</p>
              </div>
              <button
                type="button"
                className="mt-2 flex w-full items-center justify-center rounded-md border border-transparent bg-blue-500 px-6 py-3 text-center font-medium text-white hover:bg-blue-400 hover:text-white">
                Connect
              </button>
            </div>
            <div className="relative flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="flex-1">
                <h3 className="text-3xl font-semibold text-gray-900">Gold Pass</h3>
                <p className="absolute top-0 -translate-y-1/2 transform rounded-full bg-blue-500 px-4 py-1.5 text-sm font-semibold text-white">
                  Most popular
                </p>
                <div className="mb-6 mt-4 space-y-6">
                  <p className="flex items-baseline text-gray-900">
                    <span className="ml-1 text-xl font-semibold"></span>
                  </p>
                  <p className="text-lg font-bold text-gray-800">Silver Pass + Staking</p>
                  <div className="!mt-1 flex items-center gap-2"></div>
                </div>
                <h3 className="text-md font-medium text-gray-900">Generation Features:</h3>
                <div className="my-4 flex items-center justify-between gap-3">
                  <p>Collection Size:</p>
                  <div className="flex items-center gap-1 rounded-md border border-gray-100 px-4 py-1 shadow-md">
                    <input
                      type="number"
                      value="10000"
                      className="max-w-[100px] border-none py-1 text-gray-400 focus:border-none focus:text-gray-700 focus:outline-none focus:ring-0"
                      min="0"
                      max="150000"
                      step="100"
                    />
                    <span className="text-gray-700">NFTs</span>
                  </div>
                </div>
                <ul role="list" className="my-3 space-y-3">
                  <li className="flex">
                    <div className="h-6 w-6 flex-shrink-0 text-sky-500">
                      <IonIcon
                        icon={checkmarkCircleOutline}
                        role="img"
                        className="md hydrated"
                        aria-label="checkmark circle outline"></IonIcon>
                    </div>
                    <span className="ml-3 text-gray-500">Save in Cloud</span>
                  </li>
                  <li className="flex">
                    <div className="h-6 w-6 flex-shrink-0 text-sky-500">
                      <IonIcon
                        icon={checkmarkCircleOutline}
                        role="img"
                        className="md hydrated"
                        aria-label="checkmark circle outline"></IonIcon>
                    </div>
                    <span className="ml-3 text-gray-500">Real-time viewers</span>
                  </li>
                  <li className="flex">
                    <div className="h-6 w-6 flex-shrink-0 text-sky-500">
                      <IonIcon
                        icon={checkmarkCircleOutline}
                        role="img"
                        className="md hydrated"
                        aria-label="checkmark circle outline"></IonIcon>
                    </div>
                    <span className="ml-3 text-gray-500">Cloud rendering for GIF and MP4</span>
                  </li>
                  <li className="flex">
                    <div className="h-6 w-6 flex-shrink-0 text-sky-500">
                      <IonIcon
                        icon={checkmarkCircleOutline}
                        role="img"
                        className="md hydrated"
                        aria-label="checkmark circle outline"></IonIcon>
                    </div>
                    <span className="ml-3 text-gray-500">Multi-Character Support</span>
                  </li>
                  <li className="flex">
                    <div className="h-6 w-6 flex-shrink-0 text-sky-500">
                      <IonIcon
                        icon={checkmarkCircleOutline}
                        role="img"
                        className="md hydrated"
                        aria-label="checkmark circle outline"></IonIcon>
                    </div>
                    <span className="ml-3 text-gray-500">Block incompatible traits</span>
                  </li>
                </ul>
                <h3 className="text-md my-8 font-medium text-gray-900">Contract Features</h3>
                <ul role="list" className="my-3 space-y-3">
                  <li className="flex">
                    <div className="h-6 w-6 flex-shrink-0 text-sky-500">
                      <IonIcon
                        icon={checkmarkCircleOutline}
                        role="img"
                        className="md hydrated"
                        aria-label="checkmark circle outline"></IonIcon>
                    </div>
                    <span className="ml-3 text-gray-500">Contract Deployment</span>
                  </li>
                  <li className="flex">
                    <div className="h-6 w-6 flex-shrink-0 text-sky-500">
                      <IonIcon
                        icon={checkmarkCircleOutline}
                        role="img"
                        className="md hydrated"
                        aria-label="checkmark circle outline"></IonIcon>
                    </div>
                    <span className="ml-3 text-gray-500">Free mint</span>
                  </li>
                  <li className="flex">
                    <div className="h-6 w-6 flex-shrink-0 text-sky-500">
                      <IonIcon
                        icon={checkmarkCircleOutline}
                        role="img"
                        className="md hydrated"
                        aria-label="checkmark circle outline"></IonIcon>
                    </div>
                    <span className="ml-3 text-gray-500">Mint custom domain</span>
                  </li>
                  <li className="flex">
                    <div className="h-6 w-6 flex-shrink-0 text-sky-500">
                      <IonIcon
                        icon={checkmarkCircleOutline}
                        role="img"
                        className="md hydrated"
                        aria-label="checkmark circle outline"></IonIcon>
                    </div>
                    <span className="ml-3 text-gray-500">Free IPFS upload (up to 24 GB)</span>
                  </li>
                </ul>
                <h3 className="text-md my-8 font-medium text-gray-900">Extra Features</h3>
                <ul role="list" className="my-3 space-y-3">
                  <li className="flex">
                    <div className="h-6 w-6 flex-shrink-0 text-sky-500">
                      <IonIcon
                        icon={checkmarkCircleOutline}
                        role="img"
                        className="md hydrated"
                        aria-label="checkmark circle outline"></IonIcon>
                    </div>
                    <span className="ml-3 text-gray-500">Staking Set-Up</span>
                  </li>
                  <li className="flex">
                    <div className="h-6 w-6 flex-shrink-0 text-sky-500">
                      <IonIcon
                        icon={checkmarkCircleOutline}
                        role="img"
                        className="md hydrated"
                        aria-label="checkmark circle outline"></IonIcon>
                    </div>
                    <span className="ml-3 text-gray-500">Lootboxes</span>
                  </li>
                  <li className="flex">
                    <div className="h-6 w-6 flex-shrink-0 text-sky-500">
                      <IonIcon
                        icon={checkmarkCircleOutline}
                        role="img"
                        className="md hydrated"
                        aria-label="checkmark circle outline"></IonIcon>
                    </div>
                    <span className="ml-3 text-gray-500">ERC-20 Token</span>
                  </li>
                  <li className="flex">
                    <div className="h-6 w-6 flex-shrink-0 text-sky-500">
                      <IonIcon
                        icon={checkmarkCircleOutline}
                        role="img"
                        className="md hydrated"
                        aria-label="checkmark circle outline"></IonIcon>
                    </div>
                    <span className="ml-3 text-gray-500">Rewards UI</span>
                  </li>
                </ul>
              </div>
              <div className="mt-6 w-full text-center">
                <p className="ml-8 text-left text-xl">Price:</p>
                <span className="text-4xl font-bold tracking-tight ">
                  $2799
                  <span className="text-xl text-gray-400">USD</span>
                </span>
                <p className="text-sm text-gray-400">*Concierge Service Not Included</p>
              </div>
              <button
                type="button"
                className="mt-2 flex w-full items-center justify-center rounded-md border border-transparent bg-blue-500 px-6 py-3 text-center font-medium text-white hover:bg-blue-400 hover:text-white">
                Connect
              </button>
            </div>
          </div>
          <p className="mt-4 block text-center text-sm text-white">
            By purchasing our passes, you agree to OneMintʼs
            <a href="/privacy" className="underline">
              {' '}
              Privacy Policy
            </a>{' '}
            and{' '}
            <a href="/terms" className="underline">
              Terms of Use
            </a>
            .
          </p>
        </div>

        <div className="mx-auto max-w-[1440px] px-4 py-6 sm:px-6 lg:px-8 2xl:px-0">
          <div className="flex flex-col items-center space-y-5 rounded-2xl bg-[#F8F8F8] px-8 py-10 text-center shadow">
            <h2 className="text-4xl font-bold">Concierge Agency Service</h2>
            <div className="space-y-2">
              <p className="mx-auto max-w-[840px]">Start your WEB3 journey alongside our team of experts.</p>
              <p className="mx-auto max-w-[840px]">Subscribe to our monthly concierge service.</p>
              <p className="mx-auto max-w-[840px]">
                We specialize on tailored solutions to take your business to the future using the latest technology.
              </p>
            </div>
            <a
              href="/agency"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-blue-500 px-8 py-4 font-semibold text-white hover:bg-blue-400 hover:text-white">
              Learn More
            </a>
          </div>
        </div>

        <div className="bg-white">
          <div className="mx-auto max-w-[1440px] rounded-2xl px-4 py-16 sm:px-6 lg:px-8 2xl:px-0">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:leading-none lg:text-5xl">
                Smart Contract
              </h2>
              <p className="max-w-full text-xl text-gray-500">
                Here you will find what features are supported with our ERC721 smart contracts.
              </p>
            </div>
            <div className="hiddenScrollbar w-full overflow-x-auto overflow-y-hidden">
              <table className="mt-8 min-w-full bg-white">
                <thead>
                  <tr className="bg-transparent">
                    <th className="px-6 py-3"></th>
                    <th className="px-6 py-3">
                      <div className="flex w-full justify-center">{/* image */}</div>
                    </th>
                    <th className="px-6 py-3">
                      <div className="flex w-full justify-center">{/* image */}</div>
                    </th>
                    <th className="px-6 py-3">
                      <div className="flex w-full justify-center">{/* image */}</div>
                    </th>
                    <th className="px-6 py-3">
                      <div className="flex w-full justify-center">{/* image */}</div>
                    </th>
                    <th className="px-6 py-3">
                      <div className="flex w-full justify-center">{/* image */}</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-center">
                    <td className="min-w-[150px] border-t-0 px-1 py-4 text-left">
                      <div>
                        <span>Airdrop</span>
                        <p className="text-sm text-gray-500">Batch airdrop to one or hundreds of wallets</p>
                      </div>
                    </td>
                    <td className="border-l border-t-0 border-gray-200">
                      <div className="w-130 text-brand-500 mx-auto text-[22px]">
                        <IonIcon
                          icon={checkmarkOutline}
                          role="img"
                          className="md hydrated"
                          aria-label="checkmark outline"></IonIcon>
                      </div>
                    </td>
                    <td className="border-l border-t-0 border-gray-200">
                      <div className="w-130 text-brand-500 mx-auto text-[22px]">
                        <IonIcon
                          icon={checkmarkOutline}
                          role="img"
                          className="md hydrated"
                          aria-label="checkmark outline"></IonIcon>
                      </div>
                    </td>
                    <td className="border-l border-t-0 border-gray-200">
                      <div className="w-130 text-brand-500 mx-auto text-[22px]">
                        <IonIcon
                          icon={checkmarkOutline}
                          role="img"
                          className="md hydrated"
                          aria-label="checkmark outline"></IonIcon>
                      </div>
                    </td>
                    <td className="border-l border-t-0 border-gray-200">
                      <div className="w-130 mx-auto text-[22px] text-gray-500">
                        <IonIcon
                          icon={closeOutline}
                          role="img"
                          className="md hydrated"
                          aria-label="close outline"></IonIcon>
                      </div>
                    </td>
                    <td className="border-l border-t-0 border-gray-200">
                      <div className="w-130 text-brand-500 mx-auto text-[22px]">
                        <IonIcon
                          icon={checkmarkOutline}
                          role="img"
                          className="md hydrated"
                          aria-label="checkmark outline"></IonIcon>
                      </div>
                    </td>
                  </tr>
                  <tr className="text-center">
                    <td className="min-w-[150px] border-t border-gray-200 px-1 py-4 text-left">
                      <div>
                        <span>Whitelist</span>
                        <p className="text-sm text-gray-500">Create a presale stage on your project</p>
                      </div>
                    </td>
                    <td className="border-l border-t border-gray-200">
                      <div className="w-130 text-brand-500 mx-auto text-[22px]">
                        <IonIcon
                          icon={checkmarkOutline}
                          role="img"
                          className="md hydrated"
                          aria-label="checkmark outline"></IonIcon>
                      </div>
                    </td>
                    <td className="border-l border-t border-gray-200">
                      <div className="w-130 text-brand-500 mx-auto text-[22px]">
                        <IonIcon
                          icon={checkmarkOutline}
                          role="img"
                          className="md hydrated"
                          aria-label="checkmark outline"></IonIcon>
                      </div>
                    </td>
                    <td className="border-l border-t border-gray-200">
                      <div className="w-130 text-brand-500 mx-auto text-[22px]">
                        <IonIcon
                          icon={checkmarkOutline}
                          role="img"
                          className="md hydrated"
                          aria-label="checkmark outline"></IonIcon>
                      </div>
                    </td>
                    <td className="border-l border-t border-gray-200">
                      <div className="w-130 text-brand-500 mx-auto text-[22px]">
                        <IonIcon
                          icon={checkmarkOutline}
                          role="img"
                          className="md hydrated"
                          aria-label="checkmark outline"></IonIcon>
                      </div>
                    </td>
                    <td className="border-l border-t border-gray-200">
                      <div className="w-130 text-brand-500 mx-auto text-[22px]">
                        <IonIcon
                          icon={checkmarkOutline}
                          role="img"
                          className="md hydrated"
                          aria-label="checkmark outline"></IonIcon>
                      </div>
                    </td>
                  </tr>
                  <tr className="text-center">
                    <td className="min-w-[150px] border-t border-gray-200 px-1 py-4 text-left">
                      <div>
                        <span>Delayed Reveal</span>
                        <p className="text-sm text-gray-500">Reveal your collection after the mint</p>
                      </div>
                    </td>
                    <td className="border-l border-t border-gray-200">
                      <div className="w-130 text-brand-500 mx-auto text-[22px]">
                        <IonIcon
                          icon={checkmarkOutline}
                          role="img"
                          className="md hydrated"
                          aria-label="checkmark outline"></IonIcon>
                      </div>
                    </td>
                    <td className="border-l border-t border-gray-200">
                      <div className="w-130 text-brand-500 mx-auto text-[22px]">
                        <IonIcon
                          icon={checkmarkOutline}
                          role="img"
                          className="md hydrated"
                          aria-label="checkmark outline"></IonIcon>
                      </div>
                    </td>
                    <td className="border-l border-t border-gray-200">
                      <div className="w-130 text-brand-500 mx-auto text-[22px]">
                        <IonIcon
                          icon={checkmarkOutline}
                          role="img"
                          className="md hydrated"
                          aria-label="checkmark outline"></IonIcon>
                      </div>
                    </td>
                    <td className="border-l border-t border-gray-200">
                      <div className="w-130 mx-auto text-[22px] text-gray-500">
                        <IonIcon
                          icon={closeOutline}
                          role="img"
                          className="md hydrated"
                          aria-label="close outline"></IonIcon>
                      </div>
                    </td>
                    <td className="border-l border-t border-gray-200">
                      <div className="w-130 mx-auto text-[22px] text-gray-500">
                        <IonIcon
                          icon={closeOutline}
                          role="img"
                          className="md hydrated"
                          aria-label="close outline"></IonIcon>
                      </div>
                    </td>
                  </tr>
                  <tr className="text-center">
                    <td className="min-w-[150px] border-t border-gray-200 px-1 py-4 text-left">
                      <div>
                        <span>Threshold Mint</span>
                        <p className="text-sm text-gray-500">Automatically pause mint after X NFTs are minted</p>
                      </div>
                    </td>
                    <td className="border-l border-t border-gray-200">
                      <div className="w-130 text-brand-500 mx-auto text-[22px]">
                        <IonIcon
                          icon={checkmarkOutline}
                          role="img"
                          className="md hydrated"
                          aria-label="checkmark outline"></IonIcon>
                      </div>
                    </td>
                    <td className="border-l border-t border-gray-200">
                      <div className="w-130 text-brand-500 mx-auto text-[22px]">
                        <IonIcon
                          icon={checkmarkOutline}
                          role="img"
                          className="md hydrated"
                          aria-label="checkmark outline"></IonIcon>
                      </div>
                    </td>
                    <td className="border-l border-t border-gray-200">
                      <div className="w-130 mx-auto text-[22px] text-gray-500">
                        <IonIcon
                          icon={closeOutline}
                          role="img"
                          className="md hydrated"
                          aria-label="close outline"></IonIcon>
                      </div>
                    </td>
                    <td className="border-l border-t border-gray-200">
                      <div className="w-130 mx-auto text-[22px] text-gray-500">
                        <IonIcon
                          icon={closeOutline}
                          role="img"
                          className="md hydrated"
                          aria-label="close outline"></IonIcon>
                      </div>
                    </td>
                    <td className="border-l border-t border-gray-200">
                      <div className="w-130 mx-auto text-[22px] text-gray-500">
                        <IonIcon
                          icon={closeOutline}
                          role="img"
                          className="md hydrated"
                          aria-label="close outline"></IonIcon>
                      </div>
                    </td>
                  </tr>
                  <tr className="text-center">
                    <td className="min-w-[150px] border-t border-gray-200 px-1 py-4 text-left">
                      <div>
                        <span>Embedable Mint Button</span>
                        <p className="text-sm text-gray-500">
                          Copy/paste a mint button on your website or website builder
                        </p>
                      </div>
                    </td>
                    <td className="border-l border-t border-gray-200">
                      <div className="w-130 text-brand-500 mx-auto text-[22px]">
                        <IonIcon
                          icon={checkmarkOutline}
                          role="img"
                          className="md hydrated"
                          aria-label="checkmark outline"></IonIcon>
                      </div>
                    </td>
                    <td className="border-l border-t border-gray-200">
                      <div className="w-130 text-brand-500 mx-auto text-[22px]">
                        <IonIcon
                          icon={checkmarkOutline}
                          role="img"
                          className="md hydrated"
                          aria-label="checkmark outline"></IonIcon>
                      </div>
                    </td>
                    <td className="border-l border-t border-gray-200">
                      <div className="w-130 text-brand-500 mx-auto text-[22px]">
                        <IonIcon
                          icon={checkmarkOutline}
                          role="img"
                          className="md hydrated"
                          aria-label="checkmark outline"></IonIcon>
                      </div>
                    </td>
                    <td className="border-l border-t border-gray-200">
                      <div className="w-130 text-brand-500 mx-auto text-[22px]">
                        <IonIcon
                          icon={checkmarkOutline}
                          role="img"
                          className="md hydrated"
                          aria-label="checkmark outline"></IonIcon>
                      </div>
                    </td>
                    <td className="border-l border-t border-gray-200">
                      <div className="w-130 mx-auto text-[22px] text-gray-500">
                        <IonIcon
                          icon={closeOutline}
                          role="img"
                          className="md hydrated"
                          aria-label="close outline"></IonIcon>
                      </div>
                    </td>
                  </tr>
                  <tr className="text-center">
                    <td className="min-w-[150px] border-t border-gray-200 px-1 py-4 text-left">
                      <div>
                        <span>Referral System</span>
                        <p className="text-sm text-gray-500">
                          Shareable link available after mint giving rewards when used
                        </p>
                      </div>
                    </td>
                    <td className="border-l border-t border-gray-200">
                      <div className="w-130 text-brand-500 mx-auto text-[22px]">
                        <IonIcon
                          icon={checkmarkOutline}
                          role="img"
                          className="md hydrated"
                          aria-label="checkmark outline"></IonIcon>
                      </div>
                    </td>
                    <td className="border-l border-t border-gray-200">
                      <div className="w-130 text-brand-500 mx-auto text-[22px]">
                        <IonIcon
                          icon={checkmarkOutline}
                          role="img"
                          className="md hydrated"
                          aria-label="checkmark outline"></IonIcon>
                      </div>
                    </td>
                    <td className="border-l border-t border-gray-200">
                      <div className="w-130 text-brand-500 mx-auto text-[22px]">
                        <IonIcon
                          icon={checkmarkOutline}
                          role="img"
                          className="md hydrated"
                          aria-label="checkmark outline"></IonIcon>
                      </div>
                    </td>
                    <td className="border-l border-t border-gray-200">
                      <div className="w-130 mx-auto text-[22px] text-gray-500">
                        <IonIcon
                          icon={closeOutline}
                          role="img"
                          className="md hydrated"
                          aria-label="close outline"></IonIcon>
                      </div>
                    </td>
                    <td className="border-l border-t border-gray-200">
                      <div className="w-130 mx-auto text-[22px] text-gray-500">
                        <IonIcon
                          icon={closeOutline}
                          role="img"
                          className="md hydrated"
                          aria-label="close outline"></IonIcon>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
