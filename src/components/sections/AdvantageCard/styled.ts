import styled from 'styled-components'

import { pxToRem } from 'utils/helpers'

export const Card = styled.div`
  height: 210px;
  padding: 0 15px;
  flex: 0 0 25%;
`

export const CardBody = styled.div`
  height: 100%;
  display: flex;
  padding: ${pxToRem(30)};
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 1px solid;
`

export const Icon = styled.div`
    height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;<Icon>
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
