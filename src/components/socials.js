import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

const Socials = () => (
  <SocialsContainer>
    <SocialsIcon href="https://www.facebook.com/FourAcesGuitarQuartet" target="_blank">
      <StaticImage
        src="../images/socials/facebook.png"
        width={32}
        alt="Facebook"
        class="social-img"
      />
    </SocialsIcon>
    <SocialsIcon href="https://open.spotify.com/artist/4QYs1g8YbpUTqkBpdT2Zs2" target="_blank">
      <StaticImage
        src="../images/socials/spotify.png"
        width={32}
        alt="Spotify"
        class="social-img"
      />
    </SocialsIcon>
    <SocialsIcon href="https://www.youtube.com/user/FourAcesGQ" target="_blank">
      <StaticImage
        src="../images/socials/youtube.png"
        width={32}
        alt="Youtube"
        class="social-img"
      />
    </SocialsIcon>
    <SocialsIcon href="https://music.apple.com/us/artist/four-aces-guitar-quartet/770675648" target="_blank">
      <StaticImage
        src="../images/socials/itunes.png"
        width={32}
        alt="Itunes"
        class="social-img"
      />
    </SocialsIcon>
    <SocialsIcon href="https://www.instagram.com/fouracesguitarquartet/" target="_blank">
      <StaticImage
        src="../images/socials/instagram.png"
        width={32}
        alt="Instagram"
        class="social-img"
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
    z-index: 1;
}`

const SocialsIcon = styled.a`
{
  font-size: var(--navBarFontSize);
  font-weight: 1000;
  margin: 0px 10px;
  padding: 0px;
  cursor: pointer;
  transition: scale 100ms;

  &:hover {
    scale: 1.1;
  }

  &:active {
    scale: 0.9;
  }
}
`