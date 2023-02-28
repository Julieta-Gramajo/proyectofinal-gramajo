import React from "react";
import { useCarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createOrdenCompra, getProducto, updateProducto } from "../../firebase/firebase";

const Checkout = () => {
    const { carrito, emptyCart, totalPrice } = useCarritoContext()
    const datosFormulario = React.useRef()
    let navigate = useNavigate()

    const consultarFormulario = (e) => {
        e.preventDefault()
        const datForm = new FormData(datosFormulario.current)
        const cliente = Object.fromEntries(datForm)

        const aux = [...carrito]

        aux.forEach(prodCarrito => {
            getProducto(prodCarrito.id).then(prodBDD => {
                prodBDD.stock -= prodCarrito.cant
                updateProducto(prodCarrito.id, prodBDD)
            })
        })

        createOrdenCompra(cliente, aux, totalPrice(), new Date().toISOString()).then(ordenCompra => {
            toast.success(`¡Muchas gracias por tu compra! Su orden ${ordenCompra.id} por $${new Intl.NumberFormat("de-DE").format(totalPrice())} fue realizada con éxito.`)
            emptyCart()
            e.target.reset()
            navigate("/")
        })
    }

    return (
        <>
            {carrito.length === 0
                ?
                <>
                    <h2>Carrito vacío.</h2>
                    <Link to={"/"}><button>Agrega un producto</button></Link>
                </>
                :
                <div className="d-flex justify-content-center my-5">
                    <form className="formulario" onSubmit={consultarFormulario} ref={datosFormulario}>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre y apellido:</label>
                            <input type="text" className="form-control formularioControl" name="nombre" required autocomplete="off" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input type="email" className="form-control formularioControl" name="email" required autocomplete="off" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="repEmail" className="form-label">Repetir email:</label>
                            <input type="email" className="form-control formularioControl" name="repEmail" required autocomplete="off" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="telefono" className="form-label">Teléfono:</label>
                            <input type="number" className="form-control formularioControl" name="telefono" required autocomplete="off" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="direccion" className="form-label">Dirección:</label>
                            <input type="text" className="form-control formularioControl" name="direccion" required autocomplete="off" />
                        </div>

                        <div className="form-text my-3">Nunca compartiremos tus datos personales.</div>

                        <button type="submit" className="btn button botonPrincipal">Finalizar compra</button>
                    </form>
                </div>
            }
        </>

    );
}

export default Checkout;
