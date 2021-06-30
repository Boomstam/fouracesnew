import * as React from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

const ProductDetails = ({imageFile}) => (
  <ProductDetailsContainer>
    
    <div className="pageHeaderImg">
      <GatsbyImage image={imageFile} alt="Music Image" />
    </div>
  </ProductDetailsContainer>
)

const ProductDetailsContainer = styled.div`

`

export default ProductDetails