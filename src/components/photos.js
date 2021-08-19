import * as React from "react"
import styled from "styled-components"
import { graphql } from 'gatsby'
import { getImage } from "gatsby-plugin-image"
import { GatsbyImage } from "gatsby-plugin-image"

function Photos({ data }) {
    //console.log(JSON.stringify(data));
    console.log(data.length);
    //const image = getImage(data.allFile.edges[0].node.childImageSharp);
    return (
        <PhotosContainer>
            <PhotosList>
            {
                data.map((image, i) => 
                <Photo>
                    <GatsbyImage 
                        image={getImage(image.node.childImageSharp)} 
                        alt={i + " - Photo from shoot"} class="photo"/>
                </Photo>
                )
            }
            </PhotosList>
      </PhotosContainer>
    )
}

export default Photos

const PhotosContainer = styled.div`
`

const PhotosList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  margin-left: 5%;
`

const Photo = styled.div`

`
