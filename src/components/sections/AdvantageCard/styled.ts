import styled from 'styled-components'

import { pxToRem } from 'utils/helpers'

export const Card = styled.div`
  height: 210px;
  padding: 0 15px;
  margin-bottom: 15px;
  flex: 0 0 25%;

  @media screen and (max-width: 991px) {
    height: 170px;
    flex: 0 0 50%;
    padding: 0 8px;
  }

  @media screen and (max-width: 480px) {
    flex: 1 1 100%;
  }
`

export const CardBody = styled.div`
  height: 100%;
  display: flex;
  padding: ${pxToRem(30)} ${pxToRem(10)};
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.white};

  @media screen and (max-width: 991px) {
    padding: ${pxToRem(15)} ${pxToRem(10)};
  }
`

export const Icon = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Count = styled.div<any>`
  font-weight: bold;
  font-size: ${pxToRem(40)};
  line-height: ${pxToRem(57)};
  letter-spacing: 0.2px;
`

export const Title = styled.div`
  font-weight: 700;
  line-height: ${pxToRem(24)};
  text-align: center;
  color: ${({ theme }) => theme.colors.gray[1]};
`
