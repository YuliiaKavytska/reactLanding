import React, { FC, ReactChildren } from 'react'

import { CustomButton } from './styled'

interface IButton {
  type?: 'button' | 'submit' | 'reset' | undefined
  onClick?: (...args: any) => void
  children: ReactChildren | string
  [key: string]: any
}

const Button: FC<IButton> = ({ type = 'button', onClick, children, ...rest }) => {
  return (
    <CustomButton type={type} onClick={onClick} {...rest}>
      {children}
    </CustomButton>
  )
}

export default Button
