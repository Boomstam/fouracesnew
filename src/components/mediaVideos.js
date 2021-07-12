import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"



const MediaVideos = (data) => (
  <MediaVideosContainer>
    {console.log(data)}
    {console.log(data.videoIDs[0])}
    <VideoList>
        <Video>
            <iframe width="100%" height="100%" src={"https://www.youtube.com/embed/" + data.videoIDs[0]}>
            </iframe>
        </Video>
        <Video>
            <iframe width="100%" height="100%" src={"https://www.youtube.com/embed/" + data.videoIDs[1]}>
            </iframe>
        </Video>
        <Video>
            <iframe width="100%" height="100%" src={"https://www.youtube.com/embed/" + data.videoIDs[2]}>
            </iframe>
        </Video>
    </VideoList>
  </MediaVideosContainer>
)

export default MediaVideos

const MediaVideosContainer = styled.div`
{
    display: flex;
    z-index: 1;
}`

const VideoList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-left: 5%;
`

const Video = styled.div`
  margin: 20px;
  height: 200px;
`
