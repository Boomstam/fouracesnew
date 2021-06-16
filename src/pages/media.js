import React from 'react'
import PageHeader from '../components/pageHeader'
import Layout from '../components/layout'
import PageContent from '../components/pageContent'
import { graphql } from 'gatsby'
import { getImage } from "gatsby-plugin-image"
import styled from "styled-components"

function Media({ data }) {
  const image = getImage(data.allFile.edges[0].node.childImageSharp);
  return (
    <Layout>
      <PageHeader imageFile={image}></PageHeader>
      <PageContent>
      Media
      </PageContent>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allFile (filter:{ relativePath:{ in:[
            "media.jpg"
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

export default Media