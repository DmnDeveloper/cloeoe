import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
import one from '../assets/carousel1.jpg'
import two from '../assets/carousel2.jpg'
import three from '../assets/carousel3.jpg'
import four from '../assets/carousel4.jpg'

const CarouselContainer = () => {
  return (
  <Carousel
   autoPlay={true}
   infiniteLoop={true}
   interval={3000}
   showThumbs={false}
   showStatus={false}>
    <div>
        <img src={one} alt='' width='' height='350px' />
    </div>
    <div>
        <img src={two} alt='' width='' height='350px' />
    </div>
    <div>
        <img src={three} alt='' width='' height='350px' />
    </div>
    <div>
        <img src={four} alt='' width='' height='350px' />
    </div>
  </Carousel>
  )
}

export default CarouselContainer 