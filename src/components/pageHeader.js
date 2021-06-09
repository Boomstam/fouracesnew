import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

const PageHeader = () => (
  <PageHeaderContainer>
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

export default PageHeader