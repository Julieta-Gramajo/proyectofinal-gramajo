import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducto } from "../../firebase/firebase";

const ItemDetailContainer = () => {
    const [producto, setProductos] = useState([])
    const {id} = useParams()
    useEffect(() => {
        getProducto(id)
        .then(item => {
            setProductos(item)
        })
    }, [])

    return (
        <div className="my-5 d-flex justify-content-center align-items-center">
            <ItemDetail item={producto}/>
        </div>
    );
}

export default ItemDetailContainer;