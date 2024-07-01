import { useContext, useState} from "react";
import { CartContext } from "../../context/CartContext";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase/config";
import { useForm } from "react-hook-form";



export const Checkout = () => {

    const { carrito, calcularTotal, vaciarCarrito } = useContext(CartContext);
    const { register, handleSubmit } = useForm();
    let [docId, setDocId] = useState("");

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: calcularTotal(),
            fecha: Timestamp.now()
        }
        
        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setDocId(doc.id);
                vaciarCarrito();
            })
    }

    if (docId) {
        return (
                
             <div className="ticket-compra"> 
                <h1>Muchas gracias por tu compra!!!!!!!!!</h1>
                <p>Para hacer el seguimiento de tu pedido, su identificador es este: {docId}</p>
            </div> 

            
        )
    }

  return (
    <div>
        <form className="formulario-completo" onSubmit={handleSubmit(comprar)}>
            <input className="form-nombre" type="text" placeholder="Ingrese su nombre" {...register("nombre")} />
            <input  className="form-email" type="email" placeholder="Ingrese su e-mail" {...register("email")} />
            <button className="btn-cc" type="submit">Confirmar Compra</button>
        </form>
    </div>
  )
}