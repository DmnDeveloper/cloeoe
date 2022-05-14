import React from 'react'
import styled from 'styled-components'
import {FaInstagram, FaYoutube, FaFacebook, FaTwitter} from 'react-icons/fa'

const FooterWraper = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 300px;
    background-color: #e4e4e4;
`;
const WrapperFooter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 250px;
    height: 100%;
`;
const PrincipalWord = styled.p`
    font-weight: bold;
    font-size: 20px;
    font-family: 'Roboto Flex', sans-serif;
`;
const SecondWord = styled.a`
    font-family: 'Roboto Flex', sans-serif;
    text-decoration: none;
    color: black;
`;
const WrapperContac = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    height: 35px;
    margin: auto;
`;

const Footer = () => {
  return (
    <FooterWraper>
      <WrapperFooter>
        <PrincipalWord>Compañia</PrincipalWord>
        <SecondWord href='#'>- Nosotros</SecondWord>
        <SecondWord href='#'>- Cloe Careers</SecondWord>
        <SecondWord href='#'>- Ventas Corporativas</SecondWord>
        <SecondWord href='#'>- Cloe World</SecondWord>
        <SecondWord href='#'>- Cloe Partnets</SecondWord>
      </WrapperFooter>

      <WrapperFooter>
      <PrincipalWord>Servicio al Cliente</PrincipalWord>
        <SecondWord href='#'>- Mi Cuenta</SecondWord>
        <SecondWord href='#'>- Wishlist</SecondWord>
        <SecondWord href='#'>- Preguntas Frecuentes</SecondWord>
        <SecondWord href='#'>- Contactanos</SecondWord>
        <SecondWord href='#'>- Rastreo</SecondWord>
        <SecondWord href='#'>- Facturas</SecondWord>
      </WrapperFooter>

      <WrapperFooter>
      <PrincipalWord>Legal</PrincipalWord>
      <SecondWord href='#'>- Garantias</SecondWord>
      <SecondWord href='#'>- Devoluciones</SecondWord>
      <SecondWord href='#'>- Terminos y Condiciones</SecondWord>
      <SecondWord href='#'>- Aviso de Privacidad</SecondWord>
      <SecondWord href='#'>- Certificaciones</SecondWord>
      </WrapperFooter>

      <WrapperFooter>
        <WrapperContac>
          <FaFacebook size='30px' cursor='pointer' />
          <FaInstagram size='30px' cursor='pointer' />
          <FaTwitter size='30px' cursor='pointer' />
          <FaYoutube size='30px' cursor='pointer' />
        </WrapperContac>
      </WrapperFooter>
    </FooterWraper>
  )
}

export default Footer