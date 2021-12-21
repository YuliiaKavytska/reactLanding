import React, { useEffect } from 'react'
import { useLockBodyScroll, useToggle, useWindowScroll, useWindowSize } from 'react-use'

import { Container } from 'components/containers/Container/styled'

import { ReactComponent as Logo } from 'assets/images/common/logo.svg'

import Burger from '../Burger'
import { HeaderNavigation } from '../HeaderNavigation'

import { HeaderContainer, LogoLink, NavigationList, SideNavigation, StyledHeader } from './styled'

const Header = () => {
  const [active, toggleActive] = useToggle(false)
  const { width } = useWindowSize()
  const { y } = useWindowScroll()
  useLockBodyScroll(active)

  useEffect(() => {
    active && toggleActive(false)
  }, [width])

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
          <Burger active={active} toggleActive={toggleActive} darken={y} />
        </HeaderContainer>
      </Container>
      <SideNavigation open={active}>
        <HeaderNavigation />
      </SideNavigation>
    </StyledHeader>
  )
}

export default Header
