import React from 'react'
import ContainerMain from "../components/ContainerMain";
import CarouselContainer from '../components/CarouselContainer'
import Modal from '../components/Modal';



const Home = () => {
  return (
    <div>
      <CarouselContainer />
      <Modal />
      <ContainerMain />
    </div>
  )
}

export default Home