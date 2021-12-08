import React, { FC } from 'react'

import Benefits from './Benefits'
import Experience from './Experience'
import StartSection from './StartSection'

const Home: FC = () => {
  return (
    <>
      <StartSection />
      <Benefits />
      <Experience />
    </>
  )
}

export default Home
