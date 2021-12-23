import styled, { css } from 'styled-components'

import { LightenDarkenColor, pxToRem } from 'utils/helpers'

export const SubscribeSection = styled.section`
  position: relative;
  background-color: ${({ theme }) => theme.colors.lightWhite};
  padding-bottom: 20px;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 77px;
    bottom: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.black};
  }
`

export const Partners = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 50px 0;
  margin-bottom: -20px;

  @media screen and (max-width: 991px) {
    padding: 25px 0;
  }

  & > div {
    flex: 0 0 16.666%;

    @media screen and (max-width: 991px) {
      flex: 0 0 33.333%;
    }

    @media screen and (max-width: 480px) {
      flex: 0 0 50%;
    }
  }
`

export const SubscribeContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 30px 50px;
  margin: 20px 30px;
  background-color: ${({ theme }) => theme.colors.darkBlack};
  z-index: 2;

  @media screen and (max-width: 991px) {
    padding: 20px 30px;
  }

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }

  @media screen and (max-width: 480px) {
    margin: 20px 10px;
  }
`

export const FormTitle = styled.div`
  flex: 0 0 260px;
  font-weight: 700;
  font-size: ${pxToRem(24)};
  line-height: 133%;
  color: ${({ theme }) => theme.colors.white};

  @media screen and (max-width: 991px) {
    font-size: ${pxToRem(20)};
  }

  @media screen and (max-width: 768px) {
    flex: 1 1 100%;
    margin-bottom: 20px;
  }
`

export const SubscribeForm = styled.form`
  display: flex;
  flex: 0 0 50%;

  @media screen and (max-width: 768px) {
    flex: 1 1 100%;
  }
`

export const Input = styled.input`
  width: 100%;
  background: ${({ theme }) => theme.colors.input};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 5px 0 0 5px;
  padding: 15px 20px;
  font-size: ${pxToRem(14)};
  line-height: 28 / 14 * 100%;
`

export const Button = styled.button`
  font-size: ${pxToRem(14)};
  line-height: 28 / 14 * 100%;
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 0 5px 5px 0;
  padding: 15px 22px;
  transition: all 0.3s ease;

  ${({ theme }) => css`
    background: ${theme.colors.orange};

    @media (any-hover: hover) {
      &:hover {
        background: ${LightenDarkenColor(theme.colors.orange, -40)};
      }
    }
  `};
`
