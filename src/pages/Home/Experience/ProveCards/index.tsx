import React from 'react'

import AdvantageCard from 'components/sections/AdvantageCard'
import { advantageList } from 'utils/consts'

import { CardsRow } from './styled'

const ProveCards = () => {
  return (
    <CardsRow>
      {advantageList.map((item, index) => (
        <AdvantageCard key={index} item={item} />
      ))}
    </CardsRow>
  )
}

export default ProveCards
