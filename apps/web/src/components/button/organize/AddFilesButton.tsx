import Arrow from '@/components/Images/Arrow'
import { useUploadBoxOpen } from '@/store/store'
import Button from './IndexCaptionButton'

const AddFileButton = () => {
  const { open, toggleOpen } = useUploadBoxOpen()

  return (
    <Button onClick={toggleOpen}>
      <Arrow onclick={open} />
      <span>Add Files</span>
    </Button>
  )
}

export default AddFileButton
