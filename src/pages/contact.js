import React from 'react'
import PageHeader from '../components/pageHeader'
import Layout from '../components/layout'
import PageContent from '../components/pageContent'
import { graphql } from 'gatsby'
import { getImage } from "gatsby-plugin-image"
import styled from "styled-components"

function Contact({ data }) {
  const image = getImage(data.allFile.edges[0].node.childImageSharp);
  return (
    <Layout>
      <PageHeader imageFile={image}></PageHeader>
      <PageContent>
        <ContactForm>
          <NameTitle>Uw naam</NameTitle>
          <Name></Name>
          <SpaceBetween></SpaceBetween>
          <MailAddressTitle>Uw mail-adres</MailAddressTitle>
          <MailAddress></MailAddress>
          <SpaceBetween></SpaceBetween>
          <MessageTitle>Uw bericht</MessageTitle>
          <Message></Message>
          <SpaceBetween></SpaceBetween>
          <Submit>Verstuur</Submit>
        </ContactForm>
      </PageContent>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allFile (filter:{ relativePath:{ in:[
            "logo-darker.png"
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

const ContactForm = styled.form`

`

const NameTitle = styled.h3`

`

const Name = styled.input`

`

const MailAddressTitle = styled.h3`

`

const MailAddress = styled.input`

`

const MessageTitle = styled.h3`

`

const Message = styled.input`
  width: 100%;
  height: 200px;
`

const Submit = styled.button`

`

const SpaceBetween = styled.div`
  width: 100%;
  padding-top: 50px;
`

export default Contact