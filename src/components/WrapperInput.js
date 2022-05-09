import React from 'react'
import styled from 'styled-components'
import SearchInput from './SearchInput'

const WrapperInputStyled = styled.div`
    display: flex;
    align-items: center;
    height: 40px;
    border-radius: 20px;
    background-color: #e4e4e4;
    margin-left: 10px;
    padding-left: 10px;
`;
const WrapperInput = () => {
  return ( 
    <WrapperInputStyled>
       <SearchInput/>
    </WrapperInputStyled>
  )
}

export default WrapperInput