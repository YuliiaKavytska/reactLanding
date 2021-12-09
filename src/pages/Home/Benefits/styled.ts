import styled from 'styled-components'

import { pxToRem } from 'utils/helpers'

export const BenefitsWrap = styled.div`
  background-color: ${({ theme }) => theme.colors.lightWhite};
`

export const BenefitsRow = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  margin: -120px -15px 0;
  z-index: 2;
  overflow-y: scroll;

  & > div {
    flex: 0 0 33.333%;
    padding: 0 15px;

    @media screen and (max-width: 480px) {
      padding: 0 8px;
    }
  }

  @media screen and (max-width: 480px) {
    margin: -120px -8px 0;
  }
`

export const Card = styled.div`
  min-width: 320px;
  height: 100%;
  padding: 35px 40px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 13px 19px rgba(0, 0, 0, 0.07);
  transition: all 0.3s ease;

  @media (any-hover: hover) {
    &:hover {
      background-color: ${({ theme }) => theme.colors.green};
      transform: scale(1.1);
      div {
        color: ${({ theme }) => theme.colors.white};
      }

      svg path {
        fill: ${({ theme }) => theme.colors.white};
      }
    }
  }

  @media screen and (max-width: 480px) {
    padding: 24px;
    min-width: 250px;
  }
`

export const Title = styled.div`
  font-weight: 700;
  font-size: ${pxToRem(24)};
  line-height: ${pxToRem(32)};
  margin-top: 20px;
  transition: all 0.3s ease;

  @media screen and (max-width: 480px) {
    font-size: ${pxToRem(20)};
    line-height: ${pxToRem(28)};
  }
`

export const Description = styled.div`
  font-weight: 500;
  font-size: ${pxToRem(14)};
  line-height: ${pxToRem(20)};
  letter-spacing: 0.2px;
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.gray[1]};
  transition: all 0.3s ease;
`
