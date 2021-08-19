import * as React from "react"
import styled from "styled-components"

const Photos = () => (
  <PhotosContainer>
    <PhotosList>
        <Photo>
            Photos
        </Photo>
    </PhotosList>
  </PhotosContainer>
)

export default Photos

const PhotosContainer = styled.div`
`

const PhotosList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-left: 5%;
`

const Photo = styled.div`

`
