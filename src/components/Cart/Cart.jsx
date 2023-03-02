import { Link } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

import { useCarritoContext } from "../../context/CarritoContext";
const Cart = () => {
    const { carrito, totalPrice, emptyCart } = useCarritoContext()
    return (
        <>
            {carrito.length === 0
                ?
                <div className="empty-cart">
                    <h2>¡Carrito vacío!</h2>
                    <h3>debes agregar agregar al menos 1 producto al carrito</h3>
                    <button className="btn btn-grad my-5">
                        <Link to={"/"} className="botonDetail">Agrega un producto</Link>
                    </button>
                </div>
                :
                <div className="contenedor-cart">
                    {<ItemList products={carrito} plantilla={"itemCart"} />}


                    <div className="text-center my-5">
                        <p className="cart-resumen">Total: $ {new Intl.NumberFormat("de-DE").format(totalPrice())}</p>

                        <div className="d-flex my-5">
                            <button type="button" className="btn btn-grad" onClick={() => emptyCart()}>Vaciar carrito</button>
                            <button type="button" className="btn btn-grad">
                                <Link to={"/"} className='botonDetail'>Continuar comprando</Link>
                            </button>
                            <button type="button" className="btn btn-grad">
                                <Link to={"/checkout"} className='botonDetail'>Finalizar compra</Link>
                            </button>
                        </div>

                    </div>
                </div>
            }
        </>
    )

}

export default Cart;