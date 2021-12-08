import React, { FC } from 'react'

import { Word } from './styled'

interface IAnimatedText {
  children: string
}

const AnimatedText: FC<IAnimatedText> = ({ children }) => {
  const words = children.split(' ')
  return (
    <>
      {words.map((item, index) => (
        <Word key={index} index={index}>
          {item}
        </Word>
      ))}
    </>
  )
}

export default AnimatedText
