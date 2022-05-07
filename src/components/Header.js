import React from 'react'
import styled from 'styled-components';

import Logo from './Logo'
import Navbar from './Navbar'



const HeaderStyled = styled.header`
    width: 100%;
    height: 100px;
`;

const Header = () => {
  return (
    <HeaderStyled>
        <Logo></Logo>
        <Navbar></Navbar>
    </HeaderStyled>
  )
}

export default Header