import { BrowserRouter, Route, Routes} from 'react-router-dom';


import Home from './pages/Home';
import Footer from './components/Footer'
import Header from './components/header/Header'
import Beneficios from './pages/Beneficios';
import None from './pages/None';
import Contacto from './pages/Contacto';

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
      <Routes>
        <Route exact path='/None' element={<None />}/>
      </Routes>
      <Routes>
        <Route exact path='/Contacto' element={<Contacto />}/>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
