import * as React from "react"
import styled from "styled-components"
import Navbar from "./navbar"
import { GatsbyImage } from "gatsby-plugin-image"

const PageHeader = ({imageFile}) => (
  <PageHeaderContainer>
    <Navbar navTop="150px"></Navbar>
    <div className="pageHeaderImg">
      <GatsbyImage image={imageFile} alt="Music Image"/>
    </div>
  </PageHeaderContainer>
)

const PageHeaderContainer = styled.div`

`

export default PageHeader