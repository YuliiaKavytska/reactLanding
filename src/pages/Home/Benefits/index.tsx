import React from 'react'

import { Container } from 'components/containers/Container/styled'
import Benefit from 'pages/Home/Benefits/Benefit'
import { benefitsList } from 'utils/consts'

import { BenefitsRow, BenefitsWrap } from './styled'

const Benefits = () => {
  return (
    <BenefitsWrap>
      <Container>
        <BenefitsRow>
          {benefitsList.map((Item, i) => (
            <Benefit key={i} i={i} Item={Item} />
          ))}
        </BenefitsRow>
      </Container>
    </BenefitsWrap>
  )
}

export default Benefits
