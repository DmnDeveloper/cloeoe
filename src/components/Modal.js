import React from 'react';
import styled from 'styled-components';
import Logo from './Logo'

const OverLay = styled.div`
width: 100vw;
height: 100vh;
position: fixed;
top: 0;
left: 0;
background: rgba(0,0,0,.5);
display: flex;
justify-content: center;
align-items: center;
z-index: 999;
`;

const ContainerModal = styled.div`
width: 350px;
min-height: 100px;
background: #fff;
position: absolute;
border-radius: 5px;
box-shadow: rgba(100, 100, 110, 0.2);
padding: 10px;

`;

const EncabezadoModal = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
border-bottom: 1px solid #E8E8E8;
`;

const LogoWrapper = styled.div`
margin-left: 90px;
`;

const BtnClose = styled.button`
position: absolute;
top: 15px;
right: 15px;
border: none;
border-radius: 10px;
cursor: pointer;
transition: 1s ease all; 
width: 30px;
height: 30px;
background: none;

&:hover{
    background: #e4e4e4;
}
`;


const Modal = ({children, estado, cambiarEstado}) => {
   
  return (
    <>
        {estado &&
            <OverLay>
                 <ContainerModal>
                     <EncabezadoModal>
                           <LogoWrapper>
                           <Logo width='25px' height='25px'/>
                           </LogoWrapper>
                    </EncabezadoModal>

                     <BtnClose
                        onClick={() => cambiarEstado(false)}
                     >x</BtnClose>

                        {children}
                    </ContainerModal>
             </OverLay>  
        }
    </>
  )
}

export default Modal