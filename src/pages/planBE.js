import React from 'react'
import PageHeader from '../components/pageHeader'
import Layout from '../components/layout'
import PageContent from '../components/pageContent'
import { graphql } from 'gatsby'
import { getImage } from "gatsby-plugin-image"
import styled from "styled-components"

function PlanBE({ data }) {
  const image = getImage(data.allFile.edges[0].node.childImageSharp);
  return (
    <Layout>
      <PageHeader imageFile={image}></PageHeader>
      <PageContent>
      <MusicContent>
          <Title>Plan BE</Title>
          <Paragraph>
          Bier, chocolade, spruitjes, witloof, kazen, allemaal trefwoorden die onlosmakelijk verbonden zijn met ons Belgenlandje en die ons wereldwijd op de kaart zetten… maar laten we ons muzikaal heden en verleden vooral niet vergeten!
          </Paragraph>
          <Paragraph>
          In Plan BE gaat je favoriete gitaarkwartet dan ook aan de slag met parels ‘van bij ons’. Stukken met een uniek karakter, een hoek af, een beetje je m’en fous’, maar puur en onversneden Belgisch op een dienblad gemaakt van 4 gitaren.
          </Paragraph>
          <Paragraph>
          César Franck, Frédéric Devreese, Django Reinhardt en vele andere muzikale grootheden zijn tot ver buiten onze landsgrenzen bekend en verdienen nogmaals hun moment. Het kruim van de Belgische componisten staat dan ook centraal in dit hart -en oorverwarmend concert.
          </Paragraph>
          <Paragraph>
          Azen van bij ons, muziek van ons.
          </Paragraph>
        </MusicContent>
        <ProgramContent>
          <Title>Programma Plan BE</Title>
          <ProgramTitle>
          Josquin Desprez
          </ProgramTitle>
          <ProgramParagraph>
          Mille regretz
          </ProgramParagraph>
          <ProgramTitle>
          Adriaan Willaert
          </ProgramTitle>
          <ProgramParagraph>
          Vecchie letrose
          </ProgramParagraph>
          <ProgramTitle>
          Charles- Joseph Von Helmont
          </ProgramTitle>
          <ProgramSubtitle>
          Suite in G majeur Op. 1/2
          </ProgramSubtitle>
          <ProgramParagraph>
          I La Sauteuse - Rondeau
          </ProgramParagraph>
          <ProgramParagraph>
          II Le Tambourin
          </ProgramParagraph>
          <ProgramParagraph>
          III La Lisette - Rondeau
          </ProgramParagraph>
          <ProgramParagraph>
          IV Le Tambourin (Double)
          </ProgramParagraph>
          <ProgramTitle>
          César Franck
          </ProgramTitle>
          <ProgramParagraph>
          Prelude, fugue {"&"} variations
          </ProgramParagraph>
          <ProgramTitle>
          Frédéric Devreese
          </ProgramTitle>
          <ProgramParagraph>
          I Prelude 2
          </ProgramParagraph>
          <ProgramParagraph>
          II Romantic Waltz
          </ProgramParagraph>
          <ProgramTitle>
          James Ensor 
          </ProgramTitle>
          <ProgramParagraph>
          Valse caprice
          </ProgramParagraph>
          <ProgramTitle>
          Flor Alpaerts
          </ProgramTitle>
          <ProgramParagraph>
          Salomé's dance of the seven veils
          </ProgramParagraph>
          <ProgramTitle>
          Jennik Verlinden
          </ProgramTitle>
          <ProgramParagraph>
          Babita
          </ProgramParagraph>
          <ProgramTitle>
          Peter Benoit
          </ProgramTitle>
          <ProgramParagraph>
          Fantasy for Piano n°3 Opus 18 
          </ProgramParagraph>
          <ProgramTitle>
          Lodewijk Mortelmans
          </ProgramTitle>
          <ProgramParagraph>
          Het Wielewaalt en Leeuwerkt
          </ProgramParagraph>
          <ProgramTitle>
          Alain Selhorst
          </ProgramTitle>
          <ProgramParagraph>
          Tokyo Suite
          </ProgramParagraph>
          <ProgramTitle>
          Inti De Maet/Menno Buggenhout
          </ProgramTitle>
          <ProgramParagraph>
          Droplet
          </ProgramParagraph>
          <ProgramTitle>
          Django Reinhardt
          </ProgramTitle>
          <ProgramParagraph>
          Djangofollies
          </ProgramParagraph>
        </ProgramContent>
      </PageContent>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allFile (filter:{ relativePath:{ in:[
            "planBE.jpg"
            ]} }){
           edges {
             node {
              childImageSharp{
                gatsbyImageData(width: 2000)
              }
            }
         }
      }
  }
`

const MusicContent = styled.div`
  width: 80%;
  margin: 0 auto;
`

const Title = styled.h1`

`

const Paragraph = styled.p`

`

const ProgramContent = styled.div`
  text-align: center;
  width: 100%;
  margin-top: 69px;
`

const ProgramTitle = styled.h2`
  margin-top: 50px;
`

const ProgramSubtitle = styled.h3`
  
`

const ProgramParagraph = styled.p`
  
`

export default PlanBE