import React from 'react'

import { Container } from 'components/containers/Container/styled'
import ContactCol from 'components/navigation/Footer/ContactCol'
import { footerContacts } from 'utils/consts'

import { ColName, Link, NavCol, NavItem, NavList } from './ContactCol/styled'

import {
  BottomBody,
  FooterBottom,
  FooterContainer,
  FooterTop,
  MediaLink,
  Navigation,
  Reserved,
  SocialMedia
} from './styled'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterTop>
        <Container>
          <Navigation>
            {footerContacts.map((item, i) => (
              <ContactCol key={i} item={item} />
            ))}
            <NavCol>
              <ColName>Get In Touch</ColName>
              <NavList>
                <NavItem>
                  <Link href="tel:4805550103" className="icon-call">
                    (480) 555-0103
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="#" className="icon-location">
                    4517 Washington Ave. Manchester, Kentucky 39495
                  </Link>
                </NavItem>
                <NavItem>
                  <Link href="mailto:debra.holt@example.com" className="icon-send">
                    debra.holt@example.com
                  </Link>
                </NavItem>
              </NavList>
            </NavCol>
          </Navigation>
        </Container>
      </FooterTop>
      <FooterBottom>
        <Container>
          <BottomBody>
            <Reserved>Made With Love By Figmaland All Right Reserved </Reserved>
            <SocialMedia>
              <MediaLink href="#" className="icon-fb" />
              <MediaLink href="#" className="icon-inst" />
              <MediaLink href="#" className="icon-tw" />
              <MediaLink href="#" className="icon-youtube" />
            </SocialMedia>
          </BottomBody>
        </Container>
      </FooterBottom>
    </FooterContainer>
  )
}

export default Footer
