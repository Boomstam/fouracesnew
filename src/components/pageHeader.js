import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import PageNavBar from "./pageNavBar"

const PageHeader = () => (
  <PageHeaderContainer>
    <HeaderTitle>FOUR ACES</HeaderTitle>
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

const HeaderTitle = styled.div`
  width: 100vw;
  font-weight: 1000;
  text-align : center;
  position: absolute;
  font-size: 69px;
  top: 69px;
  line-height: 100px;
  left: 0;

  @media screen and (min-width: 992px){
    font-size: 75px;
    top: 20px;
  }
`

export default PageHeader