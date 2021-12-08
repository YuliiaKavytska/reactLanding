import React, { FC } from 'react'

import { CustomBurger, Line } from './styled'

interface IBurger {
  active: boolean
  toggleActive: () => void
}

export const Burger: FC<IBurger> = ({ active, toggleActive }) => {
  return (
    <CustomBurger active={active} onClick={toggleActive}>
      <Line />
      <Line />
      <Line />
    </CustomBurger>
  )
}

export default Burger
