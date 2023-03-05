import React from 'react';

const Slider = () => {
    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner carousel-text">
                <div className="carousel-item active">
                    <p className=''>envíos gratis a partir de los $3.000</p>
                </div>
                <div className="carousel-item ">
                    <p className=''>comprá online y retirá en sucursal</p>
                </div>
            </div>
        </div>
    );
}

export default Slider;
