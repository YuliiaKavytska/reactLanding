import React from 'react'

import Button from 'components/buttons'
import { Container } from 'components/containers/Container/styled'

import { Consulting, ConsultSubtitle, ConsultText, ContactBody, ContactSection } from './styled'

const ContactUs = () => {
  return (
    <ContactSection>
      <Container>
        <ContactBody>
          <Consulting>
            <ConsultText>Consulting Agency For Your Business</ConsultText>
            <ConsultSubtitle>the quick fox jumps over the lazy dog</ConsultSubtitle>
          </Consulting>
          <Button onClick={() => console.log('Contact')} fill orange>
            Contact Us
          </Button>
        </ContactBody>
      </Container>
    </ContactSection>
  )
}

export default ContactUs
