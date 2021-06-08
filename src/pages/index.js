import * as React from "react"
import { MainImage, StaticImage } from "gatsby-plugin-image"
import styled from 'styled-components'
import Layout from "../components/layout"
import { css } from "@emotion/react"

/*

min-height: 100%;
min-width: 1024px;

width: 100%;
height: auto;
*/

const homeImgStyle = { 
  minHeight:`100%`,
  minWidth: `1024px`,
  width: `100%`,
  height: `auto`,
  position: `absolute`,
  left: `0`,
  top: `0`,
  zIndex : `-1`,
  filter: `brightness(75%)`
};

//css={css`
//border: 4px green dashed;
//`}

const IndexPage = () => (
  <Layout>
    <div className="homeImgContainer">
      <StaticImage 
        src="../images/homeImage.jpg"
        /*style={homeImgStyle}*/
        alt="Four Aces Belgica"
        
        />
      </div>
    <HomeTitle>FOUR ACES</HomeTitle>
    <HomeSubTitle>Guitar Quartet</HomeSubTitle>
  </Layout>
)

export default IndexPage

const HomeImg = styled.div`
  min-height: 100%,
  min-width: 1024px,
  width: 100%,
  height: auto,
  position: absolute,
  left: 0,
  top: 0,
  z-index : -1,
  filter: brightness(75%)
`

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