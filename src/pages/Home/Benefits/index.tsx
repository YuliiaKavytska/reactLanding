import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import Tilt from 'react-parallax-tilt'
import { useMedia } from 'react-use'

import { Container } from 'components/containers/Container/styled'
import { benefitsList } from 'utils/consts'

import { BenefitsRow, BenefitsWrap, Card, Description, Title } from './styled'

const Benefits = () => {
  const isPhone = useMedia('(max-width: 480px)')

  return (
    <BenefitsWrap>
      <Container>
        <BenefitsRow>
          {benefitsList.map((Item, index) => (
            <ScrollAnimation
              key={index}
              duration={0.5 + index * 0.3}
              animateIn="flipInX"
              animateOnce
              delay={500 + index * 100}
            >
              <Tilt tiltEnable={!isPhone} tiltMaxAngleX={10} tiltMaxAngleY={10}>
                <Card>
                  <Item.Icon />
                  <Title>{Item.title}</Title>
                  <Description>{Item.text}</Description>
                </Card>
              </Tilt>
            </ScrollAnimation>
          ))}
        </BenefitsRow>
      </Container>
    </BenefitsWrap>
  )
}

export default Benefits
