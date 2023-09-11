// import Auth from '@/components/accountPage/Auth'
// import Wallet from '@/components/accountPage/Wallet'

// import CoinbaseWallet from '@/components/accountPage/Wallet/CoinbaseWallet'
// import MetaMask from '@/components/accountPage/Wallet/MetaMask'
// import MultiversX from '@/components/accountPage/Wallet/Multiversx'
// import Phantom from '@/components/accountPage/Wallet/Phantom'
// import WalletConnect from '@/components/accountPage/Wallet/WalletConnect'

// export default function Home() {
//   return (
//     <div className="custom-body">
//       <div className="flex h-screen w-screen overflow-hidden">
//         <div className="relative hidden h-screen w-[33vw] min-w-[400px] flex-col justify-start !bg-neutral-900 py-6 lg:flex xl:w-[800px] 2xl:w-[1100px]">
//           {/* Logo */}
//           <div className="absolute left-4 top-6 z-20 px-4">
//             <a href="/">
//               <span
//                 style={{
//                   boxSizing: 'border-box',
//                   display: 'inline-block',
//                   overflow: 'hidden',
//                   width: 'initial',
//                   height: 'initial',
//                   background: 'none',
//                   opacity: '1',
//                   border: '0px',
//                   margin: '0px',
//                   padding: '0px',
//                   position: 'relative',
//                   maxWidth: '100%,'
//                 }}>
//                 <span
//                   className="box-border block"
//                   style={{
//                     width: 'initial',
//                     height: 'initial',
//                     background: 'none',
//                     opacity: '1',
//                     border: '0px',
//                     margin: '0px',
//                     padding: '0px',
//                     maxWidth: '100%'
//                   }}>
//                   <img
//                     alt=""
//                     aria-hidden="true"
//                     src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27240%27%20height=%2748%27/%3e"
//                     style={{
//                       display: 'block',
//                       maxWidth: '100%',
//                       width: 'initial',
//                       height: 'initial',
//                       background: 'none',
//                       opacity: '1',
//                       border: '0px',
//                       margin: '0px',
//                       padding: '0px'
//                     }}
//                   />
//                 </span>
//                 <img
//                   alt="OneMint"
//                   srcSet="/_next/image?url=%2Fimages%2FOneMintLogoWhite.png&amp,w=256&amp,q=75 1x, /_next/image?url=%2Fimages%2FOneMintLogoWhite.png&amp,w=640&amp,q=75 2x"
//                   src="/_next/image?url=%2Fimages%2FOneMintLogoWhite.png&amp,w=640&amp,q=75"
//                   decoding="async"
//                   data-nimg="intrinsic"
//                   className="shadow-2xl"
//                   style={{
//                     position: 'absolute',
//                     inset: '0px',
//                     boxSizing: 'border-box',
//                     padding: '0px',
//                     border: 'none',
//                     margin: 'auto',
//                     display: 'block',
//                     width: '0px',
//                     height: '0px',
//                     minWidth: '100%',
//                     maxWidth: '100%',
//                     minHeight: '100%',
//                     maxHeight: '100%'
//                   }}
//                 />
//               </span>
//             </a>
//           </div>
//           {/* vertical cardlist */}
//           <div className="absolute inset-0 grid grid-cols-3 items-start gap-5 px-5 py-3">
//             <span className="pointer-events-none absolute inset-0 z-10 bg-neutral-900 bg-opacity-75"></span>
//             <div className="flex flex-col gap-5">
//               <img
//                 className="pointer-events-none z-0 mx-auto aspect-square w-full rounded-lg bg-gray-200"
//                 loading="lazy"
//                 src="https://ik.imagekit.io/llh50zxqb/images/projects/Employables.png?tr=w-200,h-200,c-maintain_ratio,f-auto"
//                 alt="Employables"
//               />
//               <img
//                 className="pointer-events-none z-0 mx-auto aspect-square w-full rounded-lg bg-gray-200"
//                 loading="lazy"
//                 src="https://ik.imagekit.io/llh50zxqb/images/projects/EternalKlayPets.jpeg?tr=w-200,h-200,c-maintain_ratio,f-auto"
//                 alt="Eternal Klay Pets"
//               />
//               <img
//                 className="pointer-events-none z-0 mx-auto aspect-square w-full rounded-lg bg-gray-200"
//                 loading="lazy"
//                 src="https://ik.imagekit.io/llh50zxqb/images/projects/birdstown.wtf.jpeg?tr=w-200,h-200,c-maintain_ratio,f-auto"
//                 alt="Birdstown.wtf"
//               />
//               <img
//                 className="pointer-events-none z-0 mx-auto aspect-square w-full rounded-lg bg-gray-200"
//                 loading="lazy"
//                 src="https://ik.imagekit.io/llh50zxqb/images/projects/haoku.jpeg?tr=w-200,h-200,c-maintain_ratio,f-auto"
//                 alt="Haoku"
//               />
//               <img
//                 className="pointer-events-none z-0 mx-auto aspect-square w-full rounded-lg bg-gray-200"
//                 loading="lazy"
//                 src="https://ik.imagekit.io/llh50zxqb/images/projects/ShinigamiSins.png?tr=w-200,h-200,c-maintain_ratio,f-auto"
//                 alt="Shinigami Sins"
//               />
//               <img
//                 className="pointer-events-none z-0 mx-auto aspect-square w-full rounded-lg bg-gray-200"
//                 loading="lazy"
//                 src="https://ik.imagekit.io/llh50zxqb/images/projects/MonstersInsideNFT.png?tr=w-200,h-200,c-maintain_ratio,f-auto"
//                 alt="Monsters Inside NFT"
//               />
//               <img
//                 className="pointer-events-none z-0 mx-auto aspect-square w-full rounded-lg bg-gray-200"
//                 loading="lazy"
//                 src="https://ik.imagekit.io/llh50zxqb/images/projects/ghostskulls.jpeg?tr=w-200,h-200,c-maintain_ratio,f-auto"
//                 alt="Ghost Skulls"
//               />
//               <img
//                 className="pointer-events-none z-0 mx-auto aspect-square w-full rounded-lg bg-gray-200"
//                 loading="lazy"
//                 src="https://ik.imagekit.io/llh50zxqb/images/projects/TransylvaniaCastle.jpeg?tr=w-200,h-200,c-maintain_ratio,f-auto"
//                 alt="Transylvania Castle"
//               />
//               <img
//                 className="pointer-events-none z-0 mx-auto aspect-square w-full rounded-lg bg-gray-200"
//                 loading="lazy"
//                 src="https://ik.imagekit.io/llh50zxqb/images/projects/ChillBoys.jpeg?tr=w-200,h-200,c-maintain_ratio,f-auto"
//                 alt="Chill Boys"
//               />
//               <img
//                 className="pointer-events-none z-0 mx-auto aspect-square w-full rounded-lg bg-gray-200"
//                 loading="lazy"
//                 src="https://ik.imagekit.io/llh50zxqb/images/projects/DiamondHooves.jpeg?tr=w-200,h-200,c-maintain_ratio,f-auto"
//                 alt="Diamond Hooves"
//               />
//               <img
//                 className="pointer-events-none z-0 mx-auto aspect-square w-full rounded-lg bg-gray-200"
//                 loading="lazy"
//                 src="https://ik.imagekit.io/llh50zxqb/images/projects/duckysquad.jpeg?tr=w-200,h-200,c-maintain_ratio,f-auto"
//                 alt="Ducky Squad"
//               />
//               <img
//                 className="pointer-events-none z-0 mx-auto aspect-square w-full rounded-lg bg-gray-200"
//                 loading="lazy"
//                 src="https://ik.imagekit.io/llh50zxqb/images/projects/umiverse.png?tr=w-200,h-200,c-maintain_ratio,f-auto"
//                 alt="Umiverse"
//               />
//             </div>
//             <div className="mt-10 flex flex-col gap-5">
//               <img
//                 className="pointer-events-none z-0 mx-auto aspect-square w-full rounded-lg bg-gray-200"
//                 loading="lazy"
//                 src="https://ik.imagekit.io/llh50zxqb/images/projects/podium.png?tr=w-200,h-200,c-maintain_ratio,f-auto"
//                 alt="Podium"
//               />
//               <img
//                 className="pointer-events-none z-0 mx-auto aspect-square w-full rounded-lg bg-gray-200"
//                 loading="lazy"
//                 src="https://ik.imagekit.io/llh50zxqb/images/projects/fengya.jpeg?tr=w-200,h-200,c-maintain_ratio,f-auto"
//                 alt="Fengya"
//               />
//               <img
//                 className="pointer-events-none z-0 mx-auto aspect-square w-full rounded-lg bg-gray-200"
//                 loading="lazy"
//                 src="https://ik.imagekit.io/llh50zxqb/images/projects/ElephrensNFT.jpeg?tr=w-200,h-200,c-maintain_ratio,f-auto"
//                 alt="Elephrens NFT"
//               />
//               <img
//                 className="pointer-events-none z-0 mx-auto aspect-square w-full rounded-lg bg-gray-200"
//                 loading="lazy"
//                 src="https://ik.imagekit.io/llh50zxqb/images/projects/CryptSocialClub.jpeg?tr=w-200,h-200,c-maintain_ratio,f-auto"
//                 alt="Crypt Social Club"
//               />
//               <img
//                 className="pointer-events-none z-0 mx-auto aspect-square w-full rounded-lg bg-gray-200"
//                 loading="lazy"
//                 src="https://ik.imagekit.io/llh50zxqb/images/projects/catcivilization.png?tr=w-200,h-200,c-maintain_ratio,f-auto"
//                 alt="Cat Civilization"
//               />
//               <img
//                 className="pointer-events-none z-0 mx-auto aspect-square w-full rounded-lg bg-gray-200"
//                 loading="lazy"
//                 src="https://ik.imagekit.io/llh50zxqb/images/projects/SanguineDisciples.png?tr=w-200,h-200,c-maintain_ratio,f-auto"
//                 alt="Sanguine Disciples"
//               />
//               <img
//                 className="pointer-events-none z-0 mx-auto aspect-square w-full rounded-lg bg-gray-200"
//                 loading="lazy"
//                 src="https://ik.imagekit.io/llh50zxqb/images/projects/Froots.png?tr=w-200,h-200,c-maintain_ratio,f-auto"
//                 alt="Froots"
//               />
//               <img
//                 className="pointer-events-none z-0 mx-auto aspect-square w-full rounded-lg bg-gray-200"
//                 loading="lazy"
//                 src="https://ik.imagekit.io/llh50zxqb/images/projects/boreddoodleape.jpeg?tr=w-200,h-200,c-maintain_ratio,f-auto"
//                 alt="Bored Doodlapes"
//               />
//               <img
//                 className="pointer-events-none z-0 mx-auto aspect-square w-full rounded-lg bg-gray-200"
//                 loading="lazy"
//                 src="https://ik.imagekit.io/llh50zxqb/images/projects/thelostape.jpeg?tr=w-200,h-200,c-maintain_ratio,f-auto"
//                 alt="The Lost Ape"
//               />
//               <img
//                 className="pointer-events-none z-0 mx-auto aspect-square w-full rounded-lg bg-gray-200"
//                 loading="lazy"
//                 src="https://ik.imagekit.io/llh50zxqb/images/projects/Scremlins.png?tr=w-200,h-200,c-maintain_ratio,f-auto"
//                 alt="Scremlins"
//               />
//               <img
//                 className="pointer-events-none z-0 mx-auto aspect-square w-full rounded-lg bg-gray-200"
//                 loading="lazy"
//                 src="https://ik.imagekit.io/llh50zxqb/images/projects/boardgamers.png?tr=w-200,h-200,c-maintain_ratio,f-auto"
//                 alt="Board Gamers"
//               />
//               <img
//                 className="pointer-events-none z-0 mx-auto aspect-square w-full rounded-lg bg-gray-200"
//                 loading="lazy"
//                 src="https://ik.imagekit.io/llh50zxqb/images/projects/thepopulars.jpeg?tr=w-200,h-200,c-maintain_ratio,f-auto"
//                 alt="THE POPULARS"
//               />
//             </div>
//             <div className="flex flex-col gap-5">
//               <img
//                 className="pointer-events-none z-0 mx-auto aspect-square w-full rounded-lg bg-gray-200"
//                 loading="lazy"
//                 src="https://ik.imagekit.io/llh50zxqb/images/projects/TheAfricans.jpeg?tr=w-200,h-200,c-maintain_ratio,f-auto"
//                 alt="The Africans"
//               />
//               <img
//                 className="pointer-events-none z-0 mx-auto aspect-square w-full rounded-lg bg-gray-200"
//                 loading="lazy"
//                 src="https://ik.imagekit.io/llh50zxqb/images/projects/SecretLabz.png?tr=w-200,h-200,c-maintain_ratio,f-auto"
//                 alt="SecretLabz"
//               />
//               <img
//                 className="pointer-events-none z-0 mx-auto aspect-square w-full rounded-lg bg-gray-200"
//                 loading="lazy"
//                 src="https://ik.imagekit.io/llh50zxqb/images/projects/metamouse.png?tr=w-200,h-200,c-maintain_ratio,f-auto"
//                 alt="Meta Mouse"
//               />
//               <img
//                 className="pointer-events-none z-0 mx-auto aspect-square w-full rounded-lg bg-gray-200"
//                 loading="lazy"
//                 src="https://ik.imagekit.io/llh50zxqb/images/projects/KamaChameleons.jpeg?tr=w-200,h-200,c-maintain_ratio,f-auto"
//                 alt="Kama Chameleons"
//               />
//               <img
//                 className="pointer-events-none z-0 mx-auto aspect-square w-full rounded-lg bg-gray-200"
//                 loading="lazy"
//                 src="https://ik.imagekit.io/llh50zxqb/images/projects/funga.jpeg?tr=w-200,h-200,c-maintain_ratio,f-auto"
//                 alt="Funga &amp; Friends"
//               />
//               <img
//                 className="pointer-events-none z-0 mx-auto aspect-square w-full rounded-lg bg-gray-200"
//                 loading="lazy"
//                 src="https://ik.imagekit.io/llh50zxqb/images/projects/MightyPirates.jpeg?tr=w-200,h-200,c-maintain_ratio,f-auto"
//                 alt="Mighty Pirates"
//               />
//               <img
//                 className="pointer-events-none z-0 mx-auto aspect-square w-full rounded-lg bg-gray-200"
//                 loading="lazy"
//                 src="https://ik.imagekit.io/llh50zxqb/images/projects/selphy.jpeg?tr=w-200,h-200,c-maintain_ratio,f-auto"
//                 alt="Selphy"
//               />
//               <img
//                 className="pointer-events-none z-0 mx-auto aspect-square w-full rounded-lg bg-gray-200"
//                 loading="lazy"
//                 src="https://ik.imagekit.io/llh50zxqb/images/projects/ZConnectibles.jpeg?tr=w-200,h-200,c-maintain_ratio,f-auto"
//                 alt="Z Connectibles"
//               />
//               <img
//                 className="pointer-events-none z-0 mx-auto aspect-square w-full rounded-lg bg-gray-200"
//                 loading="lazy"
//                 src="https://ik.imagekit.io/llh50zxqb/images/projects/deadbears.png?tr=w-200,h-200,c-maintain_ratio,f-auto"
//                 alt="Dead Bears"
//               />
//               <img
//                 className="pointer-events-none z-0 mx-auto aspect-square w-full rounded-lg bg-gray-200"
//                 loading="lazy"
//                 src="https://ik.imagekit.io/llh50zxqb/images/projects/elftown.jpeg?tr=w-200,h-200,c-maintain_ratio,f-auto"
//                 alt="Elftown"
//               />
//               <img
//                 className="pointer-events-none z-0 mx-auto aspect-square w-full rounded-lg bg-gray-200"
//                 loading="lazy"
//                 src="https://ik.imagekit.io/llh50zxqb/images/projects/ZeroHeros.png?tr=w-200,h-200,c-maintain_ratio,f-auto"
//                 alt="Zero Heros"
//               />
//             </div>
//           </div>
//         </div>
//         <div className="w-full bg-gray-800 px-6 py-6 text-white lg:px-14 lg:py-0 2xl:px-20">
//           <a className="block lg:hidden" href="/">
//             <span
//               className="relative m-0 box-border inline-block max-w-full overflow-hidden p-0"
//               style={{
//                 width: 'initial',
//                 background: 'none',
//                 opacity: '1',
//                 border: '0'
//               }}>
//               <span
//                 className="m-0 box-border block max-w-full p-0"
//                 style={{
//                   width: 'initial',
//                   height: 'initial',
//                   background: 'none',
//                   opacity: '1',
//                   border: '0'
//                 }}>
//                 <img
//                   className="block max-w-full"
//                   style={{
//                     width: 'initial',
//                     height: 'initial',
//                     background: 'none',
//                     opacity: '1',
//                     border: '0',
//                     margin: '0',
//                     padding: '0'
//                   }}
//                   alt=""
//                   aria-hidden="true"
//                   src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27200%27%20height=%2740%27/%3e"
//                 />
//               </span>
//               <img
//                 className="absolute box-border"
//                 alt="OneMint Logo"
//                 src="/_next/image?url=%2Fimages%2FOneMintLogoWhite.png&amp,w=640&amp,q=75"
//                 decoding="async"
//                 data-nimg="intrinsic"
//                 style={{
//                   top: '0',
//                   left: '0',
//                   bottom: '0',
//                   right: '0',
//                   padding: '0',
//                   border: 'none',
//                   margin: 'auto',
//                   display: 'block',
//                   width: '0',
//                   height: '0',
//                   minWidth: '100%',
//                   maxWidth: '100%',
//                   minHeight: '100%',
//                   maxHeight: '100%'
//                 }}
//                 srcSet="/_next/image?url=%2Fimages%2FOneMintLogoWhite.png&amp,
//                                 w=256&amp,
//                                 q=75 1x, /_next/image?url=%2Fimages%2FOneMintLogoWhite.png&amp,
//                                 w=640&amp,
//                                 q=75 2x"
//               />
//             </span>
//           </a>
//           <div className="mt-10 flex h-full w-full flex-col gap-3 lg:!mt-[12vh] lg:mt-[18vh] lg:w-fit lg:max-w-[700px]">
//             <div className="!space-y-1">
//               <div className="flex items-center gap-2">
//                 <h2 className="text-3xl font-bold lg:text-4xl">Connect wallet</h2>
//               </div>
//               <p className="text-md font-medium text-gray-400">
//                 Choose how you want to connect. There are several providers.
//               </p>
//               {/* 선택되면 text-white, tabIndex=0, aria-selected=true, data-headlessui-state=selected*/}
//             </div>
//             {/* <div className="w-full space-x-2 border-b border-gray-400" role="tablist" aria-orientation="horizontal"> */}
//             <Wallet />
//             {/* <button
//                 className="relative -mb-px p-2 text-sm font-medium text-gray-400 hover:text-white focus:outline-none focus:ring-0 active:outline-none active:ring-0"
//                 id="headlessui-tabs-tab-1"
//                 role="tab"
//                 type="button"
//                 aria-selected="false"
//                 tabIndex={-1}
//                 data-headlessui-state=""
//                 aria-controls="headlessui-tabs-panel-5">
//                 <span>Ethereum</span>
//               </button>
//               <button
//                 className="relative -mb-px p-2 text-sm font-medium text-gray-400 hover:text-white focus:outline-none focus:ring-0 active:outline-none active:ring-0"
//                 id="headlessui-tabs-tab-2"
//                 role="tab"
//                 type="button"
//                 aria-selected="false"
//                 tabIndex={-1}
//                 data-headlessui-state=""
//                 aria-controls="headlessui-tabs-panel-6">
//                 <span>Solana</span>
//               </button>
//               <button
//                 className="relative -mb-px p-2 text-sm font-medium text-gray-400 hover:text-white focus:outline-none focus:ring-0 active:outline-none active:ring-0"
//                 id="headlessui-tabs-tab-3"
//                 role="tab"
//                 type="button"
//                 aria-selected="false"
//                 tabIndex={-1}
//                 data-headlessui-state=""
//                 aria-controls="headlessui-tabs-panel-7">
//                 <span>MultiversX</span>
//               </button>
//               <button
//                 className="relative -mb-px p-2 text-sm font-medium text-white hover:text-white focus:outline-none focus:ring-0 active:outline-none active:ring-0"
//                 id="headlessui-tabs-tab-4"
//                 role="tab"
//                 type="button"
//                 aria-selected="true"
//                 tabIndex={0}
//                 data-headlessui-state="selected"
//                 aria-controls="headlessui-tabs-panel-8">
//                 <span>Polygon</span>
//                 <span className="absolute inset-x-0 bottom-0 h-[3px] rounded-md bg-white"></span>
//               </button> */}
//             {/* </div> */}
//             {/* <div className="mt-4 ">
//               <span
//                 id="headlessui-tabs-panel-5"
//                 role="tabpanel"
//                 aria-labelledby="headlessui-tabs-tab-1"
//                 tabIndex={-1}
//                 style={{
//                   position: 'fixed',
//                   top: '1px',
//                   left: '1px',
//                   width: '1px',
//                   height: '0px',
//                   padding: '0px',
//                   margin: '-1px',
//                   overflow: 'hidden',
//                   clip: 'rect(0px, 0px, 0px, 0px)',
//                   whiteSpace: 'nowrap',
//                   borderWidth: '0px'
//                 }}></span>
//               <span
//                 id="headlessui-tabs-panel-6"
//                 role="tabpanel"
//                 aria-labelledby="headlessui-tabs-tab-2"
//                 tabIndex={-1}
//                 style={{
//                   position: 'fixed',
//                   top: '1px',
//                   left: '1px',
//                   width: '1px',
//                   height: '0px',
//                   padding: '0px',
//                   margin: '-1px',
//                   overflow: 'hidden',
//                   clip: 'rect(0px, 0px, 0px, 0px)',
//                   whiteSpace: 'nowrap',
//                   borderWidth: '0px'
//                 }}></span>
//               <span
//                 id="headlessui-tabs-panel-7"
//                 role="tabpanel"
//                 aria-labelledby="headlessui-tabs-tab-3"
//                 tabIndex={-1}
//                 style={{
//                   position: 'fixed',
//                   top: '1px',
//                   left: '1px',
//                   width: '1px',
//                   height: '0px',
//                   padding: '0px',
//                   margin: '-1px',
//                   overflow: 'hidden',
//                   clip: 'rect(0px, 0px, 0px, 0px)',
//                   whiteSpace: 'nowrap',
//                   borderWidth: '0px'
//                 }}></span>
//               <div
//                 id="headlessui-tabs-panel-8"
//                 role="tabpanel"
//                 aria-labelledby="headlessui-tabs-tab-4"
//                 tabIndex={0}
//                 data-headlessui-state="selected">
//                 <div className="flex w-full flex-col gap-3">
//                   <MetaMask />
//                   <WalletConnect />
//                   <CoinbaseWallet />
//                   <Phantom />
//                   <MultiversX />
//                   {/* <button
//                     type="button"
//                     className="flex items-center gap-3 rounded-xl border border-gray-600 bg-transparent p-3 text-sm font-semibold text-white active:bg-gray-600 disabled:cursor-not-allowed disabled:opacity-60">
//                     <span
//                       style={{
//                         boxSizing: 'border-box',
//                         display: 'inline-block',
//                         overflow: 'hidden',
//                         width: 'initial',
//                         height: 'initial',
//                         background: 'none',
//                         opacity: '1',
//                         border: '0px',
//                         margin: '0px',
//                         padding: '0px',
//                         position: 'relative',
//                         maxWidth: '100%'
//                       }}>
//                       <span
//                         style={{
//                           boxSizing: 'border-box',
//                           display: 'block',
//                           width: 'initial',
//                           height: 'initial',
//                           background: 'none',
//                           opacity: '1',
//                           border: '0px',
//                           margin: '0px',
//                           padding: '0px',
//                           maxWidth: '100%'
//                         }}>
//                         <img
//                           alt=""
//                           aria-hidden="true"
//                           src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2726%27%20height=%2726%27/%3e"
//                           style={{
//                             display: 'block',
//                             maxWidth: '100%',
//                             width: 'initial',
//                             height: 'initial',
//                             background: 'none',
//                             opacity: '1',
//                             border: '0px',
//                             margin: '0px',
//                             padding: '0px'
//                           }}
//                         />
//                       </span>

//                       {/* <Image
//                         alt="Ethereum"
//                         sizes="apps/web/public/images/MetaMask.svg 1x, apps/web/public/images/MetaMask.svg 2x"
//                         src={metaMaskImage}
//                         decoding="async"
//                         data-nimg="intrinsic"
//                         className="drop-shadow-sm"
//                         style={{
//                           position: 'absolute',
//                           inset: '0px',
//                           boxSizing: 'border-box',
//                           padding: '0px',
//                           border: 'none',
//                           margin: 'auto',
//                           display: 'block',
//                           width: '0px',
//                           height: '0px',
//                           minWidth: '100%',
//                           maxWidth: '100%',
//                           minHeight: '100%',
//                           maxHeight: '100%'
//                         }}
//                       />
//                     </span>
//                     <span>MetaMask</span>
//                   </button> */}
//                   {/* <button
//                     type="button"
//                     className="flex items-center gap-3 rounded-xl border border-gray-600 bg-transparent p-3 text-sm font-semibold text-white active:bg-gray-600 disabled:cursor-not-allowed disabled:opacity-60">
//                     <span
//                       style={{
//                         boxSizing: 'border-box',
//                         display: 'inline-block',
//                         overflow: 'hidden',
//                         width: 'initial',
//                         height: 'initial',
//                         background: 'none',
//                         opacity: '1',
//                         border: '0px',
//                         margin: '0px',
//                         padding: '0px',
//                         position: 'relative',
//                         maxWidth: '100%'
//                       }}>
//                       <span
//                         style={{
//                           boxSizing: 'border-box',
//                           display: 'block',
//                           width: 'initial',
//                           height: 'initial',
//                           background: 'none',
//                           opacity: '1',
//                           border: '0px',
//                           margin: '0px',
//                           padding: '0px',
//                           maxWidth: '100%'
//                         }}>
//                         <img
//                           alt=""
//                           aria-hidden="true"
//                           src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2726%27%20height=%2726%27/%3e"
//                           style={{
//                             display: 'block',
//                             maxWidth: '100%',
//                             width: 'initial',
//                             height: 'initial',
//                             background: 'none',
//                             opacity: '1',
//                             border: '0px',
//                             margin: '0px',
//                             padding: '0px'
//                           }}
//                         />
//                       </span>
//                       <Image
//                         alt="Ethereum"
//                         sizes="/images/wallets/wallet-connect.svg 1x, /images/wallets/wallet-connect.svg 2x"
//                         src={walletConnectImage}
//                         decoding="async"
//                         data-nimg="intrinsic"
//                         style={{
//                           position: 'absolute',
//                           inset: '0px',
//                           boxSizing: 'border-box',
//                           padding: '0px',
//                           border: 'none',
//                           margin: 'auto',
//                           display: 'block',
//                           width: '0px',
//                           height: '0px',
//                           minWidth: '100%',
//                           maxWidth: '100%',
//                           minHeight: '100%',
//                           maxHeight: '100%'
//                         }}
//                       />
//                     </span>
//                     <span>WalletConnect</span>
//                   </button> */}
//                   {/* <button
//                     type="button"
//                     className="flex items-center gap-3 rounded-xl border border-gray-600 bg-transparent p-3 text-sm font-semibold text-white active:bg-gray-600 disabled:cursor-not-allowed disabled:opacity-60">
//                     <span
//                       style={{
//                         boxSizing: 'border-box',
//                         display: 'inline-block',
//                         overflow: 'hidden',
//                         width: 'initial',
//                         height: 'initial',
//                         background: 'none',
//                         opacity: '1',
//                         border: '0px',
//                         margin: '0px',
//                         padding: '0px',
//                         position: 'relative',
//                         maxWidth: '100%'
//                       }}>
//                       <span
//                         style={{
//                           boxSizing: 'border-box',
//                           display: 'block',
//                           width: 'initial',
//                           height: 'initial',
//                           background: 'none',
//                           opacity: '1',
//                           border: '0px',
//                           margin: '0px',
//                           padding: '0px',
//                           maxWidth: '100%'
//                         }}>
//                         <img
//                           alt=""
//                           aria-hidden="true"
//                           src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2726%27%20height=%2726%27/%3e"
//                           style={{
//                             display: 'block',
//                             maxWidth: '100%',
//                             width: 'initial',
//                             height: 'initial',
//                             background: 'none',
//                             opacity: '1',
//                             border: '0px',
//                             margin: '0px',
//                             padding: '0px'
//                           }}
//                         />
//                       </span>
//                       <Image
//                         alt="Ethereum"
//                         sizes="/images/wallets/coinbase.svg 1x, /images/wallets/coinbase.svg 2x"
//                         src={coinbaseImage}
//                         decoding="async"
//                         data-nimg="intrinsic"
//                         style={{
//                           position: 'absolute',
//                           inset: '0px',
//                           boxSizing: 'border-box',
//                           padding: '0px',
//                           border: 'none',
//                           margin: 'auto',
//                           display: 'block',
//                           width: '0px',
//                           height: '0px',
//                           minWidth: '100%',
//                           maxWidth: '100%',
//                           minHeight: '100%',
//                           maxHeight: '100%'
//                         }}
//                       />
//                     </span>
//                     <span>Coinbase Wallet</span>
//                   </button> */}

//             <div className="flex items-center justify-center gap-3 px-1">
//               <span className="w-full border-t border-gray-400"></span>
//               <p className="text-gray-300">Or</p>
//               <span className="w-full border-t border-gray-400"></span>
//             </div>
//             <Auth />
//           </div></div></div></div>

// }
