import React from 'react'
import styled from "styled-components"
import CustomerDetails from './customerDetails'
import OrderDetails from './orderDetails'

function StoreLightbox ({basket}) {
    return(
        <PageOverlay style={{ visibility: basket.visibility.showLightbox }}>
        <StoreLightBoxContainer>
            <OrderDetails basket={basket}></OrderDetails>
            <CustomerDetails basket={basket}></CustomerDetails>
        </StoreLightBoxContainer>
        </PageOverlay>
    )
}

const PageOverlay = styled.div`
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.5);
`

const StoreLightBoxContainer = styled.div`
    left: 10%;
    top: 10%;
    height: 80%;
    width: 80%;
    z-index: 2;
    position: fixed;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 10px;
    border: 3px double black;
`

export default StoreLightbox