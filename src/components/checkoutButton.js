import React from 'react'
import styled from "styled-components"

function CheckoutButton ({ data }) {
    return(
        <Button onClick={() => data.callback()}>{data.text}</Button>
    )
}

const Button = styled.div`
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

export default CheckoutButton;