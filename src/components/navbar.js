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
        <Dropdown className="dropdown">
            <DropdownPlaceholder className="dropdown-placeholder">MUZIEK</DropdownPlaceholder>
            <DropdownValueContainer className="dropdown-value-container">
                <ActivePlaceholder>MUZIEK</ActivePlaceholder>
                <DropdownLink to={links.planBE}>Plan BE</DropdownLink>
                <DropdownLink to={links.tabulaRasa}>Tabula Rasa</DropdownLink>
                <DropdownLink to={links.fullHouse}>Full House</DropdownLink>
                <DropdownLink to={links.forAces}>For Aces</DropdownLink>
                <DropdownLink to={links.odyssee}>Odyssee</DropdownLink>
            </DropdownValueContainer>
        </Dropdown>
        <NavItem to={links.about}>OVER ONS</NavItem>
        <Dropdown className="dropdown">
            <DropdownPlaceholder className="dropdown-placeholder">MEDIA</DropdownPlaceholder>
            <DropdownValueContainer className="dropdown-value-container">
                <ActivePlaceholder>MEDIA</ActivePlaceholder>
                <DropdownLink to={links.media} state={{ program: "Plan_BE" }}>Plan BE</DropdownLink>
                <DropdownLink to={links.media} state={{ program: "Tabula_Rasa" }}>Tabula Rasa</DropdownLink>
                <DropdownLink to={links.media} state={{ program: "Full_House" }}>Full House</DropdownLink>
                <DropdownLink to={links.media} state={{ program: "For_Aces" }}>For Aces</DropdownLink>
                <DropdownLink to={links.media} state={{ program: "Odyssee" }}>Odyssee</DropdownLink>
            </DropdownValueContainer>
        </Dropdown>
        <NavItem to={links.calendar}>AGENDA</NavItem>
        <NavItem to={links.store}>WINKEL</NavItem>
        <NavItem to={links.contact}>CONTACT</NavItem>
    </NavContainer>
  </Nav>
)

export default Navbar

const Nav = styled.div`
    text-align: center;
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
    width: 100px;
    z-index: 1;
`

const DropdownPlaceholder = styled.div`
    opacity: 1;
    color: white;
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

const DropdownValueContainer = styled.div`
    padding: 5px 10px 10px 10px;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.8);
    opacity: 1;
`

const ActivePlaceholder = styled.div`

`

const DropdownLink = styled(Link)`
    opacity: 1;
    color: white;
    flex-grow: 1;
    text-align: center;
    text-decoration: none;
    transition: border 100ms, scale 100ms;
    border-style: double;
    border-color: transparent;
    border-width: 2px 0px;
    margin-top: 10px;

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