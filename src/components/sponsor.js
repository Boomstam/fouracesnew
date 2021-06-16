import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

const Sponsor = () => (
  <SponsorContainer>
    <SponsorIcon href="https://www.savarez.com/four-aces-guitar-quartet" target="_blank">
      <StaticImage
        src="../images/savarez.jpg"
        width={64}
        alt="Savarez"
        class="social-img"
      />
    </SponsorIcon>
  </SponsorContainer>
)

export default Sponsor

const SponsorContainer = styled.div`
{
    position: fixed;
    left: calc(50% - 32px);
    bottom: 50px;
}`

const SponsorIcon = styled.a`
{
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