import { useState } from "react";
import { toast } from "react-toastify";

export const ItemCount = ({ valInicial, stock, onAdd }) => {

    const [contador, setContador] = useState(valInicial)

    const sumar = () => (contador < stock) && setContador(contador + 1)
    const restar = () => (contador > valInicial) && setContador(contador - 1)
    const agregarCarrito = () => {
        onAdd(contador)
        if(contador > 1){
            toast(`👶🏻 ¡Agregaste ${contador} unidades al carrito!`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
        else{
            toast(`👶🏻 ¡Agregaste ${contador} unidad al carrito!`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        }
        
    }

    return (
        <div className="d-flex mt-3">
            <div className="d-flex align-items-center ">
                <button type="button" className="btn boton-itemcount btnCount btn-grad" onClick={() => restar()}>-</button>
                <p className="card-text mb-0 px-2">{contador}</p>
                <button type="button" className="btn boton-itemcount btnCount btn-grad" onClick={() => sumar()}>+</button>
            </div>
            <div>
                <button type="button" className="btn boton-itemcount ms-4 btnCount btn-grad" onClick={() => agregarCarrito()}>Agregar</button>
            </div>
        </div>
    );
}

export default ItemCount;