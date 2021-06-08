import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"

const Socials = ({ siteTitle }) => (
  <SocialsContainer>
    <SocialsIcon href="http://www.facebook.com/calvinarsenia">
      <StaticImage
        src="../images/socials/facebook.png"
        width={32}
        alt="Facebook"
        style={iconStyle}
      />
    </SocialsIcon>
    <SocialsIcon href="http://www.facebook.com/calvinarsenia">
      <StaticImage
        src="../images/socials/spotify.png"
        width={32}
        alt="Spotify"
        style={iconStyle}
      />
    </SocialsIcon>
    <SocialsIcon href="http://www.facebook.com/calvinarsenia">
      <StaticImage
        src="../images/socials/youtube.png"
        width={32}
        alt="Youtube"
        style={iconStyle}
      />
    </SocialsIcon>
    <SocialsIcon href="http://www.facebook.com/calvinarsenia">
      <StaticImage
        src="../images/socials/itunes.png"
        width={32}
        alt="Itunes"
        style={iconStyle}
      />
    </SocialsIcon>
    <SocialsIcon href="http://www.facebook.com/calvinarsenia">
      <StaticImage
        src="../images/socials/instagram.png"
        width={32}
        alt="Instagram"
        style={iconStyle}
      />
    </SocialsIcon>
  </SocialsContainer>
)

export default Socials

const iconStyle = {
  height: `100%`, 
  width: `100%`
}

const SocialsContainer = styled.div`
{
    display: flex;
    position: fixed;
    right: 0;
    top: 10px;
    width: 20%;
}`

const SocialsIcon = styled.a`
{
  font-size: var(--navBarFontSize);
  font-weight: 1000;
  margin: 0px 10px;
  padding: 0px;
  
  &:hover {
    cursor: pointer;
    scale: 1.1;
  }
}
`