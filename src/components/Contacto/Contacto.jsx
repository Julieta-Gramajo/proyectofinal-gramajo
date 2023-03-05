import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

//Context
import { useDarkModeContext } from '../../context/DarkModeContext';

const Contacto = () => {
    const { darkMode } = useDarkModeContext()

    const datosFormulario = React.useRef()
    let navigate = useNavigate()

    const consultarFormulario = (e) => {
        e.preventDefault()
        console.log(datosFormulario.current)
        const datForm = new FormData(datosFormulario.current)
        const contacto = Object.fromEntries(datForm)
        console.log(contacto)
        e.target.reset()
        Swal.fire({
            title: '💌 ¡Gracias por tu contacto! 💌',
            text: "Recibirás tu respuesta a la brevedad posible",
            icon: 'success',
            confirmButtonText: 'Cerrar',
            confirmButtonColor: "#FF77AB"
        })
        navigate("/")
    }

    return (
        <div className="d-flex justify-content-center my-5">
            <form className={`${darkMode ? "formulario-dark" : "formulario"}`} onSubmit={consultarFormulario} ref={datosFormulario}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre y apellido:</label>
                    <input type="text" className="form-control formularioControl" name="nombre" required autoComplete="off"/>
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input type="email" className="form-control formularioControl" name="email" required autoComplete="off"/>
                    <div className="form-text">Nunca compartiremos tu email.</div>
                </div>

                <div className="mb-3">
                    <label htmlFor="telefono" className="form-label">Teléfono:</label>
                    <input type="number" className="form-control formularioControl" name="telefono" required autoComplete="off"/>
                    <div className="form-text">Nunca compartiremos tu teléfono.</div>
                </div>

                <div className="mb-3">
                    <label htmlFor="textarea" className="form-label">Escribe aquí tu mensaje:</label>
                    <textarea className="form-control formularioControl textarea" name="textarea" rows={3} required autoComplete="off"/>
                </div>

                <button type="submit" className="btn button botonDetail btn-grad">Enviar</button>
            </form>
        </div>
    );
}

export default Contacto;