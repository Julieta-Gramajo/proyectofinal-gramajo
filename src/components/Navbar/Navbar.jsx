import React from 'react';

// components
import Slider from '../Slider/Slider';
import Presentation from '../Presentation/Presentation';
import List from '../List/List';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light d-block p-0">
            <Slider />
            <Presentation />
            <div className="container-fluid d-flex justify-content-center ms-4">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <List />
            </div>
        </nav>
    );
}

export default NavBar;
