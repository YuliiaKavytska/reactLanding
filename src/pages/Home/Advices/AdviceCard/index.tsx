import React, { FC } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

import { AdviceBody, AdviceCard, Description, ImageBody, Img, Title } from './styled'

interface IAdviceCard {
  item: {
    title: string
    description: string
    img: string
  }
  i: number
}

const Advice: FC<IAdviceCard> = ({ item, i }) => {
  return (
    <ScrollAnimation duration={0.5 + i * 0.4} animateIn="animate__fadeInUpBig" animateOnce delay={300} offset={70}>
      <AdviceCard>
        <AdviceBody>
          <Title>{item.title}</Title>
          <Description>{item.description}</Description>
        </AdviceBody>
        <ImageBody>
          <Img src={item.img} />
        </ImageBody>
      </AdviceCard>
    </ScrollAnimation>
  )
}

export default Advice
