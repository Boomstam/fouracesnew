import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from 'styled-components'
import Layout from "../components/layout"
import { css } from "@emotion/react"

const IndexPage = () => (
  <Layout>
    <div className="homeImgContainer">
      <StaticImage 
        src="../images/homeImage.jpg"
        alt="Four Aces Belgica"
        />
      </div>
    <HomeTitle>FOUR ACES</HomeTitle>
    <HomeSubTitle>Guitar Quartet</HomeSubTitle>
  </Layout>
)

export default IndexPage

const HomeTitle = styled.div`
  width: 100vw;
  font-weight: 1000;
  text-align : center;
  position: absolute;
  font-size: 100px;
  top: 18vh;
  line-height: 100px;
  left: 0;
`

const HomeSubTitle = styled.div`
  width: 100vw;
  font-weight: 800;
  text-align : center;
  position: absolute;
  font-size: 50px;
  top: 60vh;
  left: 0;

  @media screen and (min-width: 558px){
    top: 40vh;
  }
`