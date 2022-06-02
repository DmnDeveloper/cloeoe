import React from 'react'
import styled from 'styled-components'

import lamar from '../assets/lamarLogo.jpg'
import tecmilenio from '../assets/tecmilenioLogo.jpg'
import univa from '../assets/univaLogo.jpg'

const WrapperImgs = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 205px;
`;
const WrapperSolo = styled.div`
    width: 25%;
    height: 210px;
`;
const ImageWrapper = styled.div`
    width: 100%;
    height: 100px;
`;
const TextWrapper = styled.div`
    padding: 15px;
    width: 92%;
    height: 80px;
`;
const InfoText = styled.p`
    color: black;
    letter-spacing: 2px;
`;
const HomePhotos = () => {
  return (
    <WrapperImgs>
        <WrapperSolo>
            <ImageWrapper>
                <img src={lamar} alt='' width='337px' height='100px' />
            </ImageWrapper>
            <TextWrapper>
                <InfoText>-40% en inscripción</InfoText>
                <InfoText>-15% en parcialidad</InfoText>
            </TextWrapper>
        </WrapperSolo>
        <WrapperSolo>
            <ImageWrapper>
                <img src={tecmilenio} alt='' width='337px' height='100px'/>
            </ImageWrapper>
            <TextWrapper>
                <InfoText>-40% en colegiatura</InfoText>
                <InfoText>-10% en educacion continua</InfoText>
            </TextWrapper>
        </WrapperSolo>
        <WrapperSolo>
            <ImageWrapper>
            <img src={univa} alt='' width='337px' height='100px'/>
            </ImageWrapper>
            <TextWrapper>
                <InfoText>-20% en colegiatura</InfoText>
            </TextWrapper>
        </WrapperSolo>
    </WrapperImgs>
  )
}

export default HomePhotos