import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

const MediaVideos = (data) => (
  <MediaVideosContainer>
    <VideoList>
        <Video>
            <iframe width="100%" height="100%" src={videoID(data, 0)}>
            </iframe>
        </Video>
        <Video>
            <iframe width="100%" height="100%" src={videoID(data, 1)}>
            </iframe>
        </Video>
        <Video>
            <iframe width="100%" height="100%" src={videoID(data, 2)}>
            </iframe>
        </Video>
    </VideoList>
  </MediaVideosContainer>
)

const youtubePrefix = "https://www.youtube.com/embed/";
const defaultIDs = ["f_KVwfSX_Q0", "YZSYr6PqRHQ", "29CVuhNsneI"];

const videoID = (data, index) => {
  if(data === undefined || data === null ||
    data.videoIDs === undefined || data.videoIDs === null){
    return youtubePrefix + defaultIDs[index];
  }
  return youtubePrefix + data.videoIDs[index];
}

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
