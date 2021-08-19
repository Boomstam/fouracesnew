import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"

const Language = () => (
  <LanguageContainer>
    <LanguageButton>NL</LanguageButton>
    <LanguageButton>FR</LanguageButton>
    <LanguageButton>EN</LanguageButton>
  </LanguageContainer>
)

export default Language;

const LanguageContainer = styled.div`
    display: flex;
    position: fixed;
    left: 0;
    top: 5px;
`

const LanguageButton = styled.div`
    font-size: var(--navBarFontSize);
    font-weight: 1000;
    color: white;
    padding: 5px;
    margin: 5px;
    &:hover {
      border-style: double;
      border-color: rgba(255, 255, 255, 0.5);
      border-width: 2px 0px;
      cursor: pointer;
  }
`