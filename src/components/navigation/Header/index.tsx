import React from 'react'
import { Link } from 'react-router-dom'

import { Container } from 'components/containers/Container/styled'

import logoIcon from 'assets/images/common/logo.svg'

import { HeaderContainer, Item, Logo, Navigation, SideNavigation, StyledHeader } from './styled'

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
  return (
    <StyledHeader>
      <Container>
        <HeaderContainer>
          <Link to="/">
            <Logo src={logoIcon} alt="logotype" />
          </Link>
          <HeaderNavigation />
        </HeaderContainer>
      </Container>
      <SideNavigation>
        <HeaderNavigation />
      </SideNavigation>
    </StyledHeader>
  )
}

export default Header
