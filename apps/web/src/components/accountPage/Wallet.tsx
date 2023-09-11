'use client'

import { useState } from 'react'
import CoinbaseWallet from './Wallet/CoinbaseWallet'
import MetaMask from './Wallet/MetaMask'
import MultiversX from './Wallet/Multiversx'
import Phantom from './Wallet/Phantom'
import WalletConnect from './Wallet/WalletConnect'

export default function Wallet() {
  const walletList = [
    { id: 0, name: 'Ethereum' },
    { id: 1, name: 'Solana' },
    { id: 2, name: 'MultiversX' },
    { id: 3, name: 'Polygon' }
  ]
  const [selectedId, setSelectedId] = useState(0)
  const onClickWallet = (id: number) => {
    setSelectedId(id)
  }

  return (
    <div>
      <div className="w-full space-x-2 border-b border-gray-400" role="tablist" aria-orientation="horizontal">
        {walletList.map((wallet) => (
          <button
            className={`relative -mb-px p-2 text-sm font-medium ${
              wallet.id === selectedId ? 'text-white' : 'text-gray-400'
            } hover:text-white focus:outline-none focus:ring-0 active:outline-none active:ring-0`}
            id={`headlessui-tabs-tab-${wallet.id + 1}`}
            role="tab"
            type="button"
            aria-selected={wallet.id === selectedId ? 'true' : 'false'}
            tabIndex={wallet.id === selectedId ? 0 : -1}
            data-headlessui-state={wallet.id === selectedId ? 'selected' : ''}
            aria-controls={`headlessui-tabs-panel-${wallet.id + 5}`}
            onClick={() => onClickWallet(wallet.id)}>
            <span>{wallet.name}</span>
          </button>
        ))}
      </div>
      <div className="mt-4 ">
        <span
          id="headlessui-tabs-panel-5"
          role="tabpanel"
          aria-labelledby="headlessui-tabs-tab-1"
          tabIndex={-1}
          style={{
            position: 'fixed',
            top: '1px',
            left: '1px',
            width: '1px',
            height: '0px',
            padding: '0px',
            margin: '-1px',
            overflow: 'hidden',
            clip: 'rect(0px, 0px, 0px, 0px)',
            whiteSpace: 'nowrap',
            borderWidth: '0px'
          }}></span>
        <span
          id="headlessui-tabs-panel-6"
          role="tabpanel"
          aria-labelledby="headlessui-tabs-tab-2"
          tabIndex={-1}
          style={{
            position: 'fixed',
            top: '1px',
            left: '1px',
            width: '1px',
            height: '0px',
            padding: '0px',
            margin: '-1px',
            overflow: 'hidden',
            clip: 'rect(0px, 0px, 0px, 0px)',
            whiteSpace: 'nowrap',
            borderWidth: '0px'
          }}></span>
        <span
          id="headlessui-tabs-panel-7"
          role="tabpanel"
          aria-labelledby="headlessui-tabs-tab-3"
          tabIndex={-1}
          style={{
            position: 'fixed',
            top: '1px',
            left: '1px',
            width: '1px',
            height: '0px',
            padding: '0px',
            margin: '-1px',
            overflow: 'hidden',
            clip: 'rect(0px, 0px, 0px, 0px)',
            whiteSpace: 'nowrap',
            borderWidth: '0px'
          }}></span>
        <div
          id="headlessui-tabs-panel-8"
          role="tabpanel"
          aria-labelledby="headlessui-tabs-tab-4"
          tabIndex={0}
          data-headlessui-state="selected">
          <div className="flex w-full flex-col gap-3">
            {selectedId === 0 && (
              <>
                <MetaMask />
                <WalletConnect />
                <CoinbaseWallet />
              </>
            )}
            {selectedId === 1 && <Phantom />}
            {selectedId === 2 && <MultiversX />}
            {selectedId === 3 && (
              <>
                <MetaMask />
                <WalletConnect />
                <CoinbaseWallet />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
