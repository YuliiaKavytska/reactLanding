import styled from 'styled-components'

import { pxToRem } from 'utils/helpers'

import bg from 'assets/images/bg.jpg'

export const Section = styled.section`
  position: relative;
  min-height: 100vh;
  padding-top: ${pxToRem(104)};
  background: url(${bg}) right center/cover no-repeat;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.4);

    @media screen and (min-width: 991px) {
      display: none;
    }
  }
`

export const Content = styled.div`
  position: relative;
  max-width: 500px;
  padding-top: ${pxToRem(80)};
  z-index: 2;

  & > *:not(:last-child) {
    margin-bottom: 35px;
  }
`

export const Title = styled.h1`
  font-weight: 900;
  font-size: ${pxToRem(58)};
  line-height: ${pxToRem(80)};
`

export const Subtitle = styled.h2`
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: ${({ theme }) => theme.colors.gray[1]};
`

export const Actions = styled.div`
  display: flex;
  align-content: center;
  gap: 10px;
`
