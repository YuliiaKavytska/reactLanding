import styled from 'styled-components'

export const BenefitsWrap = styled.div`
  background-color: ${({ theme }) => theme.colors.lightWhite};
`

export const BenefitsRow = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  margin: -120px -15px 0;
  z-index: 2;
  overflow-y: hidden;

  &::-webkit-scrollbar {
    width: 0;
  }

  @media (any-hover: hover) {
    overflow-y: visible;
  }

  & > div {
    flex: 0 0 33.333%;
    padding: 0 15px;

    @media screen and (max-width: 480px) {
      padding: 0 8px;
    }
  }

  @media screen and (max-width: 1124px) {
    overflow-x: scroll;
  }

  @media screen and (max-width: 480px) {
  }
`
