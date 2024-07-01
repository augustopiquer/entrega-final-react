import './App.css'
import {useState} from "react";
import {ItemListContainer} from "./components/items-detalles/ItemListContainer"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from "./components/items-detalles/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";
import {Header} from './components/header/Header'
import {Carrito} from "./components/items-detalles/Carrito"
import { Checkout } from './components/items-detalles/Checkout';
import { Footer } from './components/footer/Footer';



function App(){
  const [numerito , setNumerito] = useState (1);

  return (
    <CartProvider>
    <BrowserRouter>
    <div>
       <Header numerito={numerito} setNumerito={setNumerito}/>
       
       <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
          <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
          <Route path="/carrito" element={<Carrito/>}/>
          <Route path="/finalizar-compra" element={<Checkout/>}/>
       </Routes>
       <Footer/>
       
    </div>
    </BrowserRouter>
    </CartProvider>
  )
}

export default App
