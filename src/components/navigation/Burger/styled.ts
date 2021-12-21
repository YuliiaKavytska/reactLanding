import styled, { css } from 'styled-components'

export const CustomBurger = styled.div<{ active?: boolean; darken: number }>`
  display: none;
  
  @media screen and (max-width: 768px) {
    display: block;
    position: relative;
    width: 30px;
    height: 18px;
    cursor: pointer;
    z-index: 5;
  }
  
  ${({ active }) =>
    active &&
    css`
      span {
        transform: scale(0);

        &:first-child {
          transform: rotate(-45deg);
          top: calc(50% - 1px);
        }

        &:last-child {
          transform: rotate(45deg);
          bottom: calc(50% - 1px);
        }
      }
    `}
    }

    ${({ darken, active }) =>
      darken &&
      !active &&
      css`
        span {
          background: ${darken > 50 && '#fff'};
        }
      `}
`

export const Line = styled.span`
  position: absolute;
  top: calc(50% - 1px);
  left: 0;
  height: 2px;
  width: 100%;
  background: #000;
  transition: all 0.3s ease;

  &:first-child {
    top: 0;
  }

  &:last-child {
    top: auto;
    bottom: 0;
  }
`
