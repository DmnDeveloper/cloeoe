import React from 'react'
import styled from 'styled-components'
import LoginBtn from './LoginBtn';
import SlideCarousel from './SlideCarousel'


const WrapperDiv = styled.div`
    width: 100%;
    height: 500px;
    margin-top: 60px;
    margin-bottom: 20px;
`;
const TextLogin = styled.p`
    font-family: 'Roboto Flex', sans-serif;
    letter-spacing: 2px;
    text-align: center;
    margin-right: 10px;
`;
const WrapperCarousel = styled.div`
    width: 100%;
    height: 65%;
`;
const WrapperLogin = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 35%;
`;


const ContainerMain = () => {
  return (
    <WrapperDiv>
      <WrapperCarousel>
        <SlideCarousel />
      </WrapperCarousel> 

      <WrapperLogin>
        <TextLogin>Para conocer todos tus beneficios disponibles con nosotros:  </TextLogin>
        <LoginBtn />
      </WrapperLogin>     
    </WrapperDiv>
  )
}

export default ContainerMain