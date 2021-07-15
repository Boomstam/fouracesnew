import React, { useState } from 'react'
import styled from "styled-components"

function StoreLightBox ({basket}) {
    return(
        <PageOverlay style={{visibility: basket.visible}}>
        <StoreLightBoxContainer>
            <OrderDetails>
                <OrderTitle>Uw Bestelling</OrderTitle>
                <Products>
                    <Product>
                        <ProductText>Tabula Rasa</ProductText>
                        <Amount>{basket.amounts.tabulaRasa}x</Amount>
                        <Price>{basket.prices.tabulaRasa}€</Price>
                    </Product>
                    <Product>
                        <ProductText>For Aces</ProductText>
                        <Amount>{basket.amounts.forAces}x</Amount>
                        <Price>{basket.prices.forAces}€</Price>
                    </Product>
                    <Product>
                        <ProductText>Odyssee</ProductText>
                        <Amount>{basket.amounts.odyssee}x</Amount>
                        <Price>{basket.prices.odyssee}€</Price>
                    </Product>
                    <Product>
                        <ProductText>Puzzel</ProductText>
                        <Amount>{basket.amounts.puzzel}x</Amount>
                        <Price>{basket.prices.puzzel}€</Price>
                    </Product>
                </Products>
                <Total>
                    <TotalText>Totaal:</TotalText>
                    <TotalAmount>{basket.total}€</TotalAmount>
                </Total>
                <Checkout>
                    <CheckoutButton>Bestellen!</CheckoutButton>
                    <CheckoutButton onClick={() => basket.hideCallback()}>Verder Winkelen</CheckoutButton>
                </Checkout>
            </OrderDetails>
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

const OrderDetails = styled.div`

`

const OrderTitle = styled.h1`
    width: 100%;
    text-align: center;
    margin-top: 50px;
`

const Products = styled.div`

`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    width: 40%;
    margin-left: 30%;
`

const ProductText = styled.h3`
    width: 50%;
`

const Amount = styled.h3`

`

const Price = styled.h3`

`

const Total = styled.div`
    display: flex;
    justify-content: space-between;
    width: 20%;
    margin-left: 40%;
    margin-top: 25px;
`

const TotalText = styled.h2`

`

const TotalAmount = styled.h2`

`

const Checkout = styled.div`
    display: flex;
    justify-content: space-between;
    width: 40%;
    margin-left: 30%;
`

const CheckoutButton = styled.div`
    padding: 10px 20px;
    height: 50px;
    background-color: black;
    opacity: 0.9;
    text-align: center;
    color: white;
    border-radius: 10px;

    cursor: pointer;
    transition: transform 100ms;
    &:hover {
        transform: translateY(5px);
    }

    font-size: 25px;

    &:active {
        scale: 0.9;
    }
`

export default StoreLightBox