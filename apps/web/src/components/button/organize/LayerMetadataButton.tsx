import Arrow from '@/components/images/Arrow'
import { Modal } from '@/components/modal/Index'
import LayerMetadataModal from '@/components/modal/LayerMetadataModal'
import { useState } from 'react'
import Button from './IndexCaptionButton'

const LayerMetadataButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div>
      <Button onClick={openModal}>
        <Arrow onclick={false} />
        <span>Manage</span>
      </Button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <LayerMetadataModal onClose={closeModal} />
      </Modal>
    </div>
  )
}

export default LayerMetadataButton
