import React from 'react';  
import styled from 'styled-components';
import logo from '../assets/logoCloe.jpg';

const LogoStyled = styled.div`
    display: flex; 
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px; 
    margin-top: 20px;
    margin-bottom: 10px;
`;

const Logo = () => {
  return (
    <LogoStyled className='LogoStyledClass'>
        <img src={logo} className='ImgClass' width='120px' height='40px' alt=''></img>
    </LogoStyled>
  )
}

export default Logo