import React from 'react'
import PageHeader from '../components/pageHeader'
import Layout from '../components/layout'
import PageContent from '../components/pageContent'
import { graphql } from 'gatsby'
import { getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"

function Store({ data }) {
  const image = getImage(data.allFile.edges[0].node.childImageSharp);
  return (
    <Layout>
      <PageHeader imageFile={image}></PageHeader>
      <PageContent>
        <Products>
          <CDs>
            <Product>
              <ProductImage>
                <StaticImage
                  src="../images/products/TabulaRasa.jpg"
                  width={150}
                  alt="Puzzle"
                />
              </ProductImage>
              <ProductText>
                Tabula Rasa
              </ProductText>
            </Product>
            <Product>
              <ProductImage>
                <StaticImage
                  src="../images/products/ForAces.jpg"
                  width={150}
                  alt="Puzzle"
                />
              </ProductImage>
              <ProductText>
                For Aces
              </ProductText>
            </Product>
            <Product>
              <ProductImage>
                <StaticImage
                  src="../images/products/Odyssee.jpg"
                  width={150}
                  alt="Puzzle"
                />
              </ProductImage>
              <ProductText>
                Odyssee
              </ProductText>
            </Product>
          </CDs>
          <Product>
            <StaticImage
              src="../images/products/Puzzle.png"
              width={150}
              alt="Puzzle"
            />
            <ProductText>
              Een puzzel
            </ProductText>
          </Product>
        </Products>
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

`

const CDs = styled.div`
  display: flex;
`

const Product = styled.div`
  margin: 50px;
  cursor: pointer;
`

const ProductImage = styled.div`
  margin-left: 60px;
`

const ProductText = styled.div`
  margin: 100px;
  text-align: center;
`

export default Store