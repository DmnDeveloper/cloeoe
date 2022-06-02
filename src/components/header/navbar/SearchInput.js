import React from 'react'
import styled from 'styled-components'
import {FaSearch} from 'react-icons/fa'


const Wrapper = styled.div`

`;
const InputStyled = styled.input`
    width: 250px;
    height: 100%;
    background-color: #e4e4e4;
    border: none;
    outline: none;
`;

const SearchInput = () => {
  return (
  
    <Wrapper> 
    <FaSearch />
    <InputStyled type='text' placeholder=' Buscar...' ></InputStyled>
   
    </Wrapper>

    
  )
}

export default SearchInput