import React from 'react'
import styled from "styled-components"
import CheckoutButton from './checkoutButton'

function CustomerDetails ({basket}) {
    return(
        <CustomerDetailsContainer  
            onSubmit={basket.finishCallback} 
            style={{ display: basket.visibility.showCustomerDetails }}>
            <Explanation>Vul hieronder uw gegevens in, en wij sturen u de nodige betalings informatie via mail en zorgen vervolgens dat uw bestelling bij u geraakt. Alvast bedankt!</Explanation>
            <NameTitle>Uw Naam</NameTitle>
            <Name type="text" name="user_name"></Name>
            <MailTitle>Uw e-mail adres</MailTitle>
            <MailAddress type="email" name="user_email"></MailAddress>
            <AddressTitle>Uw adres</AddressTitle>
            <Address type="text" name="user_address"></Address>
            <ButtonContainer id="submit_container">
                <CheckoutButton data={{ callback: () => undefined, text: "Bestelling afronden" }}></CheckoutButton>
            </ButtonContainer>
            <Basket name="order" defaultValue={basket.orderString}></Basket>
        </CustomerDetailsContainer>
    )
}

const CustomerDetailsContainer = styled.form`
    width: 60%;
    margin: 50px 20%;
`

const Explanation = styled.div`
    text-align: center;
    margin-bottom: 35px;
    font-style: italic;
`

const NameTitle = styled.div`
    
`

const Name = styled.input`
    width: 100%;    
`

const MailTitle = styled.div`
    margin-top: 25px;
`

const MailAddress = styled.input`
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
    margin-top: 50px;
`

const Basket = styled.input`
    display: none;
`

export default CustomerDetails;