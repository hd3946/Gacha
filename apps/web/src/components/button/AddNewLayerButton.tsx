import { IonIcon } from '@ionic/react'
import { addCircleOutline } from 'ionicons/icons'
import { useState } from 'react'
import AddNewLayerModal from '../modal/AddNewLayerModal'
import { Modal } from '../modal/Index'

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
        <IonIcon icon={addCircleOutline} role="img" />
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <AddNewLayerModal onClose={closeModal} />
      </Modal>
    </div>
  )
}

export default AddNewLayerButton
