import React, {useState} from 'react'
import styled from 'styled-components'
import {FaUserCircle} from 'react-icons/fa'
import Modal from '../../Modal';
import FormLogin from '../../FormLogin';

const BtnLogin = styled.button`
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 5px;
    height: 40px;
    width: 150px;
    border: none;
    cursor: pointer;

`;
const LoginBtn = () => {
    const [estadoModal, cambiarEstadoModal] = useState(false)
  return (
      <> 
    <BtnLogin onClick={() => cambiarEstadoModal(!estadoModal)}> <FaUserCircle size='28px'/>Iniciar Sesion</BtnLogin>
    <Modal
    estado={estadoModal}
    cambiarEstado={cambiarEstadoModal}>
       <FormLogin />
    </Modal>
    </>
    
  )
}

export default LoginBtn