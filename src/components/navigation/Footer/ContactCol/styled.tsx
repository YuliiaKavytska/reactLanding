import styled from 'styled-components'

import { pxToRem } from 'utils/helpers'

export const NavCol = styled.div`
  flex: 0 1 16.666%;
  padding: 0 10px;

  &:last-child {
    flex: 0 1 33.332%;
  }

  @media screen and (max-width: 1024px) {
    &:not(:last-child) {
      a {
        justify-content: center;
      }
    }

    &:nth-child(-n + 3) {
      flex: 0 1 33.333%;
      margin-bottom: 25px;
    }

    &:nth-child(-n + 4) {
      text-align: center;
    }

    &:nth-child(n + 4) {
      flex: 0 1 40%;
    }
  }

  @media screen and (max-width: 768px) {
    &:nth-child(-n + 4) {
      flex: 0 1 50%;
    }

    &:nth-child(5) {
      flex: 0 1 100%;
    }
  }

  @media screen and (max-width: 480px) {
    &:nth-child(-n + 5) {
      flex: 1 1 100%;
    }
  }
`

export const ColName = styled.div`
  font-weight: 700;
  line-height: 150%;
  margin-bottom: 20px;
`

export const NavList = styled.ul`
  list-style: none;

  & > *:not(:last-child) {
    margin-bottom: 10px;
  }
`

export const NavItem = styled.li`
  font-weight: 600;
  font-size: ${pxToRem(14)};
  line-height: 171%;
  letter-spacing: 0.2px;
`

export const Link = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;

  &:before {
    flex: 0 0 40px;
    font-size: ${pxToRem(24)};
    color: #8ec2f2;
  }

  @media (any-hover: hover) {
    &:hover {
      color: ${({ theme }) => theme.colors.orange};
    }
  }
`
