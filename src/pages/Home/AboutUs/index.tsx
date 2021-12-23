import React from 'react'

import { Container } from 'components/containers/Container/styled'
import TitleBlock from 'components/sections/TitleBlock'
import { blockTitles } from 'utils/consts'

import {
  About,
  Designed,
  Item,
  ItemText,
  ItemTitle,
  Subtitle,
  Title,
  TrustedField,
  TrustedItems,
  Video,
  VideoFrame
} from './styled'

const AboutUs = () => {
  return (
    <About id="Advice">
      <Container>
        <TitleBlock item={blockTitles[2]} />
        <Designed>
          <Video>
            <VideoFrame
              src="https://www.youtube.com/embed/watch?v=YDKFWhBkC8c&ab_channel=webDev"
              frameBorder="0"
              title="Youtube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Video>
          <TrustedField>
            <Title>Most trusted in our field</Title>
            <Subtitle>
              Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan
              their schedule.
            </Subtitle>
            <TrustedItems>
              <Item>
                <ItemTitle>The quick fox jumps over the lazy dog</ItemTitle>
                <ItemText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, tempore?</ItemText>
              </Item>
              <Item>
                <ItemTitle>Lorem ipsum dolor sit amet, consectetur adipisicing elit</ItemTitle>
                <ItemText>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum, tempore?</ItemText>
              </Item>
            </TrustedItems>
          </TrustedField>
        </Designed>
      </Container>
    </About>
  )
}

export default AboutUs
