import React from 'react'
import styled from 'styled-components'
import SearchInput from './SearchInput'

const WrapperInputStyled = styled.div`
    display: flex;
    align-items: center;
    height: 35px;
    border-radius: 10px;
    background-color: #e4e4e4;

`;
const WrapperInput = () => {
  return (
    <WrapperInputStyled>
      |<SearchInput />
    </WrapperInputStyled>
  )
}

export default WrapperInput