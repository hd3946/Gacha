import { useState } from 'react'
import { Modal } from '../modal/Index'
import WalletModal from '../modal/WalletModal'

const WalletButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div>
      <button
        type="button"
        onClick={openModal}
        data-modal-target="crypto-modal"
        data-modal-toggle="crypto-modal"
        className="inline-flex items-center rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-center text-sm font-medium 
        text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:bg-slate-800 
        dark:text-gray-400 dark:hover:bg-slate-700 dark:focus:ring-gray-600 
        ">
        <svg
          aria-hidden="true"
          className="mr-2 h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
        </svg>
        Connect wallet
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <WalletModal onClose={closeModal} />
      </Modal>
    </div>
  )
}

export default WalletButton
