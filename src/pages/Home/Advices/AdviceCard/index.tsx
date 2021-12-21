import React, { FC } from 'react'

import { AdviceBody, AdviceCard, Description, ImageBody, Img, Title } from './styled'

interface IAdviceCard {
  item: {
    title: string
    description: string
    img: string
  }
}

const Advice: FC<IAdviceCard> = ({ item }) => {
  return (
    <AdviceCard>
      <AdviceBody>
        <Title>{item.title}</Title>
        <Description>{item.description}</Description>
      </AdviceBody>
      <ImageBody>
        <Img src={item.img} />
      </ImageBody>
    </AdviceCard>
  )
}

export default Advice
