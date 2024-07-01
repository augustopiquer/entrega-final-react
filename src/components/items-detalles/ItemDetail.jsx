import './ItemDetails.css'
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';



export const ItemDetail = ( { producto } ) => {
  

  const { agregarAlCarrito } = useContext(CartContext);

return (
  <div className='carta-producto'>
    <h2>{producto.nombre}</h2>
      <img className='imagen-item' src={producto.imagen} alt={producto.nombre}/>
      <p>{producto.descripcion}</p>
      <p>${producto.precio}</p>
      <button className='botonfc' onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
  </div>
)
}


