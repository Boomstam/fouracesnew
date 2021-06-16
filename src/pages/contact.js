import React from 'react'
import PageHeader from '../components/pageHeader'
import Layout from '../components/layout'
import PageContent from '../components/pageContent'
import { graphql } from 'gatsby'
import { getImage } from "gatsby-plugin-image"
import styled from "styled-components"

function Contact({ data }) {
  const image = getImage(data.allFile.edges[0].node.childImageSharp);
  return (
    <Layout>
      <PageHeader imageFile={image}></PageHeader>
      <PageContent>
        Contact
      </PageContent>
    </Layout>
  )
}

export const contactQuery = graphql`
  query {
    allFile (filter:{ relativePath:{ in:[
            "logo.png"
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

export default Contact