import * as React from "react"
import styled from "styled-components"
import Navbar from "./navbar"
import { GatsbyImage } from "gatsby-plugin-image"

const PageHeader = ({imageFile}) => (
  <PageHeaderContainer>
    <Navbar navTop="150px"></Navbar>
    <div className="pageHeaderImg">
      <GatsbyImage image={imageFile} alt="Music Image" />
    </div>
  </PageHeaderContainer>
)

const PageHeaderContainer = styled.div`

`

export default PageHeader

/* <HeaderTitle>FOUR ACES</HeaderTitle> */

/*const HeaderTitle = styled.div`
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
`*/