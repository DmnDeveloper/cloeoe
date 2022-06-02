import React from 'react'
import styled from 'styled-components'

import BeneficiosSalud from './BeneficiosSalud'

import milenio from '../assets/carousel1.jpg'
import lamarLogo from '../assets/lamarLogo.jpg'
import tecmilenioLogo from '../assets/tecmilenioLogo.jpg'
import univaLogo from '../assets/univaLogo.jpg'
import LastWrapperB from './LastWrapperB'

const WrapperStyledB = styled.div`
    width: 100%;
    height: 1600px;
    margin-bottom: 10px;
`;
const WrapperEscuela = styled.div`
    width: 100%;
    height: 250px;
    margin-top: 15px;
`;
const EscuelasWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 255px;
    margin-top: 40px;
`;
const WrapperIndividual = styled.div`
    width: 25%;
    height: 260px;
`;
const WrapperImage = styled.div`
    width: 100%;
    height: 100px;
`;
const WrapperText = styled.div`
    padding: 15px;
    width: 92%;
    height: 80px;
`;
const WrapperBtn = styled.div`
    display: flex;
    justify-content: center;
    height: 63px;
    width: 100%;
`;
const BtnGetIt = styled.button`
    width: 100%;
    height: 50px;
    cursor: pointer;
    border: none;
    letter-spacing: 2px;
    background: #e4e4e4;
    transition: 1s ease all;
    :hover{
        background: grey;
        color: white;
    }
`;
const TextInfo = styled.p`
    color: black;
    letter-spacing: 2px;
`;

const WrapperBeneficios = () => {
  return (
    <WrapperStyledB>
        <WrapperEscuela>
            <img src={milenio} alt='' width='1349px' height='250px' />
        </WrapperEscuela>

        <EscuelasWrapper>
            <WrapperIndividual>
                <WrapperImage>
                    <img src={lamarLogo} alt='' width='337px' height='100px' />
                </WrapperImage>
                <WrapperText>
                    <TextInfo>-40% en inscripción</TextInfo>
                    <TextInfo>-15% en parcialidad</TextInfo>
                </WrapperText>
                <WrapperBtn>
                     <BtnGetIt>OBTENER</BtnGetIt>
                </WrapperBtn>
                
            </WrapperIndividual>
            
            <WrapperIndividual>
               <WrapperImage>
                     <img src={tecmilenioLogo} alt='' width='337px' height='100px' />
               </WrapperImage>
               <WrapperText>
                    <TextInfo>-40% en colegiatura</TextInfo>
                    <TextInfo>-10% en educacion continua</TextInfo>
               </WrapperText>
               <WrapperBtn>
                    <BtnGetIt>OBTENER</BtnGetIt>
               </WrapperBtn>
            </WrapperIndividual>

            <WrapperIndividual>
                <WrapperImage>
                    <img src={univaLogo} alt='' width='337px' height='100px' />
                </WrapperImage>
                <WrapperText>
                    <TextInfo>-20% en colegiatura</TextInfo>
                </WrapperText>
                <WrapperBtn>
                    <BtnGetIt>OBTENER</BtnGetIt>
                </WrapperBtn>
            </WrapperIndividual>
        </EscuelasWrapper>

        <BeneficiosSalud />
        <LastWrapperB />


        
    </WrapperStyledB>
  )
}

export default WrapperBeneficios