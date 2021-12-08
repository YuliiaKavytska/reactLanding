import React from 'react'

import { Container } from 'components/containers/Container/styled'
import TitleBlock from 'components/sections/TitleBlock'
import { blockTitles } from 'utils/consts'

import ProveCards from './ProveCards'
import { ExperienceSection } from './styled'

const Experience = () => {
  return (
    <ExperienceSection>
      <Container>
        <TitleBlock item={blockTitles[0]} />
        <ProveCards />
      </Container>
    </ExperienceSection>
  )
}

export default Experience
