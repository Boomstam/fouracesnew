import React from 'react'
import Layout from '../components/layout'
import PageHeader from '../components/pageHeader'
import { StaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image";

function Music({ data }) {
  const image = getImage(data.allFile.edges[0].node.childImageSharp);
  return (
    <section>
      <PageHeader imageFile={image}></PageHeader>
    </section>
  )
}

export const pageQuery = graphql`
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

export default Music;