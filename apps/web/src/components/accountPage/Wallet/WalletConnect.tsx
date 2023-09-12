import Image from 'next/image'
import walletConnectImage from '../../../../public/images/account/WalletConnect.svg'

export default function WalletConnect() {
  return (
    <div className="flex w-full flex-col gap-3">
      <button
        type="button"
        className="flex items-center gap-3 rounded-xl border border-gray-600 bg-transparent p-3 text-sm font-semibold text-white active:bg-gray-600 disabled:cursor-not-allowed disabled:opacity-60">
        <span
          style={{
            boxSizing: 'border-box',
            display: 'inline-block',
            overflow: 'hidden',
            width: 'initial',
            height: 'initial',
            background: 'none',
            opacity: '1',
            border: '0px',
            margin: '0px',
            padding: '0px',
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
              border: '0px',
              margin: '0px',
              padding: '0px',
              maxWidth: '100%'
            }}>
            <img
              alt=""
              aria-hidden="true"
              src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2726%27%20height=%2726%27/%3e"
              style={{
                display: 'block',
                maxWidth: '100%',
                width: 'initial',
                height: 'initial',
                background: 'none',
                opacity: '1',
                border: '0px',
                margin: '0px',
                padding: '0px'
              }}
            />
          </span>
          <Image
            alt="Ethereum"
            sizes="/images/wallets/wallet-connect.svg 1x, /images/wallets/wallet-connect.svg 2x"
            src={walletConnectImage}
            decoding="async"
            data-nimg="intrinsic"
            style={{
              position: 'absolute',
              inset: '0px',
              boxSizing: 'border-box',
              padding: '0px',
              border: 'none',
              margin: 'auto',
              display: 'block',
              width: '0px',
              height: '0px',
              minWidth: '100%',
              maxWidth: '100%',
              minHeight: '100%',
              maxHeight: '100%'
            }}
          />
        </span>
        <span>WalletConnect</span>
      </button>
    </div>
  )
}
