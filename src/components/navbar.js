import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"

const links = {
    home: "/",
    music: "/music",
    media: "/media",
    calendar: "/calendar",
    store: "/store",
    about: "/about",
    contact: "/contact",
}

const NavBar = () => (
  <Nav>
      <Hamburger>
            <Bun></Bun>
            <Bun></Bun>
            <Bun></Bun>
        </Hamburger>
    <NavContainer>
        <NavItem to={links.home}>HOME</NavItem>
        <NavItem to={links.music}>MUSIC</NavItem>
        <NavItem to={links.media}>MEDIA</NavItem>
        <NavItem to={links.calendar}>CALENDAR</NavItem>
        <NavItem to={links.store}>STORE</NavItem>
        <NavItem to={links.about}>ABOUT</NavItem>
        <NavItem to={links.contact}>CONTACT</NavItem>
    </NavContainer>
  </Nav>
)

export default NavBar

const Nav = styled.div`
    
`

const Hamburger = styled.div`
    position: fixed;
    left: 15px;
    top: 15px;
    display: block;
    cursor: pointer;
    transition: scale 100ms;

    @media screen and (min-width: 992px){
        display: none;
    }

    &:hover {
        scale: 1.1;
    }

    &:active {
        scale: 0.9;
    }
`

const Bun = styled.div`
    padding: 3px 0px;
    background-color: black;
    width: 50px;
    border-radius: 10px;
    margin-bottom: 6px;
    border: 1px solid white;
`

const NavContainer = styled.nav`
    display: flex;
    width: 80%;
    left: 10%;
    position: absolute;
    font-size: var(--navBarFontSize);
    font-weight: 1000;    
    top: 450px;
    display: none;

    @media screen and (min-width: 992px){
        display: flex;
    }
`

const NavItem = styled(Link)`
    color: white;
    flex-grow: 1;
    text-align: center;
    text-decoration: none;

    &:hover {
        border-style: double;
        border-color: rgba(255, 255, 255, 0.5);
        border-width: 2px 0px;
        cursor: pointer;
    }

    &:active {
        scale: 0.9;
    }
`