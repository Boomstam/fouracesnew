import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import PageNavBar from "./pageNavBar"

const PageHeader = () => (
  <PageHeaderContainer>
    <HomeTitle>FOUR ACES</HomeTitle>
    <PageNavBar></PageNavBar>
    <div className="pageHeaderImg">
        <StaticImage 
        src="../images/pageHeader.jpg"
        alt="Header image"
        />
    </div>
  </PageHeaderContainer>
)

const PageHeaderContainer = styled.div`
    
`

const HomeTitle = styled.div`
  width: 100vw;
  font-weight: 1000;
  text-align : center;
  position: absolute;
  font-size: 69px;
  top: 69px;
  line-height: 100px;
  left: 0;

  @media screen and (min-width: 992px){
    font-size: 112px;
    top: 20px;
  }
`

export default PageHeader