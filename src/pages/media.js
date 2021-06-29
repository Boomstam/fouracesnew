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
        <VideoList>
          <Video>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/_wCeIEYfH94">
            </iframe>
          </Video>
          <Video>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/BjyUOSm5Q48">
            </iframe>
          </Video>
          <Video>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/L8oE-3jONqA">
            </iframe>
          </Video>
          <Video>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/GYoOzoOu6io">
            </iframe>
          </Video>
          <Video>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/H8BaeRGGvn4">
            </iframe>
          </Video>
          <Video>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/BjyUOSm5Q48">
            </iframe>
          </Video>
        </VideoList>
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

const VideoList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const Video = styled.div`
  margin: 50px;
  height: 300px;
`

export default Media