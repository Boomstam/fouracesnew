import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

const NavBar = ({ siteTitle }) => (
  <NavContainer>
      <NavItem>HOME</NavItem>
      <NavItem>MUSIC</NavItem>
      <NavItem>MEDIA</NavItem>
      <NavItem>CALENDAR</NavItem>
      <NavItem>STORE</NavItem>
      <NavItem>ABOUT</NavItem>
      <NavItem>CONTACT</NavItem>
  </NavContainer>
)

export default NavBar

const NavContainer = styled.nav`
    display: flex;
    width: 50%;
    left: 25%;
    position: absolute;
    font-size: var(--navBarFontSize);
    font-weight: 1000;
    top: calc(60% - var(--navBarFontSize));
`

const NavItem = styled.div`
    color: white;
    flex-grow: 1;
    text-align: center;
    &:hover {
        border-style: double;
        border-color: rgba(255, 255, 255, 0.5);
        border-width: 2px 0px;
        cursor: pointer;
    }
`