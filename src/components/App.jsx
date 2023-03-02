import './App.css';
import "react-toastify/dist/ReactToastify.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

// components
import Navbar from './Navbar/Navbar';
import ItemListContainer2 from './ItemListContainer2/ItemListContainer2';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Contacto from './Contacto/Contacto';
import Cart from './Cart/Cart';
import Checkout from './Checkout/Checkout';
import Footer from './Footer/Footer';
import { cargarBDD } from '../firebase/firebase'; // Utilizar sólo para cargar productos en firebase

//context
import { DarkModeProvider } from '../context/DarkModeContext';
import { CarritoProvider } from '../context/CarritoContext';

function App() {
  return (
    <BrowserRouter>
      <CarritoProvider>
        <DarkModeProvider>
          <Navbar />
          <Routes>
              <Route path='/' element={<ItemListContainer />} />
              <Route path='/item/:id' element={<ItemDetailContainer />} />
              <Route path='/category/:categoria' element={<ItemListContainer2 />} />
              <Route path='/contacto' element={<Contacto />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/checkout' element={<Checkout />} />
            </Routes>
            <Footer />
            <ToastContainer />
        </DarkModeProvider>
      </CarritoProvider>
    </BrowserRouter>
  );
}

export default App;
