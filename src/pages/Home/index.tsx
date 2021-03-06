import React, { FC } from 'react'

import AboutUs from './AboutUs'
import Advices from './Advices'
import Benefits from './Benefits'
import ContactUs from './ContactUs'
import Experience from './Experience'
import StartSection from './StartSection'
import StuffContact from './StuffContact'
import Subscribe from './Subscribe'

const Home: FC = () => {
  return (
    <>
      <StartSection />
      <Benefits />
      <Experience />
      <Advices />
      <AboutUs />
      <Subscribe />
      <StuffContact />
      <ContactUs />
    </>
  )
}

export default Home
