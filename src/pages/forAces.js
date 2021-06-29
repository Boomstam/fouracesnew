import React from 'react'
import PageHeader from '../components/pageHeader'
import Layout from '../components/layout'
import PageContent from '../components/pageContent'
import { graphql } from 'gatsby'
import { getImage } from "gatsby-plugin-image"
import styled from "styled-components"

function ForAces({ data }) {
  const image = getImage(data.allFile.edges[0].node.childImageSharp);
  return (
    <Layout>
      <PageHeader imageFile={image}></PageHeader>
      <PageContent>
      <MusicContent>
          <Title>For Aces (2016-2018)</Title>
          <Paragraph>
            Een warme nazomeravond op een terras in het Italiaanse Verona. Vier mannen, vier glazen wijn, een kleine portie teleurstelling en een leven lang gerijpte dromen: meer was er niet nodig om For Aces het eerste leven in te blazen.
            'Laten we iets maken dat echt van ons is, iets voor onszelf, voor de gitaar en haar veelzijdigheid en al haar liefhebbers'.
            Zo begon onze zoektocht naar nieuwe muziek van de bovenste plank, in alle mogelijk stijlen en vormen.
          </Paragraph>
          <Paragraph>
            For Aces is meer dan een zoveelste muzikaal avontuur. Oude vriendschappen werden aangehaald, maar ook nieuwe zijn ontsproten uit onze zoektocht naar nieuwe klanken, beelden en verhalen. 
            Vriendschapen die inspireerden om het beste uit onszelf naar boven te halen en die resulteerden in een samenwerking waardoor we elkaar ook als mens beter leerden kennen. Vele mails, treintickets, repetities, etentjes en hier en daar een drankje later tonen we jullie vol trots het resultaat van een jaar hard werken.
          </Paragraph>
          <Paragraph>
            Al onze geliefden, familie en vrienden verdienen eeuwige dank en lof voor hun steun en voor hun sporadische kritiek. Bovendien bedanken we graag in het bijzonder de componisten met wie we de afgelopen maanden hebben kunnen samenwerken en iedereen die heeft geholpen bij het verwezenlijken van onze gezamenlijke droom. 
            Plannen werden gesmeed, spanning werd opgebouwd en uiteindelijk, na meer gemiste dan gehaalde deadlines ontladen in de opnamestudio. Een opwindend hoofdstuk loopt ten einde, maar de herinneringen ervan staan voor eeuwig op dit schijfje. Ook nu gaat onze odyssee gewoon voort, nieuwe dromen, verhalen en reizen tegemoet.
          </Paragraph>
          <Paragraph>
            Bedankt, dankjewel, thank you, grazie mille, merci beaucoup, hvala, tack en toch ook een beetje arigatou gozaimashita.
          </Paragraph>
        </MusicContent>
      </PageContent>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allFile (filter:{ relativePath:{ in:[
            "forAces.jpg"
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

export default ForAces