import React from 'react'

import { Container } from 'components/containers/Container/styled'
import TitleBlock from 'components/sections/TitleBlock'
import { adviceList, blockTitles } from 'utils/consts'

import Advice from './AdviceCard'
import { AdvicesBody, AdvicesContainer, AdvicesList } from './styled'

const Advices = () => {
  return (
    <AdvicesContainer id="About">
      <Container>
        <AdvicesBody>
          <TitleBlock item={blockTitles[1]} />
          <AdvicesList>
            {adviceList.map((item, i) => (
              <Advice key={i} item={item} i={i} />
            ))}
          </AdvicesList>
        </AdvicesBody>
      </Container>
    </AdvicesContainer>
  )
}

export default Advices
