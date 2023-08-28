import { Modal } from '@/components/modal/Index'
import LayerMetadataModal from '@/components/modal/LayerMetadataModal'
import { useState } from 'react'
import { IoSettingsOutline } from 'react-icons/io5'
import Button from './IndexCaptionButton'

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
      <Button onClick={openModal} className="flex items-center">
        <IoSettingsOutline role="img" className="md hydrated" aria-label="settings outline" />
      </Button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <LayerMetadataModal onClose={closeModal} />
      </Modal>
    </div>
  )
}

export default LayerMetadataIconButton
