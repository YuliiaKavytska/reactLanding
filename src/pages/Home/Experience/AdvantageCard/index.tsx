import React, { FC, useEffect, useState } from 'react'
import { useCountUp } from 'react-countup'
import { useIntersection } from 'react-use'

import { Card, CardBody, Count, Icon, Title } from 'pages/Home/Experience/AdvantageCard/styled'

interface IAdvantageCard {
  item: {
    Icon: any
    number: number
    suffix: string
    title: string
  }
}

const AdvantageCard: FC<IAdvantageCard> = ({ item: Item }) => {
  const [animated, setAnimated] = useState(false)
  const countUpRef = React.useRef<any>(null)
  const intersectionRef = React.useRef(null)
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 1
  })

  const { start } = useCountUp({
    ref: countUpRef,
    start: 0,
    end: Item.number,
    delay: 0,
    duration: 2,
    separator: ' ',
    suffix: Item.suffix,
    startOnMount: false
  })

  useEffect(() => {
    if (!animated && intersection && intersection.intersectionRatio > 0) {
      start()
      setAnimated(true)
    }
  }, [intersection])

  return (
    <Card>
      <CardBody>
        <Icon ref={intersectionRef}>
          <Item.Icon />
        </Icon>
        <Count ref={countUpRef}>0{Item.suffix}</Count>
        <Title>{Item.title}</Title>
      </CardBody>
    </Card>
  )
}

export default AdvantageCard
