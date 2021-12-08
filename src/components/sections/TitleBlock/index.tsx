import React, { FC } from 'react'

import { SubTitle, Title } from './styled'

interface ITitleBlock {
  item: {
    title: string
    subtitle: string
  }
}

const TitleBlock: FC<ITitleBlock> = ({ item }) => {
  return (
    <>
      <Title>{item.title}</Title>
      <SubTitle>{item.subtitle}</SubTitle>
    </>
  )
}

export default TitleBlock
