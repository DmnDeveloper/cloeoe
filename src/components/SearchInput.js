import React from 'react'
import styled from 'styled-components'


const InputStyled = styled.input`
    width: 180px;
    height: 50%;
`;

const SearchInput = () => {
  return (
    <>
    <InputStyled placeholder='Buscar...'/>
    </>
  )
}

export default SearchInput