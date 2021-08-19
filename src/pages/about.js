import React from 'react'
import PageHeader from '../components/pageHeader'
import Layout from '../components/layout'
import PageContent from '../components/pageContent'
import { graphql } from 'gatsby'
import { getImage } from "gatsby-plugin-image"
import styled from "styled-components"

function About({ data }) {
  const image = getImage(data.allFile.edges[0].node.childImageSharp);
  return (
    <Layout>
      <PageHeader imageFile={image}></PageHeader>
      <PageContent>
        <AboutContent>
          <BiographyTitle>Biografie</BiographyTitle>
          <BiographyParagraph>Reeds vele jaren staat het Four Aces Guitar Quartet voor vier mannen, vier gitaren en alle gevolgen vandien. Of ze nu spelen in Amerika, Azië of Europa, steeds weer laten deze vier heren zien wat de magische combinatie van minsten 24 snaren allemaal teweeg kan brengen.</BiographyParagraph>
          <BiographyParagraph>Het Four Aces Guitar Quartet is in 2008 ontstaan toen vier gitaristen elkaar ontmoetten tijdens het Internationale Gitaar- symposium in Iserlohn. Hun eerste concert ooit was onderdeel van een afstudeerproject. Publiek en jury waren meteen onder de indruk van het gedurfde programma, de grote virtuositeit en het rijke muzikale kleurenpalet van het viertal. Sinds zijn debuut gaf het Four Aces Guitar Quartet optredens in de belangrijkste zalen van het land zoals Flagey, Bozar, het Concertgebouw Brugge, deSingel en tal van culturele centra.</BiographyParagraph>
          <BiographyParagraph>In het buitenland speelde het kwartet concerten in Nederland, Duitsland, Frankrijk, Slovenië, Italië, Georgië en China. In 2018 volgde een eerste concertreeks in de VS. In de zomer van 2019 staat opnieuw een tournee in China gepland. In 2013 werd het ensemble de laureaat van Supernova, een Belgische kamermuziekcompetitie die wordt ondersteund door het nationale radio- en televisienetwerk, de Belgische overheid en talrijke cultuurpartners. In 2017 won het kwartet de internationale kamermuziekcompetitie Paola Ruminelli in Ossola (Italië).</BiographyParagraph>
          <BiographyParagraph>Four Aces Guitar Quartet zijn: Menno Buggenhout, Inti de Maet, Maarten Vandenbemden en Stein Verrelst.</BiographyParagraph>
          <Quotes>
            <QuoteContainer>
              <Quote>Europe's leading guitar quartet.</Quote>
              <Source>-  Blair Jackson (Classical Guitar Magazine)</Source>
            </QuoteContainer>
            <QuoteContainer>
              <Quote>I know a great quartet when I hear one!</Quote>
              <Source>-  Andrew York (Grammy-award winner and form LAGQ-member)</Source>
            </QuoteContainer>
            <QuoteContainer>
              <Quote>Wat spelen ze heerlijk deze jongens!</Quote>
              <Source>-  de Standaard</Source>
            </QuoteContainer>
            <QuoteContainer>
              <Quote>Vier azen is troef!</Quote>
              <Source>-  Klara</Source>
            </QuoteContainer>
          </Quotes>
        </AboutContent>
      </PageContent>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allFile (filter:{ relativePath:{ in:[
            "about.jpg"
            ]} }){
           edges {
             node {
              childImageSharp{
                gatsbyImageData(width: 1000)
              }
            }
         }
      }
  }
`

export default About

const AboutContent = styled.div`
  width: 80%;
  margin: 0 auto;
`

const BiographyTitle = styled.div`
  font-size: 36px;
  font-weight: 1000;
  margin: 20px 0px;
`

const BiographyParagraph = styled.p`
  font-size: 18px;
`

const Quotes = styled.div`
  margin-top: 75px;
`

const QuoteContainer = styled.div`
  margin-top: 10px;
  display: flex;
`

const Quote = styled.p`
  font-size: 20px;
`

const Source = styled.p`
  font-size: 18px;
  font-style: italic;
  margin-left: 10px;
`