import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from "react-router-dom";
// components
import DarkModeButton from '../DarkModeButton/DarkModeButton';

const Presentation = () => {
    return (
        <div className="d-flex align-items-center justify-content-between my-2 px-5">
            <DarkModeButton />
            <Link to={"/"}><img className='' src={"https://firebasestorage.googleapis.com/v0/b/oliviababystore-reactjs.appspot.com/o/logo.png?alt=media&token=4f5063f4-8636-4c01-97c8-930811e0570f"} alt={"logo"} /></Link>
            <CartWidget />
        </div>
    );
}

export default Presentation;
