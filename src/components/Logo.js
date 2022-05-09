import React from 'react';  
import styled from 'styled-components';
import logo from '../assets/logoCloe.jpg';

const LogoStyled = styled.div`
    display: flex; 
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    padding: 10px;
    margin-bottom: 15px;
`;

const Logo = () => {
  return (
    <LogoStyled>
        <img src={logo} width='120px' height='40px' alt=''></img>
    </LogoStyled>
  )
}

export default Logo