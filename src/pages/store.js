import React, { useState } from 'react'
import PageHeader from '../components/pageHeader'
import Layout from '../components/layout'
import PageContent from '../components/pageContent'
import { graphql } from 'gatsby'
import { getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import StoreLightbox from '../components/storeLightbox'
import emailjs from 'emailjs-com'

const prices = {
  tabulaRasa: 20,
  forAces: 20,
  odyssee: 15,
  puzzel: 30,
}

function Store({ data }) {
  const image = getImage(data.allFile.edges[0].node.childImageSharp);
  const [tabulaRasa, setTabulaRasa] = useState(0);
  const [forAces, setForAces] = useState(0);
  const [odyssee, setOdyssee] = useState(0);
  const [puzzel, setPuzzel] = useState(0);
  const [showLightbox, setShowLightbox] = useState("hidden");
  const [showOrderDetails, setShowOrderDetails] = useState("block");
  const [showCustomerDetails, setShowCustomerDetails] = useState("none");
  
  const placeOrder = () => {
    setShowOrderDetails("block");
    setShowCustomerDetails("none");
    setShowLightbox("visible");
  }

  const getTotal = () => {
    return (tabulaRasa * prices.tabulaRasa) +
      (forAces * prices.forAces) +
      (odyssee * prices.odyssee) +
      (puzzel * prices.puzzel);
  }

  const getAmounts = () => { 
    return { tabulaRasa: tabulaRasa, forAces: forAces, odyssee: odyssee, puzzel: puzzel }; 
  };

  const getOrderString = () => {
    const camelCaseToDisplayText = (string) => {
      return string.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); })
    }
    let orderString = "";
    for (const [key, value] of Object.entries(prices)) {
      const name = camelCaseToDisplayText(key);
      const amount = getAmounts()[key];
      const price = value;
      orderString += amount + "x " + name + " aan " + price + "€, ";
    }
    orderString += "voor een totaal van " + getTotal() + "€.";
    
    return orderString;
  }

  return (
    <Layout>
      <PageHeader imageFile={image}></PageHeader>
      <PageContent>
        <Products>
            <Product>
              <ProductImage>
                <StaticImage
                  src="../images/products/TabulaRasa.jpg"
                  width={150}
                  height={150}
                  alt="TabulaRasa"
                />
              </ProductImage>
              <ProductText>Tabula Rasa - {prices.tabulaRasa}€</ProductText>
              <AmountContainer>
                <Amount>Aantal: {tabulaRasa}</Amount>
                <AmountButton onClick={() => tabulaRasa != 0 ? setTabulaRasa(tabulaRasa - 1) : 0}>-</AmountButton>
                <AmountButton onClick={() => setTabulaRasa(tabulaRasa + 1)}>+</AmountButton>
              </AmountContainer>
            </Product>
            <Product>
              <ProductImage>
                <StaticImage
                  src="../images/products/ForAces.jpg"
                  width={150}
                  height={150}
                  alt="ForAces"
                />
              </ProductImage>
              <ProductText>For Aces - {prices.forAces}€</ProductText>
              <AmountContainer>
                <Amount>Aantal: {forAces}</Amount>
                <AmountButton onClick={() => forAces != 0 ? setForAces(forAces - 1) : 0}>-</AmountButton>
                <AmountButton onClick={() => setForAces(forAces + 1)}>+</AmountButton>
              </AmountContainer>
            </Product>
            <Product>
              <ProductImage>
                <StaticImage
                  src="../images/products/Odyssee.jpg"
                  width={150}
                  height={150}
                  alt="Odyssee"
                />
              </ProductImage>
              <ProductText>Odyssee - {prices.odyssee}€</ProductText>
              <AmountContainer>
                <Amount>Aantal: {odyssee}</Amount>
                <AmountButton onClick={() => odyssee != 0 ? setOdyssee(odyssee - 1) : 0}>-</AmountButton>
                <AmountButton onClick={() => setOdyssee(odyssee + 1)}>+</AmountButton>
              </AmountContainer>
            </Product>
          <Product>
            <StaticImage
              src="../images/products/Puzzle.png"
              width={150}
              height={150}
              alt="Puzzle"
            />
            <ProductText>Puzzel - {prices.puzzel}€</ProductText>
            <AmountContainer>
                <Amount>Aantal: {puzzel}</Amount>
                <AmountButton onClick={() => puzzel != 0 ? setPuzzel(puzzel - 1) : 0}>-</AmountButton>
                <AmountButton onClick={() => setPuzzel(puzzel + 1)}>+</AmountButton>
              </AmountContainer>
          </Product>
        </Products>
        <StoreHeader>
          <OrderButton onClick={() => placeOrder()}>Bestellen - {getTotal()},0€</OrderButton>
        </StoreHeader>
        <StoreLightbox basket={
          { 
            visibility: { showLightbox: showLightbox,
                          showOrderDetails: showOrderDetails,
                          showCustomerDetails: showCustomerDetails },
            amounts: getAmounts(), 
            prices: prices, 
            total: getTotal(),
            orderString: getOrderString(),
            orderCallback() { 
              setShowOrderDetails("none");
              setShowCustomerDetails("block");
            },
            continueCallback() { 
              setShowLightbox("hidden");
            },
            finishCallback(e) { 
              const submitButton = document.getElementById("submit_container").children[1];
              try{
                submitButton.innerHTML = "Bestelling verzenden...";
                submitButton.setAttribute("disabled", true);
              }catch{}

              e.preventDefault();

              emailjs.sendForm('service_1mqpk5d', 'store_template', e.target, 'user_tIm8Kx5BKGF6uoDLBuyHB')
                .then((result) => {
                    console.log(result.text);
                    window.location.reload(false);
                }, (error) => {
                    console.log(error.text);
                    window.location.reload(false);
                });
              }
          }
          }></StoreLightbox>
      </PageContent>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allFile (filter:{ relativePath:{ in:[
            "store.jpg"
            ]} }){
           edges {
             node {
              childImageSharp{
                gatsbyImageData(width: 2000)
              }
            }
         }
      }
  }
`

const Products = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const Product = styled.div`
  
`

const ProductImage = styled.div`
  
`

const ProductText = styled.div`  
  text-align: center;
  margin: 20px 0px;
`

const AmountContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const Amount = styled.div`
  line-height: 1.75;
`

const AmountButton = styled.div`
  border-radius: 5px;
  color: white;
  background-color: black;
  padding: 0px 10px;
  text-align: center;

  cursor: pointer;
  transition: transform 100ms;
  &:hover {
    transform: translateY(5px);
  }

  &:active {
    scale: 0.9;
}
`

const StoreHeader = styled.div`
  width: 100%;
  height: 100px;
`

const OrderButton = styled.div`
  margin-left: 40%;
  margin-top: 50px;
  padding-top: 10px;
  width: 20%;
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

  &:active {
    scale: 0.9;
  }
`

export default Store