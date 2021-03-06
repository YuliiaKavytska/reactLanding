import { Link as LinkR } from 'react-router-dom'
import { Link } from 'react-scroll'

import styled, { css } from 'styled-components'

import { hexToRgb, pxToRem } from 'utils/helpers'

export const StyledHeader = styled.header<{ active: boolean; darken: number }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  transition: all 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    visibility: hidden;
    opacity: 0;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: white;
    box-shadow: rgba(0, 0, 0, 0.1) 0 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
    transition: all 0.3s ease;
  }

  ${({ active }) =>
    active &&
    css`
      &::after {
        visibility: visible;
        opacity: 1;
      }
    `}

  ${({ theme }) => css`
    color: ${theme.colors.gray[1]};
  `}

  ${({ darken, active, theme }) =>
    darken &&
    !active &&
    css`
      color: ${darken > 50 && '#fff'};
      background: rgba(${hexToRgb(theme.colors.green)}, ${scrollY < 100 ? darken / 100 - 0.4 : 0.6});

      svg path {
        fill: ${darken > 50 && '#fff'};
      }
    `}
`

export const HeaderContainer = styled.div`
  display: flex;
  height: ${pxToRem(104)};

  @media screen and (max-width: 768px) {
    position: relative;
    height: ${pxToRem(60)};
    justify-content: space-between;
    align-items: center;
    z-index: 5;
  }
`

export const LogoLink = styled(LinkR)`
  margin-right: 132px;
  align-self: center;
`

export const NavigationList = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const Item = styled.li<{ active?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${pxToRem(14)};
  line-height: ${pxToRem(24)};
  cursor: pointer;

  @media (any-hover: hover) {
    &:hover {
      color: ${({ theme }) => theme.colors.orange};
    }
  }

  @media screen and (min-width: 768px) {
    margin-right: 30px;
  }

  &::after {
    content: '';
    width: 0;
    left: 50%;
    bottom: 0;
    height: 3px;
    background: ${({ theme }) => theme.colors.green};
    transition: all ease 0.3s;
  }

  ${({ active }) =>
    active &&
    css`
      &::after {
        left: 0;
        right: 0;
        width: 100%;
      }
    `}

  @media screen and (max-width: 480px) {
    height: ${pxToRem(60)};
  }

  @media screen and (max-width: 768px) {
    flex: 0 0 80px;
    font-size: ${pxToRem(20)};
  }
`

export const ScrollLink = styled(Link)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: inherit;

  @media (any-hover: hover) {
    transition: all 0.3s ease;
  }

  &.active {
    border-bottom: 3px solid ${({ theme }) => theme.colors.orange};
  }
`

export const SideNavigation = styled.div<{ open?: boolean }>`
  display: none;
  position: absolute;
  left: 0;
  right: 0;
  top: -100vh;
  height: 100vh;
  overflow-y: scroll;
  width: 100vw;
  background: rgba(255, 255, 255, 0.94);
  padding-top: 100px;
  overflow-y: scroll;
  transition: all 0.3s ease;

  @media screen and (max-width: 768px) {
    display: block;
  }

  ${({ open }) =>
    open &&
    css`
      top: 0;
    `}
`
