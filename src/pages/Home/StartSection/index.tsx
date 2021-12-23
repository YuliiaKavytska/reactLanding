import React from 'react'

import Typewriter from 'typewriter-effect'

import AnimatedText from 'components/animatedText'
import Button from 'components/buttons'
import { Container } from 'components/containers/Container/styled'

import { Actions, Content, Section, Subtitle, Title } from './styled'

const StartSection = () => {
  return (
    <Section id="Home">
      <Container>
        <Content>
          <Title>
            <AnimatedText>Finance and Consultancy Solution</AnimatedText>
          </Title>
          <Subtitle>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString('We know how large objects will act, but things on a small scale.')
                  .start()
                  .changeDelay(0.1)
              }}
            />
          </Subtitle>
          <Actions>
            <Button rounded orange fill>
              Get Quote Now
            </Button>
            <Button rounded outlined green>
              Learn More
            </Button>
          </Actions>
        </Content>
      </Container>
    </Section>
  )
}

export default StartSection
