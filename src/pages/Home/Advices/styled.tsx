import styled from 'styled-components'

export const AdvicesContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.lightWhite};
`

export const AdvicesBody = styled.div`
  padding: 125px 0 80px;

  @media screen and (max-width: 991px) {
    padding: 50px 0 40px;
  }
`

export const AdvicesList = styled.div`
  display: flex;
  align-items: stretch;
  margin-bottom: -17px;
  margin-top: 45px;

  & > div {
    flex: 0 1 25%;
    margin-bottom: 17px;

    @media screen and (max-width: 991px) {
      flex: 0 1 50%;
    }

    @media screen and (min-width: 480px) {
      padding: 0 17px;
    }

    @media screen and (max-width: 480px) {
      flex: 1 1 auto;
    }
  }

  @media screen and (max-width: 991px) {
    flex-wrap: wrap;
  }

  @media screen and (min-width: 480px) {
    margin-left: -17px;
    margin-right: -17px;
  }
`
