import styled, { css } from 'styled-components'

import { pxToRem } from 'utils/helpers'

export const Col = styled.div<{ selected: boolean }>`
  flex: 0 1 33.333%;
  text-align: center;
  padding: 50px 40px;
  background-color: ${({ theme }) => theme.colors.white};

  & > *:not(:last-child) {
    margin-bottom: 15px;
  }

  @media screen and (max-width: 991px) {
    padding: 20px;
  }

  ${({ selected, theme }) =>
    selected &&
    css`
      background: ${theme.colors.black};
      color: ${theme.colors.white};
      padding: 80px 40px;

      @media screen and (max-width: 991px) {
        padding: 40px 20px;
      }
    `}
`

export const Contact = styled.a`
  display: block;
  color: inherit;
  text-decoration: none;
  font-weight: 600;
  font-size: ${pxToRem(14)};
  line-height: 171%;
  letter-spacing: 0.2px;
`

export const Text = styled.div`
  line-height: 150%;
`
