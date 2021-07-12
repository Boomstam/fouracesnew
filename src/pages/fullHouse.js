import React from 'react'
import PageHeader from '../components/pageHeader'
import Layout from '../components/layout'
import PageContent from '../components/pageContent'
import { graphql } from 'gatsby'
import { getImage } from "gatsby-plugin-image"
import styled from "styled-components"

function FullHouse({ data }) {
  const image = getImage(data.allFile.edges[0].node.childImageSharp);
  return (
    <Layout>
      <PageHeader imageFile={image}></PageHeader>
      <PageContent>
      <MusicContent>
          <Title>Full House</Title>
          <Paragraph>
          Buiten de popwereld vormt gitaar misschien niet het meest voor de-hand-liggende instrument. En de combinatie met strijkersensemble is dat wellicht nog minder. U heeft er misschien nog nooit van gehoord?
          </Paragraph>
          <Paragraph>
          Met Full House kleuren het Ataneres Ensemble en Four Aces Guitar Quartet buiten de lijntjes van de klassieke muziek. De excentrieke bezetting van deze productie enerzijds en de diverse - soms gewaagde - stukkenkeuze anderzijds, belooft het publiek een spannende ontdekkingsreis van nieuwe kleuren en dynamiek. Het uitzonderlijke technische niveau van onze solisten, ook wat betreft Zuiderse muziek en speeltechnieken, garandeert een avond vol vurige virtuositeit.
          </Paragraph>
          <Paragraph>
          Dit programma vangt aan met een transcriptie van het bekende concerto voor vier piano's van J.S. Bach. Daarna staan enkele pareltjes uit de filmmuziek op het menu. Ook bekende Latijns- Amerikaanse componisten als M. de Falla en A. Piazzolla passeren de revue.
          </Paragraph>
          <Paragraph>
          Tenslotte neemt Marcel De Jonghe, van eigen bodem, een persoonlijk loopje met het voorbeeld van die laatste. "A touch of Astor" is een uniek werk dat speciaal voor deze productie werd gecreëerd.
          </Paragraph>
          <Paragraph>
          Full House - de terminologie doet het al vermoeden - is  steevast gericht op het brede publiek. Deze avond met een verrassend gekruide wereldkeuken zal u vast smaken!
          </Paragraph>
        </MusicContent>
        <Trailer>
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/KTUvOzge5jg">
          </iframe>
        </Trailer>
        <ProgramContent>
          <Title>Programma Full House</Title>
          <ProgramTitle>
          J.S. Bach
          </ProgramTitle>
          <ProgramParagraph>
          Concerto voor 4 piano’s BWV 1065
          </ProgramParagraph>
          <ProgramTitle>
          Philip Glass
          </ProgramTitle>
          <ProgramParagraph>
          Mishima - November 25
          </ProgramParagraph>
          <ProgramTitle>
          Manuel De Falla
          </ProgramTitle>
          <ProgramParagraph>
          Suite voor strijkers en 4 gitaren
          </ProgramParagraph>
          <ProgramTitle>
          Philip Glass
          </ProgramTitle>
          <ProgramParagraph>
          Mishima - Grandmother and Kimitake
          </ProgramParagraph>
          <ProgramTitle>
          Patrick Roux
          </ProgramTitle>
          <ProgramParagraph>
            Carnaval
          </ProgramParagraph>
          <ProgramTitle>
          Philip Glass
          </ProgramTitle>
          <ProgramParagraph>
          Mishima - Body Building
          </ProgramParagraph>
          <ProgramTitle>
          Patrick Roux
          </ProgramTitle>
          <ProgramParagraph>
          Aqua Cenas
          </ProgramParagraph>
          <ProgramTitle>
          Astor Piazzolla
          </ProgramTitle>
          <ProgramParagraph>
          Libertango
          </ProgramParagraph>
          <ProgramTitle>
          Marcel De Jonghe
          </ProgramTitle>
          <ProgramParagraph>
          A Touch of Astor
          </ProgramParagraph>
          <ProgramTitle>
          Ernesto Lecuona
          </ProgramTitle>
          <ProgramParagraph>
          Malaguena Salerosa
          </ProgramParagraph>
        </ProgramContent>
      </PageContent>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allFile (filter:{ relativePath:{ in:[
            "fullHouse.webp"
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

const Trailer = styled.div`
  width: 80%;
  height: 500px;
  margin: 50px 10%;
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

export default FullHouse