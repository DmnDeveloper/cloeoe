import React from 'react'
import styled from 'styled-components'
import SearchInput from './SearchInput';
import MenuBar from './MenuBar';

const NavStyled = styled.div`
    display: flex;
    align-items: center;
    width: 100%; 
    height: 50px;
    background: green;
`;
const Navbar = () => {
  return (
    <NavStyled>
        <SearchInput />
        <MenuBar />
    </NavStyled>
  )
}

export default Navbar