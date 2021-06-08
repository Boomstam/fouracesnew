import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from 'styled-components'
import Layout from "../components/layout"

const homeImgStyle = { 
  height:`100vh`, 
  position: `absolute`, 
  left: `0`, 
  top: `0`, 
  zIndex : `-1`, 
  filter: `brightness(75%)`
};

const IndexPage = () => (
  <Layout>
    <StaticImage 
      src="../images/homeImage.jpg"
      style={homeImgStyle}
      alt="Four Aces Belgica"/>
    <HomeTitle>FOUR ACES</HomeTitle>
    <HomeSubTitle>Guitar Quartet</HomeSubTitle>
  </Layout>
)

export default IndexPage

const HomeTitle = styled.div`
  width: 100%;
  font-weight: 1000;
  text-align : center;
  position: absolute;
  font-size: 100px;
  top: calc(40% - 100px);
  left: 0;
`

const HomeSubTitle = styled.div`
  width: 100%;
  font-weight: 800;
  text-align : center;
  position: absolute;
  font-size: 50px;
  top: calc(45% - 50px);
  left: 0;
`