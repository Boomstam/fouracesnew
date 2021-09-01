import React from 'react'
import styled from "styled-components"
import CheckoutButton from './checkoutButton'

function OrderDetails ({basket}) {
    return(
        <OrderDetailsContainer style={{ display: basket.visibility.showOrderDetails }}>
                <OrderTitle>Uw Bestelling</OrderTitle>
                <Products>
                    <Product>
                        <ProductText>Tabula Rasa</ProductText>
                        <Amount name="tabula_rasa_amount">{basket.amounts.tabulaRasa}x</Amount>
                        <Price name="tabula_rasa_price">{basket.prices.tabulaRasa}€</Price>
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
                    <CheckoutButton data={{ callback: basket.continueCallback, text:"Verder Winkelen" }}></CheckoutButton>
                    <CheckoutButton data={{ callback: basket.orderCallback, text:"Bestellen!" }}></CheckoutButton>
                </Checkout>
            </OrderDetailsContainer>
    )
}

const OrderDetailsContainer = styled.div`

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

export default OrderDetails;