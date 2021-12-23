import React from 'react'

import { Container } from 'components/containers/Container/styled'
import TitleBlock from 'components/sections/TitleBlock'
import AdvantageCard from 'pages/Home/Experience/AdvantageCard'
import { advantageList, blockTitles } from 'utils/consts'

import { CardsRow, ExperienceSection } from './styled'

const Experience = () => {
  return (
    <ExperienceSection id="Experience">
      <Container>
        <TitleBlock item={blockTitles[0]} />
        <CardsRow>
          {advantageList.map((item, index) => (
            <AdvantageCard key={index} item={item} />
          ))}
        </CardsRow>
      </Container>
    </ExperienceSection>
  )
}

export default Experience
