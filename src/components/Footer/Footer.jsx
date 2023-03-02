import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer d-flex justify-content-around py-2'>
            <button className='btn btn-grad-footer'>
                <Link className='lista' to={`https://github.com/Julieta-Gramajo`}>Visitame en Github</Link>
            </button>
            <button className='btn btn-grad-footer'>
                <Link className='lista' to={`https://www.linkedin.com/in/emilse-julieta-gramajo/`}>Visitame en LinkedIn</Link>
            </button>
        </div>
    );
}

export default Footer;
