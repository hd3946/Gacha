import { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from 'react'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  onClick?: MouseEventHandler<HTMLButtonElement>
}

const IndexLayerButton = (props: ButtonProps) => {
  const { children, onClick, ...other } = props

  return (
    <button type="button" onClick={onClick} {...other} className="">
      {children}
    </button>
  )
}

export default IndexLayerButton
