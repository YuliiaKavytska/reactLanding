import React, { FC } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

import styled from 'styled-components'

interface IPartnerItem {
  img: string
  i: number
}

const Partner = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`

const PartnerItem: FC<IPartnerItem> = ({ img, i }) => {
  return (
    <ScrollAnimation
      key={i}
      duration={0.5 + i * 0.4}
      animateIn="animate__zoomIn"
      animateOnce
      delay={300 + i * 50}
      offset={100}
    >
      <Partner>
        <img src={img} alt={'partner' + i} />
      </Partner>
    </ScrollAnimation>
  )
}

export default PartnerItem
