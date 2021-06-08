import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../styles/layout.css"
import styled from "styled-components"
import NavBar from "./navbar"
import Socials from "./socials"
import "@fontsource/eb-garamond/500.css" // Weight 500.

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
    <Header siteTitle={data.site.siteMetadata?.title || `Title`} />    
     
      <div>
        <Main>
          <NavBar></NavBar>
          <Socials></Socials>
          {children}
        </Main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const Main = styled.main`
{
  color: var(--textColor);
}`