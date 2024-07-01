import React, { Fragment, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';


export const Carrito = () => {
    const { carrito, calcularTotal, vaciarCarrito, eliminarProducto, decrementarProducto } = useContext(CartContext);

    

    const agruparProductos = () => {
        const uniqueProducts = Array.from(new Set(carrito.map(prod => prod.id)));
        return uniqueProducts.map(id => {
            const producto = carrito.find(prod => prod.id === id);
            const total = producto.cantidad * producto.precio;
            return {
                ...producto,
                total
            };
        });
    };

    return (
        <div className="carrito-container">
            {agruparProductos().map((prod) => {
                return (
                    <Fragment key={prod.id}>
                        <div className="producto-container">
                            <h2 className="producto-precio">{prod.nombre} x {prod.cantidad}u: ${prod.total}</h2>
                            <button className="btn-quitarcantidad" onClick={() => { eliminarProducto(prod) }}>Quitar {prod.cantidad}❌</button>
                            <img src={prod.imagen} alt={prod.nombre} />
                            
                        </div>
                    </Fragment>
                )
            })}
            {
                carrito.length > 0 ?
                    <div className='c-total'>
                        <h2>Total: ${calcularTotal()}</h2>
                        <div className="botonesCarrito">
                            <button className='btn-vc' onClick={vaciarCarrito}>Vaciar carrito</button>
                            <Link to="/finalizar-compra" className='btn-fc'>COMPRAR</Link>
                        </div>
                    </div> :
                    <h2>Carrito Vacio . Llenalo de las mejores gorras!</h2>
            }
        </div>
    )
}
