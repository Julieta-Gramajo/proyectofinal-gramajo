import { Link } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

import { useCarritoContext } from "../../context/CarritoContext";
const Cart = () => {
    const {carrito, totalPrice, emptyCart} = useCarritoContext()
    return (
        <>
            {carrito.length === 0 
                ?
                <>
                    <h2>Carrito vacío.</h2>
                    <Link to={"/"}><button>Agrega un producto</button></Link>
                </>
                :
                <div className="contenedor">
                    {<ItemList products={carrito} plantilla={"itemCart"}/>}


                    <div>
                        <p>Resumen: $ {new Intl.NumberFormat("de-DE").format(totalPrice())}</p>
                        <button type="button" className="btn btn-danger button mt-4 py-1 botonPrincipal mx-3" onClick={() => emptyCart()}>Vaciar carrito</button>
                        <Link to={"/"}>
                        <button type="button" className="btn button mt-4 py-1 botonPrincipal mx-3">Continuar comprando</button>
                        </Link>
                        <Link to={"/checkout"}>
                        <button type="button" className="btn button mt-4 py-1 botonPrincipal mx-3">Finalizar compra</button>
                        </Link>
                    </div>
                </div>
            }
        </>
    )

}

export default Cart;