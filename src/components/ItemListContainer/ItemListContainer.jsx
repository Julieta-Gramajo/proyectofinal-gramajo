import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//Components
import ItemList from "../ItemList/ItemList";
import Carousel from "../Carousel/Carousel";

//Context
import { useDarkModeContext } from "../../context/DarkModeContext";

//Firebase
import { getProductos } from "../../firebase/firebase";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const { categoria } = useParams()
    const { darkMode } = useDarkModeContext()
    console.log(darkMode)

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
            <Carousel />
            <div className="row justify-content-center">
                {productos}
            </div>
        </>
    );
}

export default ItemListContainer;