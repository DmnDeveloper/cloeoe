import React from 'react'
import styled from 'styled-components';

import Logo from '../Logo'
import Navbar from './navbar/Navbar'



const HeaderStyled = styled.header`
    width: 100%;
    max-height: 500px;
    margin-bottom: 10px;
`;

const Header = () => {
  return (
    <HeaderStyled className='headerClass'>
        <Logo></Logo>
        <Navbar></Navbar>
    </HeaderStyled>
  )
}

export default Header