import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"

const Socials = () => (
  <SocialsContainer>
    <SocialsIcon href="https://www.facebook.com/FourAcesGuitarQuartet">
      <StaticImage
        src="../images/socials/facebook.png"
        width={32}
        alt="Facebook"
      />
    </SocialsIcon>
    <SocialsIcon href="https://open.spotify.com/artist/4QYs1g8YbpUTqkBpdT2Zs2">
      <StaticImage
        src="../images/socials/spotify.png"
        width={32}
        alt="Spotify"
      />
    </SocialsIcon>
    <SocialsIcon href="https://www.youtube.com/user/FourAcesGQ">
      <StaticImage
        src="../images/socials/youtube.png"
        width={32}
        alt="Youtube"
      />
    </SocialsIcon>
    <SocialsIcon href="https://music.apple.com/us/artist/four-aces-guitar-quartet/770675648">
      <StaticImage
        src="../images/socials/itunes.png"
        width={32}
        alt="Itunes"
      />
    </SocialsIcon>
    <SocialsIcon href="https://www.instagram.com/fouracesguitarquartet/">
      <StaticImage
        src="../images/socials/instagram.png"
        width={32}
        alt="Instagram"
      />
    </SocialsIcon>
  </SocialsContainer>
)

export default Socials

const SocialsContainer = styled.div`
{
    display: flex;
    position: fixed;
    right: 0;
    top: 10px;
}`

const SocialsIcon = styled.a`
{
  font-size: var(--navBarFontSize);
  font-weight: 1000;
  margin: 0px 10px;
  padding: 0px;
  cursor: pointer;

  &:hover {
    scale: 1.1;
  }

  &:active {
    scale: 0.9;
  }
}
`