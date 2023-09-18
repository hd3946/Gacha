import { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from 'react'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  // variant: 'contained' | 'outlined', // 이 부분 추가
  onClick?: MouseEventHandler<HTMLButtonElement>
}

const IndexCaptionButton = (props: ButtonProps) => {
  const { children, onClick, ...other } = props

  return (
    <button
      type="button"
      onClick={onClick}
      {...other}
      className="text-bray-400 my-auto flex items-center rounded-full bg-gray-500/20 
        px-3 py-1 text-xs font-medium leading-5 hover:bg-gray-500/50">
      {children}
    </button>
  )
}

export default IndexCaptionButton
