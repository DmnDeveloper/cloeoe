import React from 'react'
import styled from 'styled-components'
import SearchInput from './SearchInput'

const WrapperInputStyled = styled.div`
    display: flex;
    align-items: center;
    height: 40px;
    border-radius: 20px;
    background-color: #e4e4e4;
    padding-left: 10px;
`;
const WrapperInput = () => {
  return ( 
    <WrapperInputStyled className='inputClass'>
       <SearchInput/>
    </WrapperInputStyled>
  )
}

export default WrapperInput