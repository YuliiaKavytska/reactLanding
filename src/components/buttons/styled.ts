import styled, { css } from 'styled-components'

import { LightenDarkenColor, pxToRem } from 'utils/helpers'

export const CustomButton = styled.button<{ outlined?: boolean; squared?: boolean }>`
  min-width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${pxToRem(14)};
  line-height: ${pxToRem(20)};
  padding: ${pxToRem(14)} ${pxToRem(36)};
  border-radius: 37px;
  border: 1px solid inherit;
  transition: all 0.3s ease;
  outline: none;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  ${({ theme }) => css`
    border: 1px solid ${theme.colors.orange};
    background-color: ${theme.colors.orange};
    color: ${theme.colors.white};

    @media (any-hover: hover) {
      &:hover {
        border: 1px solid ${LightenDarkenColor(theme.colors.orange, -40)};
        background: ${LightenDarkenColor(theme.colors.orange, -40)};
      }
    }
  `}

  ${({ outlined, theme }) =>
    outlined &&
    css`
      border: 1px solid ${theme.colors.green};
      background: transparent;
      color: ${theme.colors.green};

      &:hover {
        border-color: ${theme.colors.green};
        background: ${theme.colors.green};
        color: ${theme.colors.white};
      }
    `}
  
  ${({ squared }) =>
    squared &&
    css`
      border-radius: 5px;
    `}
  
  @media screen and (max-width: 768px) {
    min-height: 40px;
  }
`
