import { IonIcon } from '@ionic/react'
import { checkmarkCircleOutline } from 'ionicons/icons'

const Seventh = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Value on your Investment</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Top NFT Generators</p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          Explore the capabilities of each launchpad and find the perfect NFT generator for your needs, whether you're a
          seasoned creator or part of a team.
        </p>
      </div>
      <div className="isolate mt-20 lg:block">
        <div className="relative -mx-8">
          <div className="absolute inset-x-4 inset-y-0 -z-10 flex">
            <div className="flex w-1/4 px-4" aria-hidden="true" style={{ marginLeft: '25%' }}>
              <div className="w-full rounded-t-xl border-x border-t border-gray-900/10 bg-gray-400/5"></div>
            </div>
          </div>
          <table className="w-full table-fixed border-separate border-spacing-x-8 text-left">
            <caption
              style={{
                position: 'absolute',
                width: '1px',
                height: '1px',
                padding: '0',
                margin: '-1px',
                overflow: 'hidden',
                clip: 'rect(0,0,0,0)',
                whiteSpace: 'nowrap',
                borderWidth: '0'
              }}>
              Pricing plan comparison
            </caption>
            <colgroup>
              <col className="w-1/4" />
              <col className="w-1/4" />
              <col className="w-1/4" />
              <col className="w-1/4" />
            </colgroup>
            <thead>
              <tr>
                <td></td>
                <th scope="col" className="px-6 pt-6 xl:px-8 xl:pt-8">
                  <div className="mx-auto flex h-20 items-center justify-center rounded bg-gray-400 text-sm font-semibold leading-7 text-gray-900">
                    <img
                      src="https://cdn.nft-generator.art/images%2FOneMintLogo.png"
                      alt="Best NFT Generator"
                      className="mx-auto h-6 w-auto"
                    />
                  </div>
                </th>
                <th scope="col" className="px-6 pt-6 xl:px-8 xl:pt-8">
                  <div className="mx-auto flex h-20 items-center justify-center rounded bg-gray-400 text-sm font-semibold leading-7 text-gray-900">
                    <img
                      src="https://assets-global.website-files.com/6171adb6a942edb106e6b5f0/629fe679ecd1bd4728634155_logo-white.png"
                      alt="Best NFT Generator"
                      className="mx-auto h-6 w-auto grayscale"
                    />
                  </div>
                </th>
                <th scope="col" className="px-6 pt-6 xl:px-8 xl:pt-8">
                  <div className="mx-auto flex h-20 items-center justify-center rounded bg-gray-400 text-sm font-semibold leading-7 text-gray-900">
                    <img
                      src="https://nft-inator.com/_nuxt/logo-light.4b510a4c.svg"
                      alt="Best NFT Generator"
                      className="mx-auto h-6 w-auto grayscale"
                    />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <span className="sr-only">Price</span>
                </th>
              </tr>
              <tr>
                <th scope="colgroup" className="pb-4 pt-8 text-sm font-semibold leading-6 text-gray-900">
                  Features<div className="absolute inset-x-8 mt-4 h-px bg-gray-900/10"></div>
                </th>
              </tr>
              <tr>
                <th scope="row" className="-gray-900 py-4 text-sm font-normal leading-6">
                  NFT Art Generation<div className="absolute inset-x-8 mt-4 h-px bg-gray-900/5"></div>
                </th>
                <td className="px-6 py-4 xl:px-8">
                  <div className="mx-auto flex w-full items-center">
                    <IonIcon
                      icon={checkmarkCircleOutline}
                      style={{ color: 'blue', margin: '0 auto', fontSize: '22px' }}
                      role="img"
                      aria-label="checkmark circle outline"
                    />
                  </div>
                  <span className="sr-only">OneMint</span>
                </td>
                <td className="px-6 py-4 xl:px-8">
                  <div className="mx-auto flex w-full items-center">
                    <IonIcon
                      icon={checkmarkCircleOutline}
                      style={{ color: 'blue', margin: '0 auto', fontSize: '22px' }}
                      role="img"
                      aria-label="checkmark circle outline"
                    />
                  </div>
                  <span className="sr-only">BuenoArt</span>
                </td>
                <td className="px-6 py-4 xl:px-8">
                  <div className="mx-auto flex w-full items-center">
                    <IonIcon
                      icon={checkmarkCircleOutline}
                      style={{ color: 'blue', margin: '0 auto', fontSize: '22px' }}
                      role="img"
                      aria-label="checkmark circle outline"></IonIcon>
                  </div>
                  <span className="sr-only">NFTInator</span>
                </td>
              </tr>
              {/* <tr>
                <th scope="row" className="-gray-900 py-4 text-sm font-normal leading-6">
                  Smart Contract Deployment<div className="absolute inset-x-8 mt-4 h-px bg-gray-900/5"></div>
                </th>
                <td className="px-6 py-4 xl:px-8">
                  <div className="mx-auto flex w-full items-center">
                    <IonIcon
                      icon={checkmarkCircleOutline}
                      style={{ color: 'blue', margin: '0 auto', fontSize: '22px' }}
                    />
                  </div>
                  <span className="sr-only">OneMint</span>
                </td>
                <td className="px-6 py-4 xl:px-8">
                  <div className="mx-auto flex w-full items-center">
                    <IonIcon
                      icon={checkmarkCircleOutline}
                      style={{ color: 'blue', margin: '0 auto', fontSize: '22px' }}
                      role="img"
                      aria-label="checkmark circle outline"></IonIcon>
                  </div>
                  <span className="sr-only">BuenoArt</span>
                </td>
                <td className="px-6 py-4 xl:px-8">
                  <div className="mx-auto flex w-full items-center">
                    <IonIcon
                      icon={checkmarkCircleOutline}
                      style={{ color: 'blue', margin: '0 auto', fontSize: '22px' }}
                      role="img"
                      aria-label="checkmark circle outline"></IonIcon>
                  </div>
                  <span className="sr-only">NFTInator</span>
                </td>
              </tr>
              <tr>
                <th scope="row" className="-gray-900 py-4 text-sm font-normal leading-6">
                  Access List Management<div className="absolute inset-x-8 mt-4 h-px bg-gray-900/5"></div>
                </th>
                <td className="px-6 py-4 xl:px-8">
                  <div className="mx-auto flex w-full items-center">
                    <IonIcon
                      icon={checkmarkCircleOutline}
                      style={{ color: 'blue', margin: '0 auto', fontSize: '22px' }}
                      role="img"
                      aria-label="checkmark circle outline"></IonIcon>
                  </div>
                  <span className="sr-only">OneMint</span>
                </td>
                <td className="px-6 py-4 xl:px-8">
                  <div className="mx-auto flex w-full items-center">
                    <IonIcon
                      icon={checkmarkCircleOutline}
                      style={{ color: 'blue', margin: '0 auto', fontSize: '22px' }}
                      role="img"
                      aria-label="checkmark circle outline"></IonIcon>
                  </div>
                  <span className="sr-only">BuenoArt</span>
                </td>
                <td className="px-6 py-4 xl:px-8">
                  <div className="mx-auto flex w-full items-center">
                    <IonIcon
                      icon={removeCircleOutline}
                      style={{ color: 'gray', margin: '0 auto', fontSize: '22px' }}
                      role="img"
                      aria-label="remove circle outline"></IonIcon>
                  </div>
                  <span className="sr-only">NFTInator</span>
                </td>
              </tr>
              <tr>
                <th scope="row" className="-gray-900 py-4 text-sm font-normal leading-6">
                  Custom Domain<div className="absolute inset-x-8 mt-4 h-px bg-gray-900/5"></div>
                </th>
                <td className="px-6 py-4 xl:px-8">
                  <div className="mx-auto flex w-full items-center">
                    <IonIcon
                      icon={checkmarkCircleOutline}
                      style={{ color: 'blue', margin: '0 auto', fontSize: '22px' }}
                      role="img"
                      aria-label="checkmark circle outline"></IonIcon>
                  </div>
                  <span className="sr-only">OneMint</span>
                </td>
                <td className="px-6 py-4 xl:px-8">
                  <div className="mx-auto flex w-full items-center">
                    <IonIcon
                      icon={removeCircleOutline}
                      style={{ color: 'gray', margin: '0 auto', fontSize: '22px' }}
                      role="img"
                      aria-label="remove circle outline"></IonIcon>
                  </div>
                  <span className="sr-only">BuenoArt</span>
                </td>
                <td className="px-6 py-4 xl:px-8">
                  <div className="mx-auto flex w-full items-center">
                    <IonIcon
                      icon={removeCircleOutline}
                      style={{ color: 'gray', margin: '0 auto', fontSize: '22px' }}
                      role="img"
                      aria-label="remove circle outline"></IonIcon>
                  </div>
                  <span className="sr-only">NFTInator</span>
                </td>
              </tr>
              <tr>
                <th scope="row" className="-gray-900 py-4 text-sm font-normal leading-6">
                  Credit Card Payments<div className="absolute inset-x-8 mt-4 h-px bg-gray-900/5"></div>
                </th>
                <td className="px-6 py-4 xl:px-8">
                  <div className="mx-auto flex w-full items-center">
                    <IonIcon
                      icon={checkmarkCircleOutline}
                      style={{ color: 'blue', margin: '0 auto', fontSize: '22px' }}
                      role="img"
                      aria-label="checkmark circle outline"></IonIcon>
                  </div>
                  <span className="sr-only">OneMint</span>
                </td>
                <td className="px-6 py-4 xl:px-8">
                  <div className="mx-auto flex w-full items-center">
                    <IonIcon
                      icon={removeCircleOutline}
                      style={{ color: 'gray', margin: '0 auto', fontSize: '22px' }}
                      role="img"
                      aria-label="remove circle outline"></IonIcon>
                  </div>
                  <span className="sr-only">BuenoArt</span>
                </td>
                <td className="px-6 py-4 xl:px-8">
                  <div className="mx-auto flex w-full items-center">
                    <IonIcon
                      icon={removeCircleOutline}
                      style={{ color: 'gray', margin: '0 auto', fontSize: '22px' }}
                      role="img"
                      aria-label="remove circle outline"></IonIcon>
                  </div>
                  <span className="sr-only">NFTInator</span>
                </td>
              </tr>
              <tr>
                <th scope="row" className="-gray-900 py-4 text-sm font-normal leading-6">
                  Withdraw Split<div className="absolute inset-x-8 mt-4 h-px bg-gray-900/5"></div>
                </th>
                <td className="px-6 py-4 xl:px-8">
                  <div className="mx-auto flex w-full items-center">
                    <IonIcon
                      icon={checkmarkCircleOutline}
                      style={{ color: 'blue', margin: '0 auto', fontSize: '22px' }}
                      role="img"
                      aria-label="checkmark circle outline"></IonIcon>
                  </div>
                  <span className="sr-only">OneMint</span>
                </td>
                <td className="px-6 py-4 xl:px-8">
                  <div className="mx-auto flex w-full items-center">
                    <IonIcon
                      icon={checkmarkCircleOutline}
                      style={{ color: 'blue', margin: '0 auto', fontSize: '22px' }}
                      role="img"
                      aria-label="checkmark circle outline"></IonIcon>
                  </div>
                  <span className="sr-only">BuenoArt</span>
                </td>
                <td className="px-6 py-4 xl:px-8">
                  <div className="mx-auto flex w-full items-center">
                    <IonIcon
                      icon={removeCircleOutline}
                      style={{ color: 'gray', margin: '0 auto', fontSize: '22px' }}
                      role="img"
                      aria-label="remove circle outline"></IonIcon>
                  </div>
                  <span className="sr-only">NFTInator</span>
                </td>
              </tr>
              <tr>
                <th scope="row" className="-gray-900 py-4 text-sm font-normal leading-6">
                  Template Mint Page<div className="absolute inset-x-8 mt-4 h-px bg-gray-900/5"></div>
                </th>
                <td className="px-6 py-4 xl:px-8">
                  <div className="mx-auto flex w-full items-center">
                    <IonIcon
                      icon={checkmarkCircleOutline}
                      style={{ color: 'blue', margin: '0 auto', fontSize: '22px' }}
                      role="img"
                      aria-label="checkmark circle outline"></IonIcon>
                  </div>
                  <span className="sr-only">OneMint</span>
                </td>
                <td className="px-6 py-4 xl:px-8">
                  <div className="mx-auto flex w-full items-center">
                    <IonIcon
                      icon={checkmarkCircleOutline}
                      style={{ color: 'blue', margin: '0 auto', fontSize: '22px' }}
                      role="img"
                      aria-label="checkmark circle outline"></IonIcon>
                  </div>
                  <span className="sr-only">BuenoArt</span>
                </td>
                <td className="px-6 py-4 xl:px-8">
                  <div className="mx-auto flex w-full items-center">
                    <IonIcon
                      icon={removeCircleOutline}
                      style={{ color: 'gray', margin: '0 auto', fontSize: '22px' }}
                      role="img"
                      aria-label="remove circle outline"></IonIcon>
                  </div>
                  <span className="sr-only">NFTInator</span>
                </td>
              </tr>
              <tr>
                <th scope="row" className="-gray-900 py-4 text-sm font-normal leading-6">
                  Mint Button SDK<div className="absolute inset-x-8 mt-4 h-px bg-gray-900/5"></div>
                </th>
                <td className="px-6 py-4 xl:px-8">
                  <div className="mx-auto flex w-full items-center">
                    <IonIcon
                      icon={checkmarkCircleOutline}
                      style={{ color: 'blue', margin: '0 auto', fontSize: '22px' }}
                      role="img"
                      aria-label="checkmark circle outline"></IonIcon>
                  </div>
                  <span className="sr-only">OneMint</span>
                </td>
                <td className="px-6 py-4 xl:px-8">
                  <div className="mx-auto flex w-full items-center">
                    <IonIcon
                      icon={checkmarkCircleOutline}
                      style={{ color: 'blue', margin: '0 auto', fontSize: '22px' }}
                      role="img"
                      aria-label="checkmark circle outline"></IonIcon>
                  </div>
                  <span className="sr-only">BuenoArt</span>
                </td>
                <td className="px-6 py-4 xl:px-8">
                  <div className="mx-auto flex w-full items-center">
                    <IonIcon
                      icon={removeCircleOutline}
                      style={{ color: 'gray', margin: '0 auto', fontSize: '22px' }}
                      role="img"
                      aria-label="remove circle outline"></IonIcon>
                  </div>
                  <span className="sr-only">NFTInator</span>
                </td>
              </tr>
              <tr>
                <th scope="row" className="-gray-900 py-4 text-sm font-normal leading-6">
                  Basic Rules<div className="absolute inset-x-8 mt-4 h-px bg-gray-900/5"></div>
                </th>
                <td className="px-6 py-4 xl:px-8">
                  <div className="mx-auto flex w-full items-center">
                    <IonIcon
                      icon={checkmarkCircleOutline}
                      style={{ color: 'blue', margin: '0 auto', fontSize: '22px' }}
                      role="img"
                      aria-label="checkmark circle outline"></IonIcon>
                  </div>
                  <span className="sr-only">OneMint</span>
                </td>
                <td className="px-6 py-4 xl:px-8">
                  <div className="mx-auto flex w-full items-center">
                    <IonIcon
                      icon={checkmarkCircleOutline}
                      style={{ color: 'blue', margin: '0 auto', fontSize: '22px' }}
                      role="img"
                      aria-label="checkmark circle outline"></IonIcon>
                  </div>
                  <span className="sr-only">BuenoArt</span>
                </td>
                <td className="px-6 py-4 xl:px-8">
                  <div className="mx-auto flex w-full items-center">
                    <IonIcon
                      icon={checkmarkCircleOutline}
                      style={{ color: 'blue', margin: '0 auto', fontSize: '22px' }}
                      role="img"
                      aria-label="checkmark circle outline"></IonIcon>
                  </div>
                  <span className="sr-only">NFTInator</span>
                </td>
              </tr>
              <tr>
                <th scope="row" className="-gray-900 py-4 text-sm font-normal leading-6">
                  Advanced Rules<div className="absolute inset-x-8 mt-4 h-px bg-gray-900/5"></div>
                </th>
                <td className="px-6 py-4 xl:px-8">
                  <div className="mx-auto flex w-full items-center">
                    <IonIcon
                      icon={checkmarkCircleOutline}
                      style={{ color: 'blue', margin: '0 auto', fontSize: '22px' }}
                      role="img"
                      aria-label="checkmark circle outline"></IonIcon>
                  </div>
                  <span className="sr-only">OneMint</span>
                </td>
                <td className="px-6 py-4 xl:px-8">
                  <div className="mx-auto flex w-full items-center">
                    <IonIcon
                      icon={removeCircleOutline}
                      style={{ color: 'gray', margin: '0 auto', fontSize: '22px' }}
                      role="img"
                      aria-label="remove circle outline"></IonIcon>
                  </div>
                  <span className="sr-only">BuenoArt</span>
                </td>
                <td className="px-6 py-4 xl:px-8">
                  <div className="mx-auto flex w-full items-center">
                    <IonIcon
                      icon={removeCircleOutline}
                      style={{ color: 'gray', margin: '0 auto', fontSize: '22px' }}
                      role="img"
                      aria-label="remove circle outline"></IonIcon>
                  </div>
                  <span className="sr-only">NFTInator</span>
                </td>
              </tr>
              <tr>
                <th scope="row" className="-gray-900 py-4 text-sm font-normal leading-6">
                  Gifs &amp; MP4 Generation<div className="absolute inset-x-8 mt-4 h-px bg-gray-900/5"></div>
                </th>
                <td className="px-6 py-4 xl:px-8">
                  <div className="mx-auto flex w-full items-center">
                    <IonIcon
                      icon={checkmarkCircleOutline}
                      style={{ color: 'blue', margin: '0 auto', fontSize: '22px' }}
                      role="img"
                      aria-label="checkmark circle outline"></IonIcon>
                  </div>
                  <span className="sr-only">OneMint</span>
                </td>
                <td className="px-6 py-4 xl:px-8">
                  <div className="mx-auto flex w-full items-center">
                    <IonIcon
                      icon={removeCircleOutline}
                      style={{ color: 'gray', margin: '0 auto', fontSize: '22px' }}
                      role="img"
                      aria-label="remove circle outline"></IonIcon>
                  </div>
                  <span className="sr-only">BuenoArt</span>
                </td>
                <td className="px-6 py-4 xl:px-8">
                  <div className="mx-auto flex w-full items-center">
                    <IonIcon
                      icon={checkmarkCircleOutline}
                      style={{ color: 'gray', margin: '0 auto', fontSize: '22px' }}
                      role="img"
                      aria-label="checkmark circle outline"></IonIcon>
                  </div>
                  <span className="sr-only">NFTInator</span>
                </td>
              </tr>
              <tr>
                <th scope="row" className="-gray-900 py-4 text-sm font-normal leading-6">
                  Dynamic NFTs<div className="absolute inset-x-8 mt-4 h-px bg-gray-900/5"></div>
                </th>
                <td className="px-6 py-4 xl:px-8">
                  <div className="mx-auto flex w-full items-center">
                    <IonIcon
                      icon={checkmarkCircleOutline}
                      style={{ color: 'blue', margin: '0 auto', fontSize: '22px' }}
                      role="img"
                      aria-label="checkmark circle outline"></IonIcon>
                  </div>
                  <span className="sr-only">OneMint</span>
                </td>
                <td className="px-6 py-4 xl:px-8">
                  <div className="mx-auto flex w-full items-center">
                    <IonIcon
                      icon={removeCircleOutline}
                      style={{ color: 'gray', margin: '0 auto', fontSize: '22px' }}
                      role="img"
                      aria-label="remove circle outline"></IonIcon>
                  </div>
                  <span className="sr-only">BuenoArt</span>
                </td>
                <td className="px-6 py-4 xl:px-8">
                  <div className="mx-auto flex w-full items-center">
                    <IonIcon
                      icon={removeCircleOutline}
                      style={{ color: 'gray', margin: '0 auto', fontSize: '22px' }}
                      role="img"
                      aria-label="remove circle outline"></IonIcon>
                  </div>
                  <span className="sr-only">NFTInator</span>
                </td>
              </tr>
              <tr>
                <th scope="row" className="-gray-900 py-4 text-sm font-normal leading-6">
                  Traits Marketplace<div className="absolute inset-x-8 mt-4 h-px bg-gray-900/5"></div>
                </th>
                <td className="px-6 py-4 xl:px-8">
                  <div className="mx-auto flex w-full items-center">
                    <IonIcon
                      icon={checkmarkCircleOutline}
                      style={{ color: 'blue', margin: '0 auto', fontSize: '22px' }}
                      role="img"
                      aria-label="checkmark circle outline"></IonIcon>
                  </div>
                  <span className="sr-only">OneMint</span>
                </td>
                <td className="px-6 py-4 xl:px-8">
                  <div className="mx-auto flex w-full items-center">
                    <IonIcon
                      icon={removeCircleOutline}
                      style={{ color: 'gray', margin: '0 auto', fontSize: '22px' }}
                      role="img"
                      aria-label="remove circle outline"></IonIcon>
                  </div>
                  <span className="sr-only">BuenoArt</span>
                </td>
                <td className="px-6 py-4 xl:px-8">
                  <div className="mx-auto flex w-full items-center">
                    <IonIcon
                      icon={removeCircleOutline}
                      style={{ color: 'gray', margin: '0 auto', fontSize: '22px' }}
                      role="img"
                      aria-label="remove circle outline"></IonIcon>
                  </div>
                  <span className="sr-only">NFTInator</span>
                </td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Seventh
