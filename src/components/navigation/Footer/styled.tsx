import styled from 'styled-components'

import { pxToRem } from 'utils/helpers'

export const FooterContainer = styled.footer``

export const FooterTop = styled.div`
  background: ${({ theme }) => theme.colors.darkBlack};
  color: ${({ theme }) => theme.colors.white};
  padding: 50px 0;
`

export const Navigation = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 1024px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`

export const FooterBottom = styled.div`
  padding: 25px 0;
`

export const BottomBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 480px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`

export const Reserved = styled.div`
  font-weight: 600;
  font-size: ${pxToRem(14)};
  line-height: 171%;
  letter-spacing: 0.2px;
  padding-right: 20px;
  color: ${({ theme }) => theme.colors.gray[1]};

  @media screen and (max-width: 480px) {
    text-align: center;
    margin-bottom: 20px;
  }
`

export const SocialMedia = styled.div`
  display: flex;
  align-items: center;
`

export const MediaLink = styled.a`
  font-size: ${pxToRem(24)};
  text-decoration: none;
  transition: all 0.3s ease;

  &:not(:last-child) {
    margin-right: 20px;
  }

  &:first-child {
    color: #335bf5;
  }

  &:nth-child(2) {
    color: #e51f5a;
  }

  &:nth-child(3) {
    color: #21a6df;
  }

  &:nth-child(4) {
    color: #e42f08;
  }

  @media (any-hover: hover) {
    &:hover {
      transform: scale(1.1);
    }
  }
`
