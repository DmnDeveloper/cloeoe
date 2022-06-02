import React from 'react'
import styled from 'styled-components'

import edezlab from '../assets/edezlab.jpg'
import bonanzaD from '../assets/bonanzaD.jpg'
import autolavado from '../assets/autolavado.png'

const WrapperGeneral = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 450px;
    margin-top: 40px;
`;
const WrapperIndividual = styled.div`
    width: 425px;
    height: 450px;
`;
const BtnGet = styled.button`
    width: 100%;
    height: 50px;
    cursor: pointer;
    border: none;
    letter-spacing: 2px;
    background: #e4e4e4;
    transition: 1s ease all;
    :hover{
      background-color: grey;
      color: white;

    }
`;
const BeneficiosSalud = () => {
  return (
    <WrapperGeneral>
      <WrapperIndividual>
        <img src={edezlab} alt='' width='400px' height='425px'></img>
        <BtnGet>OBTENER</BtnGet>
      </WrapperIndividual>
      <WrapperIndividual>
        <img src={bonanzaD} alt='' width='400px' height='425px'></img>
        <BtnGet>OBTENER</BtnGet>
      </WrapperIndividual>
      <WrapperIndividual>
        <img src={autolavado} alt='' width='400px' height='425px'></img>
        <BtnGet>OBTENER</BtnGet>
      </WrapperIndividual>
    </WrapperGeneral>
  )
}

export default BeneficiosSalud