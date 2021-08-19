import React from 'react'
import PageHeader from '../components/pageHeader'
import Layout from '../components/layout'
import PageContent from '../components/pageContent'
import { graphql } from 'gatsby'
import { getImage } from "gatsby-plugin-image"
import MediaVideos from '../components/mediaVideos'
import styled from "styled-components"

const mediaVideoIDs = {
  Plan_BE: ["f_KVwfSX_Q0", "YZSYr6PqRHQ", "29CVuhNsneI"],
  Tabula_Rasa: ["7UqDjE_T9iY", "7UqDjE_T9iY", "7UqDjE_T9iY"],
  Odyssee: ["Xdv4mpHB5cs", "dQoONOKYQGM", "Zw0SXjR8N4k"],
  For_Aces: ["wCeIEYfH94", "BjyUOSm5Q48", "YnNCDc48aak"],
  Full_House: ["0ybyN0dnekw", "9UfQ_w6fkgs", "w4JTnC_kk1o"]
}

function Media({ data, location }) {
  const image = getImage(data.allFile.edges[0].node.childImageSharp);
  return (
    <Layout>
      <PageHeader imageFile={image}></PageHeader>
      <PageContent>
        <MediaTitle>{getProgramName(location, true)}</MediaTitle>
        <MediaVideos videoIDs={getVideoIDs(location)}></MediaVideos>
      </PageContent>
    </Layout>
  )
}

const getVideoIDs = (location) => {
  const programName = getProgramName(location, false);
  return mediaVideoIDs[programName];
}

const getProgramName = (location, displayFormat) => {
  if(location === undefined || location === null ||
    location.state === undefined || location.state === null){
    return "Plan BE";
  }
  if(displayFormat == false){
    return location.state.program;
  }
  return location.state.program.split("_").join(" ");
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

const MediaTitle = styled.h1`
  width: 100%;
  text-align: center;
`