import styled from 'styled-components'

export const Contacts = styled.section`
  padding: 80px 0 148px;
  background-color: ${({ theme }) => theme.colors.lightWhite};

  @media screen and (max-width: 991px) {
    padding: 50px 0 100px;
  }

  @media screen and (max-width: 768px) {
    padding: 30px 0 30px;
  }
`

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 80px;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    margin-top: 40px;
  }

  & > div {
    @media screen and (max-width: 768px) {
      flex: 1 1 100%;
      max-width: 420px;

      &:not(:last-child) {
        margin-bottom: 20px;
      }
    }
  }
`
