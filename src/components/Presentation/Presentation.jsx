import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from "react-router-dom";
// components
import DarkModeButton from '../DarkModeButton/DarkModeButton';

const Presentation = () => {
    return (
        <div className="d-flex align-items-center justify-content-between my-2 mx-5">
            <DarkModeButton />
            <Link className='nav-link' to={""}><img className='icon' src={"https://firebasestorage.googleapis.com/v0/b/oliviababystore-reactjs.appspot.com/o/rattle.png?alt=media&token=2922c801-94b2-46bf-8b8c-452006c7487f"} alt={"search"} /></Link>
            <Link className='nav-link' to={""}><img className='' src={"https://firebasestorage.googleapis.com/v0/b/oliviababystore-reactjs.appspot.com/o/logo.png?alt=media&token=4f5063f4-8636-4c01-97c8-930811e0570f"} alt={"logo"} /></Link>
            <Link className='nav-link' to={""}><img className='icon' src={"https://firebasestorage.googleapis.com/v0/b/oliviababystore-reactjs.appspot.com/o/user.png?alt=media&token=1fedcb7c-17de-4ab3-9a4a-36b26e06ae27"} alt={"user"} /></Link>
            <CartWidget />
        </div>
    );
}

export default Presentation;
