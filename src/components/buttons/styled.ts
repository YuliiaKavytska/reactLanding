import styled, { css } from 'styled-components'

import { LightenDarkenColor, pxToRem } from 'utils/helpers'

export const CustomButton = styled.button<{
  outlined?: boolean
  rounded?: boolean
  green?: boolean
  fill?: boolean
  orange?: boolean
}>`
  min-width: 100px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: ${pxToRem(14)};
  line-height: ${pxToRem(20)};
  padding: ${pxToRem(14)} ${pxToRem(36)};
  border-radius: 5px;
  border: 1px solid inherit;
  transition: all 0.3s ease;
  outline: none;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  ${({ theme }) => css`
    border: 1px solid ${theme.colors.orange};
    color: ${theme.colors.orange};
  `}

  ${({ outlined, orange, green, theme }) => {
    const color = orange ? 'orange' : green ? 'green' : 'white'

    return (
      outlined &&
      css`
        border: 1px solid ${theme.colors[color]};
        color: ${theme.colors[color]};
        background: transparent;

        &:hover {
          border-color: ${theme.colors[color]};
          background: ${theme.colors[color]};
          color: ${color === 'white' ? theme.colors.black : theme.colors.white};
        }
      `
    )
  }}
  
  ${({ rounded }) =>
    rounded &&
    css`
      border-radius: 37px;
    `}

  ${({ theme, orange, fill }) =>
    fill &&
    css`
      background-color: ${fill && theme.colors[orange ? 'orange' : 'green']};
      color: ${theme.colors.white};

      @media (any-hover: hover) {
        &:hover {
          border: 1px solid ${LightenDarkenColor(theme.colors[orange ? 'orange' : 'green'], -40)};
          background: ${LightenDarkenColor(theme.colors[orange ? 'orange' : 'green'], -40)};
        }
      }
    `}
  
  @media screen and (max-width: 768px) {
    min-height: 40px;
  }
`
