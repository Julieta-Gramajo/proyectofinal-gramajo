import { Link } from 'react-router-dom';

//Context
import { useDarkModeContext } from '../../context/DarkModeContext';

const Item = ({ item }) => {
    const { darkMode } = useDarkModeContext()

    return (
        <div className={`mt-3 mb-5 mx-5 ${darkMode ? "item-container-dark" : "item-container"}`}>
            <img src={item.img} className="card-img-top" alt={`Imagen de ${item.categoria} ${item.marca} ${item.nombre}`} />
            <div className="item-p">
                <p className="item-p-1">{item.marca} {item.nombre} {item.talle}</p>
                <p className="item-p-2">${new Intl.NumberFormat("de-DE").format(item.precio)}</p>
            </div>
            <button type="button" className="btn button btn-grad item-button aparicion-info-item" >
                <Link className='botonDetail' to={`/item/${item.id}`}>Ver producto</Link>
            </button>
        </div>

    );
}

export default Item;