import React from 'react'
import PageHeader from '../components/pageHeader'
import Layout from '../components/layout'
import PageContent from '../components/pageContent'
import { graphql } from 'gatsby'
import { getImage } from "gatsby-plugin-image"

function Music({ data }) {
  const image = getImage(data.allFile.edges[0].node.childImageSharp);
  return (
    <Layout>
      <PageHeader imageFile={image}></PageHeader>
      <PageContent>
        Music
      </PageContent>
    </Layout>
  )
}

export const musicQuery = graphql`
  query {
    allFile (filter:{ relativePath:{ in:[
            "music.jpg"
            ]} }){
           edges {
             node {
              childImageSharp{
                gatsbyImageData(width: 4934)
              }
            }
         }
      }
  }
`

export default Music