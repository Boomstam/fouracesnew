import React from 'react'
import PageHeader from '../components/pageHeader'
import Layout from '../components/layout'
import PageContent from '../components/pageContent'
import { graphql } from 'gatsby'
import { getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import emailjs from 'emailjs-com'

function Contact({ data }) {
  const image = getImage(data.allFile.edges[0].node.childImageSharp);
  return (
    <Layout>
      <PageHeader imageFile={image}></PageHeader>
      <PageContent>
        <ContactForm onSubmit={submitForm}>
          <NameTitle>Uw naam</NameTitle>
          <Name type="text" name="user_name" required></Name>
          <SpaceBetween></SpaceBetween>
          <MailAddressTitle>Uw email-adres</MailAddressTitle>
          <MailAddress type="email" name="user_email" required></MailAddress>
          <SpaceBetween></SpaceBetween>
          <MessageTitle>Uw bericht</MessageTitle>
          <Message name="message" required></Message>
          <SpaceBetween></SpaceBetween>
          <Submit id="submit">Verstuur</Submit>
        </ContactForm>
      </PageContent>
    </Layout>
  )
}

const submitForm = (e) => {
  const submitButton = document.getElementById("submit");
  try{
    submitButton.innerHTML = "Versturen...";
    submitButton.firstChild.setAttribute("disabled", true);
  }catch{}

  e.preventDefault();

  emailjs.sendForm('service_1mqpk5d', 'contact_template', e.target, 'user_tIm8Kx5BKGF6uoDLBuyHB')
    .then((result) => {
        console.log(result.text);
        window.location.reload(false);
    }, (error) => {
        console.log(error.text);
        window.location.reload(false);
    });
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

const Message = styled.textarea`
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