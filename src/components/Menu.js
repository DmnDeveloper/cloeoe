import React from 'react'
import styled from 'styled-components'

const MenuStyled = styled.div`
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
const Atext = styled.a`
    cursor: pointer;
`;

const Menu = () => {
  return (
    <MenuStyled>
        <UlStyled>
            <LiStyled>
                <Atext>Beneficios</Atext>
            </LiStyled>
            <LiStyled>
                <Atext>Lorem</Atext>
            </LiStyled>
            <LiStyled>
                <Atext>Lorem</Atext>
            </LiStyled>
            <LiStyled>
                <Atext>Lorem</Atext>
            </LiStyled>
            <LiStyled>
                <Atext>Contacto</Atext>
            </LiStyled>
        </UlStyled>
    </MenuStyled>
  )
}

export default Menu