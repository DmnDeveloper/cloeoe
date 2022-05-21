import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

const MenuStyled = styled.nav`
    display: flex;
    align-items: center;
    width: 600px;
    height: 100%;
    margin-right: 90px;
    border-bottom: 1px solid #e4e4e4;
`;
const UlStyled = styled.ul`
    list-style: none;

`;
const LiStyled = styled.li`
    display: inline-block;
    margin-left: 50px;
    padding: 5px;
`;


const Menu = () => {
    
    
  return (
    <MenuStyled>
        <UlStyled>
            <LiStyled>
                <NavLink className='navStyle' exact='true' to='/' text-decoration='none' >Home</NavLink>
            </LiStyled>
            <LiStyled>
                  <NavLink className='navStyle' exact='true' to='/Beneficios'>Beneficios</NavLink>
            </LiStyled>
            <LiStyled>
                   <NavLink className='navStyle' exact='true' to='/Lorem1' >Home</NavLink>
            </LiStyled>
            <LiStyled>
                 <NavLink className='navStyle' exact='true' to='/Lorem2'>Home</NavLink>
            </LiStyled>
            <LiStyled>
                 <NavLink className='navStyle' exact='true' to='/Lorem3'>Contacto</NavLink>
            </LiStyled>
        </UlStyled>
    </MenuStyled>
  )
}

export default Menu