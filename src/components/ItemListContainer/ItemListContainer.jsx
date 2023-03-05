import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//Components
import ItemList from "../ItemList/ItemList";
import Title from "../Title/Title";
import Carousel from "../Carousel/Carousel";

//Firebase
import { getProductos } from "../../firebase/firebase";

const ItemListContainer = ({mensaje}) => {
    const [productos, setProductos] = useState([])
    const { categoria } = useParams()

    useEffect(() => {
        if (categoria) {
            getProductos()
                .then(items => {
                    const products = items.filter(prod => prod.stock > 0).filter(prod => prod.categoria === categoria)
                    const productsList = <ItemList products={products} plantilla={"item"} />
                    setProductos(productsList)
                })
        }
        else {
            getProductos()
                .then(items => {
                    const products = items.filter(prod => prod.stock > 0)
                    const productsList = <ItemList products={products} plantilla={"item"} />
                    setProductos(productsList)
                })
        }

    }, [categoria])


    return (
        <>  
            <div className="row justify-content-center">
                <Carousel />
                <Title title={mensaje}/>
                {productos}
            </div>
        </>
    );
}

export default ItemListContainer;