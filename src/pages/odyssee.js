import React from 'react'
import PageHeader from '../components/pageHeader'
import Layout from '../components/layout'
import PageContent from '../components/pageContent'
import { graphql } from 'gatsby'
import { getImage } from "gatsby-plugin-image"
import styled from "styled-components"

function Odyssee({ data }) {
  const image = getImage(data.allFile.edges[0].node.childImageSharp);
  return (
    <Layout>
      <PageHeader imageFile={image}></PageHeader>
      <PageContent>
        <MusicContent>
          <Title>Odyssee (2013-2016)</Title>
          <Paragraph>
            Met Odyssee stellen we vol trots het resultaat voor van een reis die begon in 2008. Een tocht waarin we intense en emotionele momenten beleefden, maar tegelijk ook ontelbare momenten van kameraadschap en muzikaal genot.
            Elke compositie op dit album heeft haar eigen verhaal en daarom ook plaats op onze odysee. 
          </Paragraph>
          <Paragraph>
            Met de Fandango van Luigi Boccherini beleven we pure nostalgie. Het is het allereerste werk dat we als kwartet hebben gespeeld en zo ook de start van onze muzikale tocht. Bewondering en tonnen respect voor het genie van J.S Bach vertalen we in onze interpretatie van het Allegro Moderato uit zijn 3de Brandenburgse Concerto.
          </Paragraph>
          <Paragraph>
            Giacomo Puccini's Crisantemi wekt dan weer herinneringen en tranen op aan mensen die ons werden ontnomen om vervolgens te dansen en swingen in een carnaval met Baiao de gude en Bluezilian van de Braziliaanse componisten Paulo Bellinati en Clarice Assad.
            Tussen deze feestelijkheden door is er misschien even tijd voor een iets romantischer onderonsje met de liefde van ons leven tijdens het walsen op Pjotr Tchaikovsky's Swan Lake Waltz.
          </Paragraph>
          <Paragraph>
            Wanneer we verder gaan met Quiccan blikken we terug op een samenwerking met gitarist, componist en persoonlijkheid van wereldformaat Andrew York.
            Introspectie, stilte en eenvoud maken dan weer Arvo Pärts Summa zo intens waarna we herinneringen ophalen aan een buitenlands avontuur waar we Feast for Tantalus hoorden en fantaseerden dit werk ooit zelf te spelen.
          </Paragraph>
          <Paragraph>
            Tot slot zien we onszelf samen met Antonio Banderas het kwade bestrijden in de Mexicaanse woestenij terwijl we Cancion del Mariachi uit onze gitaren knallen.
            We hebben al een lange weg afgelegd, maar onze odyssee gaat verder...
          </Paragraph>
        </MusicContent>
      </PageContent>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allFile (filter:{ relativePath:{ in:[
            "odyssee-darker.jpg"
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

export default Odyssee