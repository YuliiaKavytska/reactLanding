import React from 'react'

import { Container } from 'components/containers/Container/styled'
import TitleBlock from 'components/sections/TitleBlock'
import { blockTitles, stuffContacts } from 'utils/consts'

import ContactCard from './ContactCard'
import { Contacts, Row } from './styled'

const StuffContact = () => {
  return (
    <Contacts id="Contact">
      <Container>
        <TitleBlock item={blockTitles[3]} />
        <Row>
          {stuffContacts.map((item, i) => (
            <ContactCard key={i} item={item} selected={i === 1} i={i} />
          ))}
        </Row>
      </Container>
    </Contacts>
  )
}

export default StuffContact
