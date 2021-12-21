import styled, { css } from 'styled-components'

import { pxToRem } from 'utils/helpers'

import peopleIcon from 'assets/images/common/8.svg'
import timeIcon from 'assets/images/common/9.svg'

export const About = styled.div`
  padding: 100px 0 136px;

  @media screen and (max-width: 991px) {
    padding: 70px 0 100px;
  }

  @media screen and (max-width: 480px) {
    padding: 40px 0 50px;
  }
`

export const Designed = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 100px;

  @media screen and (max-width: 768px) {
    margin-top: 50px;
    flex-wrap: wrap;
    flex-direction: column-reverse;
  }
`

export const Video = styled.div`
  position: relative;
  flex: 0 0 57%;
  padding-top: 42%;

  @media screen and (max-width: 768px) {
    flex: 1 1 100%;
    padding-top: 70%;
    width: 100%;
  }
`

export const VideoFrame = styled.iframe`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  object-position: center;
`

export const TrustedField = styled.div`
  padding-left: 100px;

  @media screen and (max-width: 991px) {
    padding-left: 30px;
  }

  @media screen and (max-width: 480px) {
    padding: 0;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 30px;
  }
`

export const Title = styled.h4`
  font-weight: 700;
  font-size: ${pxToRem(40)};
  line-height: 142%;
  letter-spacing: 0.2px;

  @media screen and (max-width: 991px) {
    font-size: ${pxToRem(30)};
    line-height: 120%;
  }
`

export const Subtitle = styled.div`
  font-weight: 500;
  font-size: ${pxToRem(14)};
  line-height: 143%;
  letter-spacing: 0.2px;
  margin-top: 15px;
  ${({ theme }) => css`
    color: ${theme.colors.gray[1]};
  `}
`

export const TrustedItems = styled.div`
  margin-top: 30px;
`

export const Item = styled.div`
  overflow: hidden;

  &:not(:last-child) {
    margin-bottom: 30px;

    @media screen and (max-width: 991px) {
      margin-bottom: 15px;
    }
  }
  padding-left: 52px;

  &:first-child {
    background: url(${peopleIcon}) left top no-repeat;
  }
  &:nth-child(2) {
    background: url(${timeIcon}) left top no-repeat;
  }
`

export const ItemTitle = styled.div`
  font-weight: 700;
  line-height: 150%;
`

export const ItemText = styled.div`
  max-width: 225px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  font-size: ${pxToRem(14)};
  line-height: 171%;
  letter-spacing: 0.2px;
  margin-top: 7px;
  ${({ theme }) => css`
    color: ${theme.colors.gray[1]};
  `}
`
