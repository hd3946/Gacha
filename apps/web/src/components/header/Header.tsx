'use client'
import useColorMode from '@/hooks/useColorMode'
import { IonIcon } from '@ionic/react'
import {
  bookOutline,
  briefcaseOutline,
  cashOutline,
  chevronDownOutline,
  cogOutline,
  colorFilterOutline,
  desktopOutline,
  hardwareChipOutline,
  helpCircleOutline,
  homeOutline,
  imagesOutline,
  lockOpenOutline,
  mailUnreadOutline,
  newspaperOutline,
  personOutline,
  readerOutline,
  storefrontOutline
} from 'ionicons/icons'
import ImageLogo from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Header() {
  const [top, setTop] = useState<boolean>(true)

  const [display, setDisplay] = useState('')

  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true)
  }

  useEffect(() => {
    scrollHandler()
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  const [colorMode] = useColorMode()
  const [logo, setLogo] = useState<string>('/images/NFTArtGeneratorbyonemintblue.webp')
  useEffect(() => {
    if (colorMode === 'light') {
      setLogo('/images/NFTArtGeneratorbyonemintblue.webp')
    } else {
      setLogo('/images/logo.png')
    }
  }, [colorMode])

  return (
    <header
      className={`z-30 w-full bg-slate-900 transition duration-300 ease-in-out ${
        !top ? 'bg-slate-900 shadow-lg backdrop-blur-sm' : ''
      }`}>
      <div className="mx-auto px-5 py-5 sm:px-6">
        <div className="flex h-16 items-center justify-between md:h-20">
          <div className="mr-4 shrink-0">
            <div className="mb-2">
              <div className="flex flex-shrink-0 items-center">
                <Link href="/">
                  <ImageLogo src={logo} alt="Gacha_Logo" width={330} height={60} priority />
                </Link>
              </div>
            </div>
          </div>
          <nav className="hidden md:flex md:grow">
            <ul className="flex grow flex-wrap items-center justify-end">
              <li className="relative" onMouseOver={() => setDisplay('0')} onMouseOut={() => setDisplay('')}>
                <div className="mr-5 inline-flex items-center text-white">
                  <span className="mr-1">Products</span>
                  <IonIcon icon={chevronDownOutline} aria-hidden="true" role="img" className="md hydrated"></IonIcon>
                </div>
                {display == '0' ? (
                  <div
                    className="absolute left-1/3 z-10 mt-0 w-screen max-w-md -translate-x-1/2 translate-y-0 transform px-2 opacity-100 sm:px-0 lg:max-w-3xl"
                    id="headlessui-popover-panel-3"
                    data-headlessui-state="open">
                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                        <a
                          href="/"
                          className="-m-3 flex items-start rounded-lg p-3 transition duration-150 ease-in-out hover:bg-gray-50">
                          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-[#1c5fe5] text-white sm:h-12 sm:w-12">
                            <div className="h-4 w-4">
                              <IonIcon
                                icon={homeOutline}
                                aria-hidden="true"
                                role="img"
                                className="md hydrated"></IonIcon>
                            </div>
                          </div>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">Home</p>
                            <p className="mt-1 text-sm text-gray-500">
                              World className no-code NFT Art Generation software.
                            </p>
                          </div>
                        </a>
                        <a
                          href="/"
                          className="-m-3 flex items-start rounded-lg p-3 transition duration-150 ease-in-out hover:bg-gray-50">
                          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-[#1c5fe5] text-white sm:h-12 sm:w-12">
                            <div className="h-4 w-4">
                              <IonIcon
                                icon={imagesOutline}
                                aria-hidden="true"
                                role="img"
                                className="md hydrated"></IonIcon>
                            </div>
                          </div>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">NFT Art Generator</p>
                            <p className="mt-1 text-sm text-gray-500">
                              World className no-code NFT Art Generation software.
                            </p>
                          </div>
                        </a>
                        <a
                          href="/"
                          className="-m-3 flex items-start rounded-lg p-3 transition duration-150 ease-in-out hover:bg-gray-50">
                          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-[#1c5fe5] text-white sm:h-12 sm:w-12">
                            <div className="h-4 w-4">
                              <IonIcon
                                icon={readerOutline}
                                aria-hidden="true"
                                role="img"
                                className="md hydrated"></IonIcon>
                            </div>
                          </div>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">Smart Contracts</p>
                            <p className="mt-1 text-sm text-gray-500">
                              Audited and bullet-proof smart-contract trusted by thousands of collections.
                            </p>
                          </div>
                        </a>
                        <a
                          href="/"
                          className="-m-3 flex items-start rounded-lg p-3 transition duration-150 ease-in-out hover:bg-gray-50">
                          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-[#1c5fe5] text-white sm:h-12 sm:w-12">
                            <div className="h-4 w-4">
                              <IonIcon
                                icon={colorFilterOutline}
                                aria-hidden="true"
                                role="img"
                                className="md hydrated"></IonIcon>
                            </div>
                          </div>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              Dynamic NFTs
                              <span className="ml-2 inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                                New
                              </span>
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              Make your NFTs customizable with exchangleable traits. Allow your community to build
                              personalized NFTs.
                            </p>
                          </div>
                        </a>
                        <a
                          href="/"
                          className="-m-3 flex items-start rounded-lg p-3 transition duration-150 ease-in-out hover:bg-gray-50">
                          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-[#1c5fe5] text-white sm:h-12 sm:w-12">
                            <div className="h-4 w-4">
                              <IonIcon
                                icon={storefrontOutline}
                                aria-hidden="true"
                                role="img"
                                className="md hydrated"></IonIcon>
                            </div>
                          </div>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              Trait Marketplace
                              <span className="ml-2 inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                                New
                              </span>
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              Creating a marketplace has never been easier, open you own NFT Marketplace and offer a
                              unique minting experience.
                            </p>
                          </div>
                        </a>
                        <a
                          href="/"
                          className="-m-3 flex items-start rounded-lg p-3 transition duration-150 ease-in-out hover:bg-gray-50">
                          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-[#1c5fe5] text-white sm:h-12 sm:w-12">
                            <div className="h-4 w-4">
                              <IonIcon
                                icon={lockOpenOutline}
                                aria-hidden="true"
                                role="img"
                                className="md hydrated"></IonIcon>
                            </div>
                          </div>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">Access List</p>
                            <p className="mt-1 text-sm text-gray-500">
                              Create an allow-list in a few clicks. Require Twitter, email, discord, min. balance and
                              more.
                            </p>
                          </div>
                        </a>
                        <a
                          href="/"
                          className="-m-3 flex items-start rounded-lg p-3 transition duration-150 ease-in-out hover:bg-gray-50">
                          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-[#1c5fe5] text-white sm:h-12 sm:w-12">
                            <div className="h-4 w-4">
                              <IonIcon
                                icon={hardwareChipOutline}
                                aria-hidden="true"
                                role="img"
                                className="md hydrated"></IonIcon>
                            </div>
                          </div>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">A.I. Image Generator</p>
                            <p className="mt-1 text-sm text-gray-500">
                              Train our AI Model with your NFT collection and create a seamless amuount of content for
                              your marketing strategy.
                            </p>
                          </div>
                        </a>
                        <a
                          href="/"
                          className="-m-3 flex items-start rounded-lg p-3 transition duration-150 ease-in-out hover:bg-gray-50">
                          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-[#1c5fe5] text-white sm:h-12 sm:w-12">
                            <div className="h-4 w-4">
                              <IonIcon
                                icon={cashOutline}
                                aria-hidden="true"
                                role="img"
                                className="md hydrated"></IonIcon>
                            </div>
                          </div>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              Staking Rewards
                              <span className="ml-2 inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                                New
                              </span>
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              Offer your community a staking reward program. Reward your holders with a custom ERC20
                              token.
                            </p>
                          </div>
                        </a>
                        <a
                          href="/"
                          className="-m-3 flex items-start rounded-lg p-3 transition duration-150 ease-in-out hover:bg-gray-50">
                          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-[#1c5fe5] text-white sm:h-12 sm:w-12">
                            <div className="h-4 w-4">
                              <IonIcon
                                icon={cogOutline}
                                aria-hidden="true"
                                role="img"
                                className="md hydrated"></IonIcon>
                            </div>
                          </div>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">
                              Agency Services
                              <span className="ml-2 inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                                New
                              </span>
                            </p>
                            <p className="mt-1 text-sm text-gray-500">
                              Order custom NFTs, Smart Contracts, Websites and more. We offer a wide range of services
                              for your NFT project.
                            </p>
                          </div>
                        </a>
                      </div>
                      <div className="flex bg-gray-50 p-5 sm:p-8">
                        <div className="w-2/3">
                          <span className="flex items-center">
                            <span className="text-base font-medium text-gray-900">Enterprise</span>
                          </span>
                          <span className="mt-1 block text-sm text-gray-500">
                            We offer Web3 and blockchain development services for ambitious companies.
                          </span>
                        </div>
                        <div className="ml-auto mt-4">
                          <a
                            href="/"
                            className="inline-flex items-center rounded-full border border-transparent bg-[#1c5fe5] px-3.5 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 hover:text-white hover:ring-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2">
                            Learn More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </li>
              <li className="relative" onMouseOver={() => setDisplay('1')} onMouseOut={() => setDisplay('')}>
                <div className="mr-5 inline-flex items-center text-white">
                  <span className="mr-1">Resources</span>
                  <IonIcon icon={chevronDownOutline} aria-hidden="true" role="img" className="md hydrated"></IonIcon>
                </div>
                {display == '1' ? (
                  <div
                    className="absolute left-1/2 z-10 mt-0 w-screen max-w-xs -translate-x-1/2 translate-y-0 transform px-2 opacity-100 sm:px-0"
                    id="headlessui-popover-panel-6"
                    data-headlessui-state="open">
                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                      <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                        <a
                          href="/"
                          className="-m-3 flex items-start rounded-lg p-3 transition duration-150 ease-in-out hover:bg-gray-50">
                          <div className="h-4 w-4 text-black">
                            <IonIcon
                              icon={desktopOutline}
                              role="img"
                              className="md hydrated"
                              aria-label="desktop outline"></IonIcon>
                          </div>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">One Mint Presentation</p>
                          </div>
                        </a>
                        <a
                          href="/"
                          className="-m-3 flex items-start rounded-lg p-3 transition duration-150 ease-in-out hover:bg-gray-50">
                          <div className="h-4 w-4 text-black">
                            <IonIcon
                              icon={bookOutline}
                              role="img"
                              className="md hydrated"
                              aria-label="book outline"></IonIcon>
                          </div>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">Dynamic NFTs Deck</p>
                          </div>
                        </a>
                        <a
                          href="/"
                          className="-m-3 flex items-start rounded-lg p-3 transition duration-150 ease-in-out hover:bg-gray-50">
                          <div className="h-4 w-4 text-black">
                            <IonIcon
                              icon={newspaperOutline}
                              role="img"
                              className="md hydrated"
                              aria-label="newspaper outline"></IonIcon>
                          </div>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">Blog</p>
                          </div>
                        </a>
                        <a
                          href="/"
                          className="-m-3 flex items-start rounded-lg p-3 transition duration-150 ease-in-out hover:bg-gray-50">
                          <div className="h-4 w-4 text-black">
                            <IonIcon
                              icon={briefcaseOutline}
                              role="img"
                              className="md hydrated"
                              aria-label="briefcase outline"></IonIcon>
                          </div>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">B2B</p>
                          </div>
                        </a>
                        <a
                          href="/"
                          className="-m-3 flex items-start rounded-lg p-3 transition duration-150 ease-in-out hover:bg-gray-50">
                          <div className="h-4 w-4 text-black">
                            <IonIcon
                              icon={helpCircleOutline}
                              role="img"
                              className="md hydrated"
                              aria-label="help circle outline"></IonIcon>
                          </div>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">Help</p>
                          </div>
                        </a>
                        <a
                          href="/"
                          className="-m-3 flex items-start rounded-lg p-3 transition duration-150 ease-in-out hover:bg-gray-50">
                          <div className="h-4 w-4 text-black">
                            <IonIcon
                              icon={personOutline}
                              role="img"
                              className="md hydrated"
                              aria-label="person outline"></IonIcon>
                          </div>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">About</p>
                          </div>
                        </a>
                        <a
                          href="/"
                          className="-m-3 flex items-start rounded-lg p-3 transition duration-150 ease-in-out hover:bg-gray-50">
                          <div className="h-4 w-4 text-black">
                            <IonIcon
                              icon={mailUnreadOutline}
                              role="img"
                              className="md hydrated"
                              aria-label="mail unread outline"></IonIcon>
                          </div>
                          <div className="ml-4">
                            <p className="text-base font-medium text-gray-900">Contact</p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="mr-5 flex items-center py-3 font-medium text-gray-100 transition duration-150 ease-in-out hover:text-gray-400">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/signup" className="btn-sm rounded-full bg-blue-600 p-2 text-gray-100 hover:bg-blue-400">
                  <span>Connect Wallet</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
