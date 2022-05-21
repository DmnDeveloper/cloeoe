import { BrowserRouter, Route, Routes} from 'react-router-dom';


import Home from './pages/Home';
import Footer from './components/Footer'
import Header from './components/Header'
import Beneficios from './pages/Beneficios';

import './style/app.css'


function App() {
  return (
    <BrowserRouter> 
      <Header />
      <Routes>
      <Route  exact path='/'  element={<Home />} />
      </Routes>
      <Routes>
        <Route exact path='/Beneficios' element={<Beneficios />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
