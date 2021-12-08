import styled, { css } from 'styled-components'

import { LightenDarkenColor, pxToRem } from 'utils/helpers'

export const CustomButton = styled.button<{ outlined?: boolean }>`
  min-width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${pxToRem(14)};
  line-height: ${pxToRem(28)};
  border-radius: 37px;
  padding: ${pxToRem(10)} ${pxToRem(36)};
  transition: all 0.3s ease;
  outline: none;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  ${({ theme }) => css`
    background-color: ${theme.colors.orange};
    color: ${theme.colors.white};
    border: none;

    &:hover {
      background: ${LightenDarkenColor(theme.colors.orange, -40)};
    }
  `}

  ${({ outlined, theme }) =>
    outlined &&
    css`
      border: 1px solid ${theme.colors.green};
      background: transparent;
      color: ${theme.colors.green};

      &:hover {
        background: ${theme.colors.green};
        color: ${theme.colors.white};
      }
    `}
`
