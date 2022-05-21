import React from 'react'
import styled from 'styled-components'

import milenio from '../assets/carousel1.jpg'
import lamarLogo from '../assets/lamarLogo.jpg'
import tecmilenioLogo from '../assets/tecmilenioLogo.jpg'
import univaLogo from '../assets/univaLogo.jpg'

const WrapperStyledB = styled.div`
    width: 100%;
    height: 800px;
    border-top: 2px solid #e4e4e4;
    border-bottom: 2px solid #e4e4e4;
    margin-bottom: 10px;
`;
const WrapperEscuela = styled.div`
    width: 100%;
    height: 250px;
    border: 1px solid black;
`;
const EscuelasWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 250px;
    border: 1px solid black;
    margin-top: 20px;
`;
const WrapperIndividual = styled.div`
    width: 25%;
    height: 250px;
    border: 1px solid red;
`;
const WrapperImage = styled.div`
    width: 100%;
    height: 100px;
    background-color: yellow;
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
            </WrapperIndividual>
            
            <WrapperIndividual>
               <WrapperImage>
                     <img src={tecmilenioLogo} alt='' width='337px' height='100px' />
               </WrapperImage>
            </WrapperIndividual>

            <WrapperIndividual>
                <WrapperImage>
                    <img src={univaLogo} alt='' width='337px' height='100px' />
                </WrapperImage>
            </WrapperIndividual>
        </EscuelasWrapper>




        
    </WrapperStyledB>
  )
}

export default WrapperBeneficios