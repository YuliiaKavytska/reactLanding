import styled, { css } from 'styled-components'

export const AdviceCard = styled.div`
  flex: 0 1 25%;
  margin-bottom: 17px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 991px) {
    flex: 0 1 50%;
  }

  @media screen and (min-width: 480px) {
    padding: 0 17px;
  }

  @media screen and (max-width: 480px) {
    flex: 1 1 auto;
  }
`

export const AdviceBody = styled.div`
  padding: 30px;
  flex-grow: 1;
  background: ${({ theme }) => theme.colors.white};

  @media screen and (max-width: 768px) {
    padding: 15px;
  }
`

export const Title = styled.div`
  font-weight: 700;
  line-height: 150%;
`

export const Description = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 20 / 14 * 100%;
  letter-spacing: 0.2px;
  margin-top: 15px;

  ${({ theme }) => css`
    color: ${theme.colors.gray[1]};
  `}
`

export const ImageBody = styled.div`
  position: relative;
  padding-top: 60%;

  @media screen and (max-width: 991px) {
    padding-top: 45%;
  }
`

export const Img = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  object-fit: cover;
  object-position: center;
`
