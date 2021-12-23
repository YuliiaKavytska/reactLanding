import React, { FC } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import Tilt from 'react-parallax-tilt'
import { useMedia } from 'react-use'

import { Card, Description, Title } from './styled'

interface IBenefit {
  Item: {
    Icon: React.ComponentType
    title: string
    text: string
  }
  i: number
}

const Benefit: FC<IBenefit> = ({ Item, i }) => {
  const isPhone = useMedia('(max-width: 480px)')

  return (
    <ScrollAnimation duration={0.5 + i * 0.3} animateIn="flipInX" animateOnce delay={500 + i * 100}>
      <Tilt tiltEnable={!isPhone} tiltMaxAngleX={10} tiltMaxAngleY={10}>
        <Card>
          <Item.Icon />
          <Title>{Item.title}</Title>
          <Description>{Item.text}</Description>
        </Card>
      </Tilt>
    </ScrollAnimation>
  )
}

export default Benefit
