import React from 'react'
import styled from 'styled-components'
import {FaSearch} from 'react-icons/fa'


const InputStyled = styled.input`
    width: 240px;
    height: 100%;
    background-color: #e4e4e4;
    border: 0;
`;

const SearchInput = () => {
  return (
  
    <> 
    <FaSearch />
    <InputStyled type='text' placeholder='    Buscar...' />
   
    </>
    
  )
}

export default SearchInput