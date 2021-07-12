import React from 'react'
import PageHeader from '../components/pageHeader'
import Layout from '../components/layout'
import PageContent from '../components/pageContent'
import { graphql } from 'gatsby'
import { getImage } from "gatsby-plugin-image"
import MediaVideos from '../components/mediaVideos'
import styled from "styled-components"

const mediaVideoIDs = {
  planBE: ["f_KVwfSX_Q0", "YZSYr6PqRHQ", "29CVuhNsneI"],
  tabulaRasa: ["7UqDjE_T9iY", "7UqDjE_T9iY", "7UqDjE_T9iY"],
  odyssee: ["Xdv4mpHB5cs", "dQoONOKYQGM", "Zw0SXjR8N4k"],
  forAces: ["wCeIEYfH94", "BjyUOSm5Q48", "YnNCDc48aak"],
  fullHouse: ["0ybyN0dnekw", "9UfQ_w6fkgs", "w4JTnC_kk1o"]
}

function Media({ data, location }) {
  const image = getImage(data.allFile.edges[0].node.childImageSharp);
  /*console.log(location.state.program);
  console.log(mediaVideoIDs[location.state.program]);*/
  return (
    <Layout>
      <PageHeader imageFile={image}></PageHeader>
      <PageContent>
        <MediaVideos videoIDs={mediaVideoIDs[location.state.program]}></MediaVideos>
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


/*
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



const VideoList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const Video = styled.div`
  margin: 50px;
  height: 300px;
`

*/