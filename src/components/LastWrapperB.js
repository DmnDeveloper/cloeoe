import React from 'react'
import styled from 'styled-components'
import {FaDizzy, FaHourglassStart} from 'react-icons/fa'
  
import berloe from '../assets/berloe.jpg'

const LastWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 450px;
    margin-top: 60px;
`;
const BerloeWrapper = styled.div`
    width: 425px;
    height: 450px;
`;
const Btn = styled.button`
    width: 100%;
    height: 50px;
    background: #e4e4e4;
    border: none;
    cursor: pointer;
    letter-spacing: 2px;
    transition: 1s ease all;
    :hover{
        background: grey;
        color: whie;
}
`;
const MessegeWrapper = styled.div`
    width: 850px;
    height: 450px;
`;
const ImSorry = styled.p`
    font-size: 50px;
    letter-spacing: 5px;
    text-align: center;
    font-family: 'Times New Roman', Times, serif ; 
`;
const TextSorry = styled.p`
    font-size: 30px;
    letter-spacing: 3px;
    text-align: center;
    font-family: 'Times New Roman', Times, serif ; 
`;
const LastWrapperB = () => {
  return (
    <LastWrapper>
        <BerloeWrapper>
            <img src={berloe} alt='' width='425px' height='400px'></img>
            <Btn>OBTENER</Btn>
        </BerloeWrapper>

        <MessegeWrapper>
        <ImSorry>Lo siento! <FaDizzy /> </ImSorry>
        <TextSorry>Seguimos trabajando para traerte más beneficios <FaHourglassStart /></TextSorry>
        </MessegeWrapper>
    </LastWrapper>
  )
}

export default LastWrapperB