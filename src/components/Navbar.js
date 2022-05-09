import React from 'react'
import styled from 'styled-components'
import Menu from './Menu';
import WrapperInput from './WrapperInput'; 
import LoginBtn from './LoginBtn';

const NavStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%; 
    height: 50px;
`;
const Navbar = () => {
  return (
    <NavStyled>
        <WrapperInput />
        <Menu />
        <LoginBtn />  
    </NavStyled>
  )
}

export default Navbar
