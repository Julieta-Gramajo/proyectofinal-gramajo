// Context
import { useCarritoContext } from "../../context/CarritoContext";
import { useDarkModeContext } from '../../context/DarkModeContext';

const ItemCart = ({item}) => {
    const { darkMode } = useDarkModeContext()
    const {removeItem} = useCarritoContext(

    )
    return (
        <div className={`my-5 ${darkMode ? "item-cart-dark" : "item-cart"}`}>
            <div className="pe-5 my-4">
                <img src={item.img} width={100} alt={`Imagen de ${item.categoria} ${item.marca} ${item.nombre}`} />
            </div>
            <div>
                <div className="d-flex align-items-center item-cart-container">
                    <p className="fw-bold item-cart-title">{item.marca} {item.nombre} {item.talle}</p>
                    <p className="fw-bold item-cart-title">Cantidad: {item.cant}</p>
                    <p className="fw-bold item-cart-title">Precio unitario: ${new Intl.NumberFormat("de-DE").format(item.precio)}</p>
                    <p className="fw-bold item-cart-title fw-bold">Subtotal: ${new Intl.NumberFormat("de-DE").format(item.precio * item.cant)}</p>
                    <button type="button" className="btn btn-grad mx-2" onClick={() => removeItem(item.id)}>
                        <img src="https://firebasestorage.googleapis.com/v0/b/oliviababystore-reactjs.appspot.com/o/papelera-de-reciclaje%20(1).png?alt=media&token=fa526f77-fea6-452c-82b7-7166922744ed" alt="eliminar" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ItemCart;