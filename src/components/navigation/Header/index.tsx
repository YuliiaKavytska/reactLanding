import React, { useEffect } from 'react'
import { useLockBodyScroll, useToggle, useWindowScroll, useWindowSize } from 'react-use'

import { Container } from 'components/containers/Container/styled'

import { ReactComponent as Logo } from 'assets/images/common/logo.svg'

import Burger from '../Burger'

import { HeaderContainer, Item, LogoLink, Navigation, NavigationList, SideNavigation, StyledHeader } from './styled'

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

const Header = () => {
  const [active, toggleActive] = useToggle(false)
  const { width, height } = useWindowSize()
  const { x, y } = useWindowScroll()
  useLockBodyScroll(active)

  useEffect(() => {
    toggleActive(false)
  }, [width, height])

  return (
    <StyledHeader active={active} darken={y}>
      <Container>
        <HeaderContainer>
          <LogoLink to="/">
            <Logo />
          </LogoLink>
          <NavigationList>
            <HeaderNavigation />
          </NavigationList>
          <Burger active={active} toggleActive={toggleActive} />
        </HeaderContainer>
      </Container>
      <SideNavigation open={active}>
        <HeaderNavigation />
      </SideNavigation>
    </StyledHeader>
  )
}

export default Header
