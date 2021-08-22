import * as React from "react"
import styled from "styled-components"
import { getImage } from "gatsby-plugin-image"
import { GatsbyImage } from "gatsby-plugin-image"

function Photos({ data }) {
    return (
        <PhotosContainer>
            <Lightbox id="lightbox" onClick={() => hideLightbox()}>
            {
                data.map((image, i) => 
                    <LightboxImage key={i}>
                        <GatsbyImage 
                            image={getImage(image.node.childImageSharp)} 
                            alt="Lightbox image"/>
                    </LightboxImage>
                )
            }
            </Lightbox>
            <LightboxClose 
                onClick={() => hideLightbox()}
                id="lightbox-close">Klik om te sluiten</LightboxClose>
            <PhotosList>
            {
                data.map((image, i) => 
                <Photo key={JSON.stringify(image)} onClick={() => showLightbox(i)}>
                    <GatsbyImage 
                        image={getImage(image.node.childImageSharp)} 
                        alt={i + " - Photo from shoot"}
                        />
                </Photo>
                )
            }
            </PhotosList>
      </PhotosContainer>
    )
}

const showLightbox = (i) => {
    const lightbox = document.getElementById("lightbox");
    const lightboxClose = document.getElementById("lightbox-close");
    lightbox.style.display = "block";
    lightboxClose.style.display = "block";
    const children = lightbox.children;
    for (let childIndex = 0; childIndex < children.length; childIndex++) {
        const child = children[childIndex];
        if(childIndex === i){
            child.style.display = "block";
        } else {
            child.style.display = "none";
        }
    }
}

const hideLightbox = () => {
    const lightbox = document.getElementById("lightbox");
    const lightboxClose = document.getElementById("lightbox-close");
    lightbox.style.display = "none";
    lightboxClose.style.display = "none";
}

export default Photos

const Lightbox = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.9);
    z-index: 1;
    cursor: pointer;
    display: none;
`

const LightboxImage = styled.div`
    position: absolute;
    left: 20%;
    top: 7.5%;
    width: 60%;
`

const LightboxClose = styled.div`
    position: fixed;
    bottom: 2%;
    left: 45%;
    font-weight: 1000;
    font-size: 24px;
    cursor: pointer;
    z-index: 2;
    display: "none";
`

const PhotosContainer = styled.div`
`

const PhotosList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  margin-left: 5%;
`

const Photo = styled.div`
    cursor: pointer;
`
