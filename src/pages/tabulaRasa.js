import React from 'react'
import PageHeader from '../components/pageHeader'
import Layout from '../components/layout'
import PageContent from '../components/pageContent'
import { graphql } from 'gatsby'
import { getImage } from "gatsby-plugin-image"
import styled from "styled-components"

function TabulaRasa({ data }) {
  const image = getImage(data.allFile.edges[0].node.childImageSharp);
  return (
    <Layout>
      <PageHeader imageFile={image}></PageHeader>
      <PageContent>
      <MusicContent>
          <Title>Tabula Rasa (2018-...)</Title>
          <Paragraph>
            Er was eens … een tijd dat er van de klassieke gitaar nog geen sprake was, laat staan van een gitaarkwartet. Componisten schreven toen voor klavecimbel, piano, viool, cello, orkest… en penden zo wereldfaam neer met werken die doorheen de eeuwen nog niets van hun kracht hebben verloren. 
            Hoewel… componisten bleven destijds vaak zoeken naar manieren om hun compositie te verbeteren en herschreven deze (soms deels) naar andere bezettingen.  
          </Paragraph>
          <Paragraph>
            Misschien hadden ze iets in gedachten dat gewoon nog niet mogelijk was? Misschien bleven ze op hun honger zitten en dit hun ganse componistenleven lang? Misschien bleef u als luisteraar wel op uw honger zitten? Misschien hebben wij hiervoor wel de ideale oplossing? 
          </Paragraph>
          <Paragraph>
            Want wat als bijvoorbeeld Mozart gitaar had gespeeld? Hoe klonk zijn werk dan? Of neem Bach en ruil zijn voorliefde voor de klavecimbel met die voor de gitaar? Of misschien was Bizet zijn ‘Carmen’ destijds wél een voltreffer geweest als hij gitaar had gebruikt in zijn opera om de Spaanse sfeer te capteren? 
          </Paragraph>
          <Paragraph>
            Tijd dus om opnieuw te beginnen. Alles weggummen en van meet af aan starten met 4 gitaren en alle mogelijkheden, facetten en klankkleuren in het achterhoofd die deze bezetting met zich meebrengt. Een wit vel papier, blanco, starten met een schone lei…
          </Paragraph>
          <Paragraph>
            Tabula rasa!
          </Paragraph>
        </MusicContent>
        <ProgramContent>
          <Title>Wat als Mozart gitaar had gespeeld? (60min.)</Title>
          <ProgramTitle>
            Sergei Rachmaninoff
          </ProgramTitle>
          <ProgramParagraph>
            Prelude Op. 23 n° 4 in D major, Andante Cantabile
          </ProgramParagraph>
          <ProgramTitle>
            Aleksandr Scriabin
          </ProgramTitle>
          <ProgramParagraph>
            Impromptu in B-flat minor, op. 12 n°2.  Andante cantabile
          </ProgramParagraph>
          <ProgramTitle>
            J.S. Bach
          </ProgramTitle>
          <ProgramParagraph>
            Fuga. Vivace from: Concerto for 2 Harpsichords in C major, BWV 1061
          </ProgramParagraph>
          <ProgramTitle>
            Claude Debussy
          </ProgramTitle>
          <ProgramSubtitle>
            Estampes
          </ProgramSubtitle>
          <ProgramParagraph>
            La soirée dans Grenade (Mouvement de Habanera)
          </ProgramParagraph>
          <ProgramTitle>
            Georges Bizet
          </ProgramTitle>
          <ProgramSubtitle>
            Carmen Suite
          </ProgramSubtitle>
          <ProgramParagraph>
            Aragonaise (Entr'acte before Act IV)
          </ProgramParagraph>
          <ProgramParagraph>
            Habanera (Act I, Aria (Carmen): L'amour est un oiseau rebelle)
          </ProgramParagraph>
          <ProgramParagraph>
            Final (Les toreadors Act I, Prélude)
          </ProgramParagraph>
          <ProgramTitle>
            W.A. Mozart
          </ProgramTitle>
          <ProgramParagraph>
          Allegro con Spirito from: Sonata for 2 Pianos in D major, K.448/375a
          </ProgramParagraph>
        </ProgramContent>
      </PageContent>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allFile (filter:{ relativePath:{ in:[
            "tabulaRasa.jpg"
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

export default TabulaRasa