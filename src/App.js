import './style/app.css'
import Header from './components/Header';
import Modal from './components/Modal';
import CarouselContainer from './components/CarouselContainer';



function App() {
  return (
    <div className="App">
      <Header />
      <CarouselContainer />
      <Modal />

    </div>
  );
}

export default App;
