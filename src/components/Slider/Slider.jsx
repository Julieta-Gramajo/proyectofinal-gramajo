import React from 'react';

const Slider = () => {
    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide carouselText text-center" data-bs-ride="carousel">
            <div className="carousel-inner my-0">
                <div className="carousel-item active">
                    <p className='my-1'>envío gratis a partir de los $3.000</p>
                </div>
                <div className="carousel-item">
                    <p className='my-1'>compra online y retirá en sucursal</p>
                </div>
            </div>
        </div>
    );
}

export default Slider;
