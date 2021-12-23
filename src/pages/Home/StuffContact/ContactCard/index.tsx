import React, { FC } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

import Button from 'components/buttons'

import { Col, Contact, Text } from './styled'

interface IContactCard {
  item: {
    img: string
    contactsList: Array<string>
  }
  selected: boolean
  i: number
}

const ContactCard: FC<IContactCard> = ({ item, selected, i }) => {
  return (
    <ScrollAnimation
      key={i}
      duration={0.5 + i * 0.4}
      animateIn="animate__fadeInDown"
      animateOnce
      delay={300 + i * 100}
      offset={50}
    >
      <Col selected={selected}>
        <img src={item.img} alt="" />
        <div>
          {item.contactsList.map((contact, j) => (
            <Contact key={j} href={'mailto:' + contact}>
              {contact}
            </Contact>
          ))}
        </div>
        <Text>Get Support</Text>
        <Button outlined orange={!selected} white={selected}>
          Submit Request
        </Button>
      </Col>
    </ScrollAnimation>
  )
}

export default ContactCard
