import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

import { Container } from 'components/containers/Container/styled'
import { benefitsList } from 'utils/consts'

import { BenefitsRow, BenefitsWrap, Card, Description, Icon, Title } from './styled'

const Benefits = () => {
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
              <Card>
                <Icon>
                  <Item.Icon />
                </Icon>
                <Title>{Item.title}</Title>
                <Description>{Item.text}</Description>
              </Card>
            </ScrollAnimation>
          ))}
        </BenefitsRow>
      </Container>
    </BenefitsWrap>
  )
}

export default Benefits
