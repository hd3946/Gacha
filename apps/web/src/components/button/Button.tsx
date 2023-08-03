import { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from 'react'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  // variant: 'contained' | 'outlined', // 이 부분 추가
  onClick?: MouseEventHandler<HTMLButtonElement>
}

const Button = (props: ButtonProps) => {
  const { children, onClick, ...other } = props

  return (
    <button type="button" onClick={onClick} {...other}>
      {children}
    </button>
  )
}

export default Button
