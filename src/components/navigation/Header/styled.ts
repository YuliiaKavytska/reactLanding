import styled, { css } from 'styled-components'

import { pxToRem } from 'utils/helpers'

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${pxToRem(104)};
  z-index: 10;
`

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Logo = styled.img`
  margin-right: 132px;
`

export const Navigation = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`

export const Item = styled.div`
  margin-right: 12px;

  ${({ theme }) => css`
    color: ${theme.colors.gray[1]};
    font-size: ${pxToRem(14)};
    line-height: ${pxToRem(24)};

    @media screen and (max-width: 480px) {
      height: ${pxToRem(60)};
    }
  `}
`

export const SideNavigation = styled.div`
  display: none;
  position: absolute;
  left: 0;
  height: 100vh;
  overflow-y: scroll;
  width: 100vw;

  @media screen and (max-width: 480px) {
    display: block;
  }
`
