import React from 'react'
import PageHeader from '../components/pageHeader'
import Layout from '../components/layout'
import PageContent from '../components/pageContent'
import { graphql } from 'gatsby'
import { getImage } from "gatsby-plugin-image"
import MediaVideos from '../components/mediaVideos'
import Photos from '../components/photos'
import styled from "styled-components"

const mediaVideoIDs = {
  Plan_BE: ["f_KVwfSX_Q0", "YZSYr6PqRHQ", "29CVuhNsneI"],
  Tabula_Rasa: ["7UqDjE_T9iY", "7UqDjE_T9iY", "7UqDjE_T9iY"],
  Odyssee: ["Xdv4mpHB5cs", "dQoONOKYQGM", "Zw0SXjR8N4k"],
  For_Aces: ["wCeIEYfH94", "BjyUOSm5Q48", "YnNCDc48aak"],
  Full_House: ["0ybyN0dnekw", "9UfQ_w6fkgs", "w4JTnC_kk1o"]
}

const headerImageIndex = 0;

function Media({ data, location }) {
  const edges = data.allFile.edges;
  const headerImage = getImage(edges[headerImageIndex].node.childImageSharp);
  
  if(isPhotos(location)){
    return (
      <Layout>
        <PageHeader imageFile={headerImage}></PageHeader>
        <PageContent>
          <Photos data={edges}></Photos>
        </PageContent>
      </Layout>
    )
  } else {
    return (
      <Layout>
        <PageHeader imageFile={headerImage}></PageHeader>
        <PageContent>
          <MediaTitle>{getProgramName(location, true)}</MediaTitle>
          <MediaVideos videoIDs={getVideoIDs(location)}></MediaVideos>
        </PageContent>
      </Layout>
    )
  }
}

const isPhotos  = (location) => {
  if(location === undefined || location === null ||
    location.state === undefined || location.state === null){
    return false;
  }
  return location.state.program === "Photos";
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
/*filter:{ 
      relativePath:{ in:["about.jpg"]},
      or: { relativeDirectory: { eq: "photos"} }
      }*/
export const pageQuery = graphql`
  query {
    allFile (
      filter: { relativeDirectory: { eq: "photos"} }
    ){
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