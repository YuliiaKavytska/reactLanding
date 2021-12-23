import React, { FC } from 'react'

import styled from 'styled-components'

import { Item, ScrollLink } from 'components/navigation/Header/styled'

const Navigation = styled.ul`
  display: flex;

  @media screen and (min-width: 768px) {
    height: 100%;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`

interface IHeaderNavigation {
  closeBurger?: () => void
}

export const HeaderNavigation: FC<IHeaderNavigation> = ({ closeBurger }) => {
  return (
    <Navigation>
      <Item>
        <ScrollLink
          activeClass="active"
          to="Home"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onClick={closeBurger}
        >
          Home
        </ScrollLink>
      </Item>
      <Item>
        <ScrollLink
          activeClass="active"
          to="Experience"
          spy={true}
          smooth={true}
          offset={-104}
          duration={500}
          onClick={closeBurger}
        >
          Experience
        </ScrollLink>
      </Item>
      <Item>
        <ScrollLink
          activeClass="active"
          to="About"
          spy={true}
          smooth={true}
          offset={-104}
          duration={500}
          onClick={closeBurger}
        >
          About
        </ScrollLink>
      </Item>
      <Item>
        <ScrollLink
          activeClass="active"
          to="Advice"
          spy={true}
          smooth={true}
          offset={-104}
          duration={500}
          onClick={closeBurger}
        >
          Advice
        </ScrollLink>
      </Item>
      <Item>
        <ScrollLink
          activeClass="active"
          to="Partners"
          spy={true}
          smooth={true}
          offset={-104}
          duration={500}
          onClick={closeBurger}
        >
          Partners
        </ScrollLink>
      </Item>
      <Item>
        <ScrollLink
          activeClass="active"
          to="Contact"
          spy={true}
          smooth={true}
          offset={-104}
          duration={500}
          onClick={closeBurger}
        >
          Contact
        </ScrollLink>
      </Item>
    </Navigation>
  )
}

export default HeaderNavigation
