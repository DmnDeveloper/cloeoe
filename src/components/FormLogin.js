import React from 'react'
import styled from 'styled-components'
import {FaUser} from 'react-icons/fa'
import { BsEyeSlashFill } from "react-icons/bs";
import { BsFillHandIndexThumbFill } from "react-icons/bs";

const FormStyled = styled.div`
    margin-top: 35px;
    
`;
const TextInput = styled.input`
    width: 100%;
    height: 25px;
    border-radius: 10px;
    background-color: #e4e4e4;
    border: none;
    outline: none;
    margin-left: 10px;
`;
const WrapperText = styled.div`
    display: flex; 
    align-items: center;
    width: 75%;
    border-radius: 10px;
    background-color: #e4e4e4;
    padding: 5px;
    margin-left: 40px;
    margin-bottom: 25px;
`;
const PasswordInput = styled.input`
    width: 100%;
    height: 25px;
    border-radius: 10px;
    background-color: #e4e4e4;
    border: none;
    outline: none;
    margin-left: 10px;
`;
const WrapperPassword = styled.div`
    display: flex; 
    align-items: center;
    width: 75%;
    border-radius: 10px;
    background-color: #e4e4e4;
    padding: 5px; 
    margin-left: 40px;
    margin-bottom: 40px;
`;
const Btn = styled.button`
    height: 65px;
    width: 65px;
    margin-left: 135px;
    margin-bottom: 20px;
    border: none;
    border-radius: 50%;
    background: none;
    cursor: pointer;
    border: 1px solid black;
    &:hover{
      background: #e4e4e4;
      transition: 2s;
      border: none;
    }
`;

const FormLogin = () => {
  return (
    <FormStyled>
      <WrapperText> 
        <FaUser size='20px' />
        <TextInput type='text' placeholder='Usuario' />
      </WrapperText>

      <WrapperPassword>
        <BsEyeSlashFill size='20px' />
        <PasswordInput type='password' placeholder='Contraseña' />
      </WrapperPassword>
      
      <Btn className='btnClass'>
        <BsFillHandIndexThumbFill size='25px'  />
      </Btn>
    </FormStyled>
  )
}

export default FormLogin