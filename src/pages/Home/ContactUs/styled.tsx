import styled from 'styled-components'

import { pxToRem } from 'utils/helpers'

export const ContactSection = styled.section`
  padding: 40px 0;
`

export const ContactBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    flex-shrink: 0;
  }

  @media screen and (max-width: 480px) {
    flex-wrap: wrap;

    button {
      flex: 1 1 100%;
    }
  }
`

export const Consulting = styled.div`
  padding-right: 20px;

  @media screen and (max-width: 480px) {
    margin-bottom: 20px;
    text-align: center;
  }
`

export const ConsultText = styled.div`
  font-size: ${pxToRem(24)};
  line-height: 133%;
`

export const ConsultSubtitle = styled.div`
  font-weight: 500;
  font-size: ${pxToRem(14)};
  line-height: 143%;
  letter-spacing: 0.2px;
  color: ${({ theme }) => theme.colors.gray[1]};
  margin-top: 10px;
`
