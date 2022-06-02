import React from 'react'
import styled from 'styled-components'
import {FaRegSadTear} from 'react-icons/fa'

const WrapperError = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 300px;
`;
const TextSorry = styled.p`
    font-size: 40px;
    letter-spacing: 7px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    margin: 0px;
    padding-bottom: 10px;
`;
const TextError = styled.p`
    font-size: 45px;
    letter-spacing: 7px;
    font-family: 'Times New Roman', Times, serif;
    margin: 0px;
`;

const Error404 = () => {
  return (
    <WrapperError>
        <TextSorry>Lo Siento! </TextSorry>
        <TextError>ERROR 404...  <FaRegSadTear /></TextError>
    </WrapperError>
  )
}

export default Error404