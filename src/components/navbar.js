import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const links = {
    home: "/",
    music: "/music",
    planBE: "/planBE",
    tabulaRasa: "/tabulaRasa",
    fullHouse: "/fullHouse",
    forAces: "/forAces",
    odyssee: "/odyssee",
    media: "/media",
    calendar: "/calendar",
    store: "/store",
    about: "/about",
    contact: "/contact",
}

const Navbar = ({navTop}) => (
  <Nav>
      <Hamburger>
            <Bun></Bun>
            <Bun></Bun>
            <Bun></Bun>
        </Hamburger>
    <NavContainer style={{top: navTop}}>
        <NavItem to={links.home}>HOME</NavItem>
        <Dropdown>
            <DropdownPlaceholder>
                Music
            </DropdownPlaceholder>
            <DropdownValueContainer>
                <NavItem to={links.planBE}>PlanBE</NavItem>
                <NavItem to={links.tabulaRasa}>Tabula Rasa</NavItem>
                <NavItem to={links.fullHouse}>Full House</NavItem>
                <NavItem to={links.forAces}>For Aces</NavItem>
                <NavItem to={links.odyssee}>Odyssee</NavItem>
            </DropdownValueContainer>
        </Dropdown>
        <NavItem to={links.about}>ABOUT</NavItem>
        <NavItem to={links.media}>MEDIA</NavItem>
        <NavItem to={links.calendar}>CALENDAR</NavItem>
        <NavItem to={links.store}>STORE</NavItem>
        <NavItem to={links.contact}>CONTACT</NavItem>
    </NavContainer>
  </Nav>
)

export default Navbar

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
    
    display: none;

    @media screen and (min-width: 992px){
        display: flex;
    }
`

const Dropdown = styled.div`
    flex-grow: 1;
`

const DropdownPlaceholder = styled.div`
    
`

const DropdownValueContainer = styled.div`
    
`

const NavItem = styled(Link)`
    color: white;
    flex-grow: 1;
    text-align: center;
    text-decoration: none;
    transition: border 100ms, scale 100ms;

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