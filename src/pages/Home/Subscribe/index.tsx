import React from 'react'

import { Container } from 'components/containers/Container/styled'
import {
  Button,
  FormTitle,
  Input,
  Partner,
  Partners,
  SubscribeContainer,
  SubscribeForm,
  SubscribeSection
} from 'pages/Home/Subscribe/styled'

import partner1 from 'assets/images/common/10.svg'
import partner2 from 'assets/images/common/11.svg'
import partner3 from 'assets/images/common/12.svg'
import partner4 from 'assets/images/common/13.svg'
import partner5 from 'assets/images/common/14.svg'
import partner6 from 'assets/images/common/15.svg'

const Subscribe = () => {
  return (
    <SubscribeSection>
      <Container>
        <Partners>
          <Partner>
            <img src={partner1} alt="partner 1" />
          </Partner>
          <Partner>
            <img src={partner2} alt="partner 2" />
          </Partner>
          <Partner>
            <img src={partner3} alt="partner 3" />
          </Partner>
          <Partner>
            <img src={partner4} alt="partner 4" />
          </Partner>
          <Partner>
            <img src={partner5} alt="partner 5" />
          </Partner>
          <Partner>
            <img src={partner6} alt="partner 6" />
          </Partner>
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
