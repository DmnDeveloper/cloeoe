import './style/app.css'
import Header from './components/Header';
import Modal from './components/Modal';
import CarouselContainer from './components/CarouselContainer';
//import SlideCarouel from './components/SlideCarousel'
import ContainerMain from './components/ContainerMain'
import Footer from './components/Footer';




function App() {
  return (
    <div className="App">
      <Header />
      <CarouselContainer />
      <Modal />
      <ContainerMain />
      <Footer />
    </div>
  );
}

export default App;
