import { MouseEvent, ReactNode } from 'react'

interface ModalButtonProps {
  isOpen: boolean
  onClose: (event: MouseEvent<HTMLDivElement>) => void
  children: ReactNode | ReactNode[]
}

export const Modal = ({ isOpen, onClose, children }: ModalButtonProps) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}
