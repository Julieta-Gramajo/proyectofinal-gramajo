import { useCarritoContext } from "../../context/CarritoContext";
const ItemCart = ({item}) => {
    const {removeItem} = useCarritoContext(

    )
    return (
        <div className="d-flex contenedor justify-content-center align-items-center itemDetail">
            <div className="col-md-4">
                <img src={item.img} width={300} alt={`Imagen de ${item.categoria} ${item.marca} ${item.nombre}`} />
            </div>
            <div className="col-md-8 p-3">
                <div className="card-body">
                    <h5 className="card-title encabezado text-center">{item.categoria}</h5>
                    <p className="card-text fw-bold my-3">{item.marca} "{item.nombre}" {item.talle}</p>
                    <p className="card-text">Cantidad: {item.cant}</p>
                    <p className="card-text">Precio unitario: ${new Intl.NumberFormat("de-DE").format(item.precio)}</p>
                    <p className="card-text fw-bold">Subtotal: ${new Intl.NumberFormat("de-DE").format(item.precio * item.cant)}</p>
                    <button type="button" className="btn btn-danger button mt-4 py-1 botonPrincipal" onClick={() => removeItem(item.id)}>Eliminar del carrito</button>
                </div>
            </div>
        </div>
    );
}

export default ItemCart;