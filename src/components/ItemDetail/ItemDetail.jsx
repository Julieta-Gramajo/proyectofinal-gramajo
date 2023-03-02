import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

//Context
import { useCarritoContext } from "../../context/CarritoContext";
import { useDarkModeContext } from '../../context/DarkModeContext';

const ItemDetail = ({ item }) => {
    const { darkMode } = useDarkModeContext()
    const { addItem } = useCarritoContext()

    const onAdd = (cantidad) => {
        addItem(item, cantidad)
    }

    return (
        <div className="d-flex contenedor justify-content-center align-items-center">
            <div className="detail-img">
                <img src={item.img} alt={`Imagen de ${item.categoria} ${item.marca} ${item.nombre}`} />
            </div>
            <div className={`${darkMode ? "detail-body-dark" : "detail-body"}`}>
                <div className="card-body">
                    <h5 className="card-title encabezado text-center">{item.categoria}</h5>
                    <p className="card-text encabezado-text fw-bold my-5">{item.marca} {item.nombre} {item.talle}</p>
                    <p className="card-text encabezado-description mb-5">{item.descripcion}</p>
                    <p className="card-text item-p-2 fw-bold">${new Intl.NumberFormat("de-DE").format(item.precio)}</p>
                    <p className="card-text">Quedan: {item.stock} disponible.</p>
                    <ItemCount valInicial={1} stock={item.stock} onAdd={onAdd} />
                    <div className="d-flex">
                        <button type="button" className="btn button mt-5 me-3 py-1 btn-grad">
                            <Link to={"/"} className='botonDetail'>Continuar comprando</Link>
                        </button>
                        <button type="button" className="btn button mt-5 py-1 btn-grad">
                            <Link to={"/cart"} className='botonDetail'>Finalizar compra </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;