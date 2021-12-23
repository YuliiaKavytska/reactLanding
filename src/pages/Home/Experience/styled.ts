import styled from 'styled-components'

export const ExperienceSection = styled.section`
  padding: 80px 0;
  background-color: ${({ theme }) => theme.colors.lightWhite};

  @media screen and (max-width: 768px) {
    padding: 40px 0;
  }
`

export const CardsRow = styled.div`
  display: flex;
  align-items: center;
  margin: 50px -15px -15px;

  @media screen and (max-width: 991px) {
    flex-wrap: wrap;
    margin: 50px -8px -15px;
  }
`
