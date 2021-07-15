import React from 'react'
import styled from "styled-components"
import CheckoutButton from './checkoutButton'

function CustomerDetails ({basket}) {
    return(
        <CustomerDetailsContainer style={{ display: basket.visibility.showCustomerDetails }}>
            <NameTitle>Uw Naam</NameTitle>
            <Name></Name>
            <AddressTitle>Uw Adres</AddressTitle>
            <Address></Address>
            <ButtonContainer>
                <CheckoutButton data={{ callback: basket.finishCallback, text: "Bestelling afronden" }}></CheckoutButton>
            </ButtonContainer>
        </CustomerDetailsContainer>
    )
}

const CustomerDetailsContainer = styled.div`
    width: 60%;
    margin: 100px 20%;
`

const NameTitle = styled.div`
    
`

const Name = styled.input`
    width: 100%;    
`

const AddressTitle = styled.div`
    margin-top: 25px;
`

const Address = styled.input`
    width: 100%;
`

const ButtonContainer = styled.div`
    width: 50%;
    margin-left: 25%;
    margin-top: 100px;
`

export default CustomerDetails;