import React from 'react';

// components
import Slider from '../Slider/Slider';
import Presentation from '../Presentation/Presentation';
import List from '../List/List';

const NavBar = () => {
    return (
        <nav className="navbar-light w-100 p-0">
            <Slider />
            <Presentation />
            <div className="d-flex justify-content-center list-navbar">
                <List />
            </div>
        </nav>
    );
}

export default NavBar;
