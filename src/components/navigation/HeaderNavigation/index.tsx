import React from 'react'

import styled from 'styled-components'

import { Item } from 'components/navigation/Header/styled'

const Navigation = styled.ul`
  display: flex;
  height: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`

export const HeaderNavigation = () => {
  return (
    <Navigation>
      <Item>Home</Item>
      <Item>Product</Item>
      <Item>Pricing</Item>
      <Item>Contact</Item>
    </Navigation>
  )
}

export default HeaderNavigation
