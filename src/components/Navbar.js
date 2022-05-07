import React from 'react'
import styled from 'styled-components'
import WrapperInput from './WrapperInput'; 

const NavStyled = styled.div`
    display: flex;
    align-items: center;
    width: 100%; 
    height: 50px;
`;
const Navbar = () => {
  return (
    <NavStyled>
        <WrapperInput />
        
    </NavStyled>
  )
}

export default Navbar
