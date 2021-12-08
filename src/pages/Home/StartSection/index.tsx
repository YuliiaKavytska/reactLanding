import React from 'react'

import Button from 'components/Buttons'
import { Container } from 'components/containers/Container/styled'

import { Actions, Content, Section, Subtitle, Title } from './styled'

const StartSection = () => {
  return (
    <Section>
      <Container>
        <Content>
          <Title>Finance and Consultancy Solution</Title>
          <Subtitle>
            We know how large objects will act,
            <br /> but things on a small scale.
          </Subtitle>
          <Actions>
            <Button>Get Quote Now</Button>
            <Button outlined>Learn More</Button>
          </Actions>
        </Content>
      </Container>
    </Section>
  )
}

export default StartSection
