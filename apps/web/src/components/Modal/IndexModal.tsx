export const Modal = ({ isOpen, onClose, children }: any) => {
  if (!isOpen) return null

  return (
    <div className="fixed left-0 right-0 top-0 z-50 hidden">
      <div className="modal">
        <div className="modal-content">{children}</div>
        <button className="modal-close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  )
}
