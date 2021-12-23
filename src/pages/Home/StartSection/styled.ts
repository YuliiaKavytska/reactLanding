import styled from 'styled-components'

import { pxToRem } from 'utils/helpers'

import bg from 'assets/images/bg.jpg'

export const Section = styled.section`
  position: relative;
  padding: ${pxToRem(104)} 0 194px;
  background: url(${bg}) right center/cover no-repeat;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.6);

    @media screen and (min-width: 991px) {
      display: none;
    }
  }
`

export const Content = styled.div`
  position: relative;
  max-width: 500px;
  padding-top: ${pxToRem(70)};
  z-index: 2;

  & > *:not(:last-child) {
    margin-bottom: 35px;
  }

  @media screen and (max-width: 768px) {
    padding-top: ${pxToRem(30)};
  }

  @media screen and (min-width: 480px) {
    max-width: 400px;
  }
`

export const Title = styled.h1`
  font-weight: 900;
  font-size: ${pxToRem(58)};
  line-height: ${pxToRem(70)};

  @media screen and (max-width: 768px) {
    font-size: ${pxToRem(40)};
    line-height: ${pxToRem(50)};
  }
`

export const Subtitle = styled.h2`
  min-height: 60px;
  font-weight: 500;
  font-size: ${pxToRem(20)};
  line-height: ${pxToRem(30)};
  color: ${({ theme }) => theme.colors.gray[1]};
  max-width: 400px;

  @media screen and (max-width: 768px) {
    font-size: ${pxToRem(16)};
    line-height: ${pxToRem(24)};
    max-width: 300px;
  }
`

export const Actions = styled.div`
  display: flex;
  align-content: center;
  gap: 10px;

  @media screen and (max-width: 480px) {
    flex-wrap: wrap;

    button {
      flex: 1 1 100%;
    }
  }
`
