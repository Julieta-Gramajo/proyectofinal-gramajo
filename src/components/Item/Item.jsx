import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

//Context
import { useDarkModeContext } from '../../context/DarkModeContext';

const Item = ({ item }) => {
    const { darkMode } = useDarkModeContext()

    return (
        <div className={`item-container mt-3 mb-5 mx-3 ${darkMode ? "contenedorDark" : "contenedor"}`}>
            <img src={item.img} className="card-img-top item-img" alt={`Imagen de ${item.categoria} ${item.marca} ${item.nombre}`} />
            <button type="button" className="btn button m-0 py-1 btn-grad item-button aparicion-info-item" >
                <Link className='botonDetail' to={`/item/${item.id}`}>Ver producto</Link>
            </button>
            <div className="item-p">
                <p className="m-1">{item.marca} "{item.nombre}" {item.talle}</p>
                <p className="fw-bold">${new Intl.NumberFormat("de-DE").format(item.precio)}</p>
            </div>
        </div>

    );
}

export default Item;