import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

const MenuStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 350px;
    height: 40px;
    border-bottom: 1px solid #e4e4e4;
`;
const UlStyled = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style: none;
    width: 100%;
    padding: 0px;
`;
const LiStyled = styled.li`
    
`;


const Menu = () => {
    
    
  return (
    <MenuStyled className='menuClass'>
        <UlStyled>
            <LiStyled>
                <NavLink className='navStyle' exact='true' to='/' >Home</NavLink>
            </LiStyled>
            <LiStyled>
                  <NavLink className='navStyle' exact='true' to='/Beneficios'>Beneficios</NavLink>
            </LiStyled>
            <LiStyled>
                   <NavLink className='navStyle' exact='true' to='/None' >Home</NavLink>
            </LiStyled>
            <LiStyled>
                 <NavLink className='navStyle' exact='true' to='/Contacto' >Contacto</NavLink>
            </LiStyled>
        </UlStyled>
    </MenuStyled>
  )
}

export default Menu