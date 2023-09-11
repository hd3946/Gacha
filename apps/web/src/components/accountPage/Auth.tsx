// 인증방법 Wallet이외 : email,Gmail,Twitter, Discord
import { IoMailOutline } from 'react-icons/io5'
import googleImage from '../../../public/images/account/google.png'

export default function Auth() {
  return (
    <div className="flex w-full flex-col gap-3">
      <button className="flex items-center gap-3 rounded-xl border border-gray-600 bg-transparent p-3 text-sm font-semibold text-white active:bg-gray-600 disabled:cursor-not-allowed disabled:opacity-60">
        <IoMailOutline fontSize="26px" />
        <span>Sign in with email</span>
      </button>
      <button className="flex items-center gap-3 rounded-xl border border-gray-600 bg-transparent p-3 text-sm font-semibold text-white active:bg-gray-600 disabled:cursor-not-allowed disabled:opacity-60">
        <span
          style={{
            boxSizing: 'border-box',
            display: 'inline-block',
            overflow: 'hidden',
            width: 'initial',
            height: 'initial',
            background: 'none',
            opacity: '1',
            border: '0',
            margin: '0',
            padding: '0',
            position: 'relative',
            maxWidth: '100%'
          }}>
          <span
            style={{
              boxSizing: 'border-box',
              display: 'block',
              width: 'initial',
              height: 'initial',
              background: 'none',
              opacity: '1',
              border: '0',
              margin: '0',
              padding: '0',
              maxWidth: '100%'
            }}>
            <img
              style={{
                display: 'block',
                maxWidth: '100%',
                width: 'initial',
                height: 'initial',
                background: 'none',
                opacity: '1',
                border: '0',
                margin: '0',
                padding: '0'
              }}
              alt=""
              aria-hidden="true"
              src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2726%27%20height=%2726%27/%3e"
            />
          </span>
          <img
            alt="Google"
            src="/_next/image?url=https%3A%2F%2Fcdn.nft-generator.art%2Fimages%2Fassets%2Ficons%2Fgoogle.png&amp,w=64&amp,q=75"
            decoding="async"
            data-nimg="intrinsic"
            className="drop-shadow-sm"
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              bottom: '0',
              right: '0',
              boxSizing: 'border-box',
              padding: '0',
              border: 'none',
              margin: 'auto',
              display: 'block',
              width: '0',
              height: '0',
              minWidth: '100%',
              maxWidth: '100%',
              minHeight: '100%',
              maxHeight: '100%'
            }}
            srcSet="/_next/image?url=https%3A%2F%2Fcdn.nft-generator.art%2Fimages%2Fassets%2Ficons%2Fgoogle.png&amp,w=32&amp,q=75 1x, /_next/image?url=https%3A%2F%2Fcdn.nft-generator.art%2Fimages%2Fassets%2Ficons%2Fgoogle.png&amp,w=64&amp,q=75 2x"
          />
          <noscript>
            <img
              src={googleImage}
              alt="Google"
              decoding="async"
              data-nimg="intrinsic"
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                bottom: '0',
                right: '0',
                boxSizing: 'border-box',
                padding: '0',
                border: 'none',
                margin: 'auto',
                display: 'block',
                width: '0',
                height: '0',
                minWidth: '100%',
                maxWidth: '100%',
                minHeight: '100%',
                maxHeight: '100%'
              }}
              className="drop-shadow-sm"
              loading="lazy"
            />
          </noscript>
        </span>
        <span>Sign in with Google</span>
      </button>
      <button className="flex items-center gap-3 rounded-xl border border-gray-600 bg-transparent p-3 text-sm font-semibold text-white active:bg-gray-600 disabled:cursor-not-allowed disabled:opacity-60">
        <span
          style={{
            boxSizing: 'border-box',
            display: 'inline-block',
            overflow: 'hidden',
            width: 'initial',
            height: 'initial',
            background: 'none',
            opacity: '1',
            border: '0',
            margin: '0',
            padding: '0',
            position: 'relative',
            maxWidth: '100%'
          }}>
          <span
            style={{
              boxSizing: 'border-box',
              display: 'block',
              width: 'initial',
              height: 'initial',
              background: 'none',
              opacity: '1',
              border: '0',
              margin: '0',
              padding: '0',
              maxWidth: '100%'
            }}>
            <img
              style={{
                display: 'block',
                maxWidth: '100%',
                width: 'initial',
                height: 'initial',
                background: 'none',
                opacity: '1',
                border: '0',
                margin: '0',
                padding: '0'
              }}
              alt=""
              aria-hidden="true"
              src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2726%27%20height=%2726%27/%3e"
            />
          </span>
          <img
            alt="Twitter"
            src="https://cdn.nft-generator.art/images/assets/icons/twitter.svg"
            decoding="async"
            data-nimg="intrinsic"
            className="drop-shadow-sm"
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              bottom: '0',
              right: '0',
              boxSizing: 'border-box',
              padding: '0',
              border: 'none',
              margin: 'auto',
              display: 'block',
              width: '0',
              height: '0',
              minWidth: '100%',
              maxWidth: '100%',
              minHeight: '100%',
              maxHeight: '100%'
            }}
            srcSet="https://cdn.nft-generator.art/images/assets/icons/twitter.svg 1x, https://cdn.nft-generator.art/images/assets/icons/twitter.svg 2x"
          />
        </span>
        <span>Sign in with Twitter</span>
      </button>
      <button className="flex items-center gap-3 rounded-xl border border-gray-600 bg-transparent p-3 text-sm font-semibold text-white active:bg-gray-600 disabled:cursor-not-allowed disabled:opacity-60">
        <span
          style={{
            boxSizing: 'border-box',
            display: 'inline-block',
            overflow: 'hidden',
            width: 'initial',
            height: 'initial',
            background: 'none',
            opacity: '1',
            border: '0',
            margin: '0',
            padding: '0',
            position: 'relative',
            maxWidth: '100%'
          }}>
          <span
            style={{
              boxSizing: 'border-box',
              display: 'block',
              width: 'initial',
              height: 'initial',
              background: 'none',
              opacity: '1',
              border: '0',
              margin: '0',
              padding: '0',
              maxWidth: '100%'
            }}>
            <img
              style={{
                display: 'block',
                maxWidth: '100%',
                width: 'initial',
                height: 'initial',
                background: 'none',
                opacity: '1',
                border: '0',
                margin: '0',
                padding: '0'
              }}
              alt=""
              aria-hidden="true"
              src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2726%27%20height=%2726%27/%3e"
            />
          </span>
          <img
            alt="Discord"
            src="https://cdn.nft-generator.art/images/assets/icons/discord.svg"
            decoding="async"
            data-nimg="intrinsic"
            className="drop-shadow-sm"
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              bottom: '0',
              right: '0',
              boxSizing: 'border-box',
              padding: '0',
              border: 'none',
              margin: 'auto',
              display: 'block',
              width: '0',
              height: '0',
              minWidth: '100%',
              maxWidth: '100%',
              minHeight: '100%',
              maxHeight: '100%'
            }}
            srcSet="https://cdn.nft-generator.art/images/assets/icons/discord.svg 1x, https://cdn.nft-generator.art/images/assets/icons/discord.svg 2x"
          />
        </span>
        <span>Sign in with Discord</span>
      </button>
    </div>
  )
}
