import React from 'react'
import styled from "styled-components"
import Layout from '../components/layout'
import PageContent from '../components/pageContent'
import PageHeader from '../components/pageHeader'

export default class About extends React.Component
{
  render()
  {
      return(
          <Layout>
            <PageHeader></PageHeader>
            <PageContent>
              <BiographyTitle>Biografie</BiographyTitle>
              <BiographyParagraph>Reeds vele jaren staat het Four Aces Guitar Quartet voor vier mannen, vier gitaren en alle gevolgen vandien. Of ze nu spelen in Amerika, Azië of Europa, steeds weer laten deze vier heren zien wat de magische combinatie van minsten 24 snaren allemaal teweeg kan brengen.</BiographyParagraph>
              <BiographyParagraph>Het Four Aces Guitar Quartet is in 2008 ontstaan toen vier gitaristen elkaar ontmoetten tijdens het Internationale Gitaar- symposium in Iserlohn. Hun eerste concert ooit was onderdeel van een afstudeerproject. Publiek en jury waren meteen onder de indruk van het gedurfde programma, de grote virtuositeit en het rijke muzikale kleurenpalet van het viertal. Sinds zijn debuut gaf het Four Aces Guitar Quartet optredens in de belangrijkste zalen van het land zoals Flagey, Bozar, het Concertgebouw Brugge, deSingel en tal van culturele centra.</BiographyParagraph>
              <BiographyParagraph>In het buitenland speelde het kwartet concerten in Nederland, Duitsland, Frankrijk, Slovenië, Italië, Georgië en China. In 2018 volgde een eerste concertreeks in de VS. In de zomer van 2019 staat opnieuw een tournee in China gepland. In 2013 werd het ensemble de laureaat van Supernova, een Belgische kamermuziekcompetitie die wordt ondersteund door het nationale radio- en televisienetwerk, de Belgische overheid en talrijke cultuurpartners. In 2017 won het kwartet de internationale kamermuziekcompetitie Paola Ruminelli in Ossola (Italië).</BiographyParagraph>
              <BiographyParagraph>Four Aces Guitar Quartet zijn: Menno Buggenhout, Inti de Maet, Maarten Vandenbemden en Stein Verrelst.</BiographyParagraph>
            </PageContent>
        </Layout>
      )
  }
}

const BiographyTitle = styled.div`
  font-size: 36px;
  font-weight: 1000;
  margin: 20px 0px;
`

const BiographyParagraph = styled.p`
  font-size: 18px;
`