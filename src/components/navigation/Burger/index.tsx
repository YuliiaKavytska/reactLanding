import React, { FC } from 'react'

import { CustomBurger, Line } from './styled'

interface IBurger {
  active: boolean
  toggleActive: () => void
  darken: number
}

export const Burger: FC<IBurger> = ({ active, toggleActive, darken }) => {
  return (
    <CustomBurger active={active} onClick={toggleActive} darken={darken}>
      <Line />
      <Line />
      <Line />
    </CustomBurger>
  )
}

export default Burger
