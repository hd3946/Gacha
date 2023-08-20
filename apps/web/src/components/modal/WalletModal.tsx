import useMounted from '@/hooks/useMouted'
import Image from 'next/image'
import { MouseEvent } from 'react'
import { useConnect } from 'wagmi'

const WalletModal = ({ onClose }: { onClose: (event: MouseEvent<HTMLDivElement>) => void }) => {
  const { connect, connectors } = useConnect()

  if (!useMounted) {
    return null
  }

  return (
    <div onClick={onClose}>
      {/* Main modal */}
      <div
        id="crypto-modal"
        aria-hidden="true"
        className="h-[calc(100%-1rem)] max-h-full w-full overflow-y-auto overflow-x-hidden p-4 md:inset-0">
        <div className="relative max-h-full w-full max-w-md">
          {/* Modal content */}
          <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
            <button
              type="button"
              className="absolute right-2.5 top-3 ml-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="crypto-modal">
              <svg
                className="h-3 w-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            {/* Modal header  */}
            <div className="rounded-t border-b px-6 py-4 dark:border-gray-600">
              <h3 className="text-base font-semibold text-gray-900 dark:text-white lg:text-xl">Connect wallet</h3>
            </div>
            {/* Modal body */}
            <div className="p-6">
              <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                Connect with one of our available wallet providers or create a new one.
              </p>
              <ul className="my-4 space-y-3">
                {connectors.map((connector) => (
                  <li key={connector.id}>
                    <button
                      disabled={!connector.ready}
                      onClick={() => connect({ connector })}
                      className="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 
                     hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500">
                      {!connector.ready && '(unsupported)'}
                      {connector.id === 'metaMask' && (
                        <Image src="/images/MetaMask.svg" alt="MetaMask" width={20} height={20} />
                      )}
                      {connector.id === 'walletConnect' && (
                        <Image src="/images/WalletConnect.svg" alt="WalletConnect" width={20} height={20} />
                      )}
                      {connector.id === 'coinbaseWallet' && (
                        <Image src="/images/CoinBaseWallet.svg" alt="CoinBaseWallet" width={20} height={20} />
                      )}
                      <span className="ml-3 flex-1 whitespace-nowrap">{connector.name}</span>
                      {connector.id === 'metaMask' && (
                        <span className="ml-3 inline-flex items-center justify-center rounded bg-gray-200 px-2 py-0.5 text-xs font-medium text-gray-500 dark:bg-gray-700 dark:text-gray-400">
                          Popular
                        </span>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
              <div>
                <a
                  href="#"
                  className="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400">
                  <Image src="/images/QuestionMark.svg" width={10} height={10} alt="question" />
                  Why do I need to connect with my wallet?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WalletModal
