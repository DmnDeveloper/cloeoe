import React from 'react'
import styled from 'styled-components'
import HomePhotos from './HomePhotos';


const WrapperDiv = styled.div`
    width: 100%;
    height: 250px;
    margin-top: 50px;
    margin-bottom: 50px;
`;
const TextLogin = styled.p`
    font-size: 30px;
    letter-spacing: 2px;
    text-align: center;
    color: black;
    margin-bottom: 15px;
`;



const ContainerMain = () => {
  return (
    <WrapperDiv className='swiperClass'>
        <HomePhotos />
        <TextLogin>Para obtener todos tus beneficios, Inicia sesion.</TextLogin>
    </WrapperDiv>
  )
}

export default ContainerMain