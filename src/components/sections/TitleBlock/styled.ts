import styled from 'styled-components'

import { pxToRem } from 'utils/helpers'

export const Title = styled.h3`
  font-weight: 700;
  font-size: ${pxToRem(40)};
  line-height: ${pxToRem(57)};
  letter-spacing: 0.2px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: ${pxToRem(30)};
    line-height: ${pxToRem(38)};
  }
`

export const SubTitle = styled.h4`
  font-weight: 500;
  letter-spacing: 0.2px;
  font-size: ${pxToRem(14)};
  line-height: ${pxToRem(20)};
  color: ${({ theme }) => theme.colors.gray[1]};
  text-align: center;
  max-width: 470px;
  margin: 10px auto 0;

  @media screen and (max-width: 768px) {
    font-weight: 400;
    line-height: ${pxToRem(18)};
  }
`
