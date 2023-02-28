import React from 'react';
import { Link } from 'react-router-dom';

// components
import Categories from '../Categories/Categories';

const List = () => {
    return (
        <>
            <ul className="d-flex my-5">
                <li className=" lista secciones">
                    <Link className="lista" to={"/"}>inicio</Link>
                    <img className="hover" src={"https://firebasestorage.googleapis.com/v0/b/oliviababystore-reactjs.appspot.com/o/hover.png?alt=media&token=77e8a4a7-3364-40b5-99ec-77514beba1d9"} alt={"logo"} />
                </li>
                <li className=" lista secciones">
                    <Link className="lista" to={"/contacto"}>contacto</Link>
                    <img className="hover" src={"https://firebasestorage.googleapis.com/v0/b/oliviababystore-reactjs.appspot.com/o/hover.png?alt=media&token=77e8a4a7-3364-40b5-99ec-77514beba1d9"} alt={"logo"} />
                </li>
                <li className=" lista secciones categories ">
                    <Link className="lista" to={"/contacto"}>categorias</Link>
                    <img className="hover" src={"https://firebasestorage.googleapis.com/v0/b/oliviababystore-reactjs.appspot.com/o/hover.png?alt=media&token=77e8a4a7-3364-40b5-99ec-77514beba1d9"} alt={"logo"} />
                        <ul className="desplegable py-4 aparicion-info">
                            <li className="lista my-4"><Link className="lista" to={"/category/pañales"}>pañales</Link></li>
                            <li className="lista my-4"><Link className="lista" to={"/category/mamaderas"}>mamaderas</Link></li>
                            <li className="lista my-4"><Link className="lista" to={"/category/chupetes"}>chupetes</Link></li>
                        </ul>
                </li>
            </ul>

        </>
    );
}

export default List;
