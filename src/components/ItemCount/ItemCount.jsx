import { useState } from "react";
import { toast } from "react-toastify";

export const ItemCount = ({ valInicial, stock, onAdd }) => {

    const [contador, setContador] = useState(valInicial)

    const sumar = () => (contador < stock) && setContador(contador + 1)
    const restar = () => (contador > valInicial) && setContador(contador - 1)
    const agregarCarrito = () => {
        onAdd(contador)
        toast.success(`¡Agregaste ${contador} unidades al carrito!`)
    }

    return (
        <div className="d-flex">
            <div className="d-flex align-items-center ">
                <button type="button" className="btn botonPrincipal btnCount" onClick={() => restar()}>-</button>
                <p className="card-text mb-0 px-2">{contador}</p>
                <button type="button" className="btn botonPrincipal btnCount" onClick={() => sumar()}>+</button>
            </div>
            <div>
                <button type="button" className="btn botonPrincipal ms-4 btnCount" onClick={() => agregarCarrito()}>Agregar</button>
            </div>
        </div>
    );
}

export default ItemCount;