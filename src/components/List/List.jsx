import React from 'react';
import { Link } from 'react-router-dom';

//Context
import { useDarkModeContext } from '../../context/DarkModeContext';

const List = () => {
    const { darkMode } = useDarkModeContext()

    return (
        <ul className="d-flex mt-5 mb-3">
            
            <li className="lista secciones">
                <Link className={` ${darkMode ? "lista-dark" : "lista"}`} to={"/"}>inicio</Link>
                <img className="hover" src={"https://firebasestorage.googleapis.com/v0/b/oliviababystore-reactjs.appspot.com/o/hover.png?alt=media&token=77e8a4a7-3364-40b5-99ec-77514beba1d9"} alt={"logo"} />
            </li>
            <li className="lista secciones">
                <Link className={` ${darkMode ? "lista-dark" : "lista"}`} to={"/contacto"}>contacto</Link>
                <img className="hover" src={"https://firebasestorage.googleapis.com/v0/b/oliviababystore-reactjs.appspot.com/o/hover.png?alt=media&token=77e8a4a7-3364-40b5-99ec-77514beba1d9"} alt={"logo"} />
            </li>
            <li className="lista secciones categories">
                <Link className={` ${darkMode ? "lista-dark" : "lista"}`}>categorias</Link>
                <img className="hover" src={"https://firebasestorage.googleapis.com/v0/b/oliviababystore-reactjs.appspot.com/o/hover.png?alt=media&token=77e8a4a7-3364-40b5-99ec-77514beba1d9"} alt={"logo"} />
                <ul className={`py-4 aparicion-info ${darkMode ? "desplegable-dark" : "desplegable"}`}>
                    <li className="lista my-4"><Link className={` ${darkMode ? "lista-dark" : "lista"}`} to={"/category/pañales"}>pañales</Link></li>
                    <li className="lista my-4"><Link className={` ${darkMode ? "lista-dark" : "lista"}`} to={"/category/mamaderas"}>mamaderas</Link></li>
                    <li className="lista my-4"><Link className={` ${darkMode ? "lista-dark" : "lista"}`} to={"/category/chupetes"}>chupetes</Link></li>
                </ul>
            </li>
        </ul>
    );
}

export default List;
