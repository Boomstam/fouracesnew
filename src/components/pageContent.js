import * as React from "react"
import styled from "styled-components"

const PageContent = ({ children }) => (
  <PageContentContainer>
    {children}
  </PageContentContainer>
)

const PageContentContainer = styled.div`
    position: absolute;
    top: 250px;
    color: var(--blackText);
    left: 10vw;
    width: 80vw;
`

export default PageContent