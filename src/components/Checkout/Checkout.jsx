import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { createOrdenCompra, getProducto, updateProducto } from "../../firebase/firebase";
import { useState } from "react";
import Swal from "sweetalert2";

//Context
import { useDarkModeContext } from '../../context/DarkModeContext';
import { useCarritoContext } from "../../context/CarritoContext";

const Checkout = () => {
    const { darkMode } = useDarkModeContext()
    const { carrito, emptyCart, totalPrice } = useCarritoContext()
    const datosFormulario = React.useRef()
    let navigate = useNavigate()
    const [email, setEmail] = useState(" ")
    const [repEmail, setRepEmail] = useState(" ")
    const [validado, setValidado] = useState(true)

    const consultarFormulario = (e) => {
        e.preventDefault()
        if (validado === true) {
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
                Swal.fire({
                    title: '💖 ¡Muchas gracias por tu compra! 💖',
                    text: `Su orden <b>${ordenCompra.id}</b> por <b>$${new Intl.NumberFormat("de-DE").format(totalPrice())}</b> fue realizada con éxito.`,
                    icon: 'success',
                    confirmButtonText: 'Cerrar'
                  })
                emptyCart()
                e.target.reset()
                navigate("/")
            })
        }

        else{
            Swal.fire({
                title: '¡Error!',
                text: 'Los datos no se han completado de forma correcta.',
                icon: 'error',
                confirmButtonText: 'Reintentar'
              })
        }
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
                <div className="d-flex flex-column justify-content-center align-items-center my-5">
                    <h1 className="mb-5 encabezado">💖 Completa el formulario para terminar la compra 💖</h1>

                    <form className={`${darkMode ? "formulario-dark" : "formulario"}`} onSubmit={consultarFormulario} refgit status={datosFormulario}>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre y apellido:</label>
                            <input type="text" className="form-control formularioControl" name="nombre" required autocomplete="off" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input type="email" className="form-control formularioControl" name="email" required autocomplete="off"
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                    if (e.target.value === repEmail) {
                                        setValidado(true)
                                    }
                                    else {
                                        setValidado(false)
                                    }
                                }} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="repEmail" className="form-label">Repetir email:</label>
                            <input type="email" className="form-control formularioControl" name="repEmail" required autocomplete="off"
                                onChange={(e) => {
                                    setRepEmail(e.target.value)
                                    if (e.target.value === email) {
                                        setValidado(true)
                                    }
                                    else {
                                        setValidado(false)
                                    }
                                }} />

                            <p className={`${validado ? "validacion-ok" : "validacion-wrong"}`}>Los emails <span>no</span> son iguales.</p>
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

                        <button type="submit" className="btn button btn-grad">Finalizar compra</button>
                    </form>
                </div>
            }
        </>

    );
}

export default Checkout;
