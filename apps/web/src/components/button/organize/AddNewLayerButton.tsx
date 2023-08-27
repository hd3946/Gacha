import AddNewLayerModal from '@/components/modal/AddNewLayerModal'
import { Modal } from '@/components/modal/Index'
import { useState } from 'react'
import { IoAddCircleOutline } from 'react-icons/io5'

const AddNewLayerButton = () => {
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
        className="flex items-center p-0.5 text-gray-500 hover:!text-cyan-400 dark:text-white">
        <IoAddCircleOutline role="img" />
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <AddNewLayerModal onClose={closeModal} />
      </Modal>
    </div>
  )
}

export default AddNewLayerButton
