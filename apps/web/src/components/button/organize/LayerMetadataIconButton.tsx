import { Modal } from '@/components/modal/Index'
import LayerMetadataModal from '@/components/modal/LayerMetadataModal'
import { useState } from 'react'
import { IoSettingsOutline } from 'react-icons/io5'
import IndexLayerButton from './IndexLayerButton'


const LayerMetadataIconButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }
  return (
    <div>
      <IndexLayerButton onClick={openModal} className="flex items-center">
        <IoSettingsOutline role="img" />
      </IndexLayerButton>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <LayerMetadataModal onClose={closeModal} />
      </Modal>
    </div>
  )
}

export default LayerMetadataIconButton
