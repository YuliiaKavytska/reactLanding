import React from 'react'

import { Container } from 'components/containers/Container/styled'
import {
  Button,
  FormTitle,
  Input,
  Partners,
  SubscribeContainer,
  SubscribeForm,
  SubscribeSection
} from 'pages/Home/Subscribe/styled'
import { partnersList } from 'utils/consts'

import PartnerItem from './PartnerItem'

const Subscribe = () => {
  return (
    <SubscribeSection id="Partners">
      <Container>
        <Partners>
          {partnersList.map((item, i) => (
            <PartnerItem key={i} img={item} i={i} />
          ))}
        </Partners>
        <SubscribeContainer>
          <FormTitle>Subscribe For Latest Newsletter</FormTitle>
          <SubscribeForm>
            <Input placeholder="Your Email" />
            <Button type="button" onClick={() => console.log('submitted')}>
              Subscribe
            </Button>
          </SubscribeForm>
        </SubscribeContainer>
      </Container>
    </SubscribeSection>
  )
}

export default Subscribe
