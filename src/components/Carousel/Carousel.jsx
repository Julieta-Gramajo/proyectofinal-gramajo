import React from 'react';

const Carousel = () => {
    return (
        <>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://firebasestorage.googleapis.com/v0/b/oliviababystore-reactjs.appspot.com/o/Carousel-1.png?alt=media&token=2d94a1f4-de96-40cb-b5b6-f3c6ffb72fe6" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://firebasestorage.googleapis.com/v0/b/oliviababystore-reactjs.appspot.com/o/Carousel-2.png?alt=media&token=51677aad-b4a8-49fc-ac88-21fec88ac9cb" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://firebasestorage.googleapis.com/v0/b/oliviababystore-reactjs.appspot.com/o/Carousel-3.png?alt=media&token=e732bce6-159e-4022-981f-b19c1f7771a5" className="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-around align-items-center my-5'>
                <img src="https://firebasestorage.googleapis.com/v0/b/oliviababystore-reactjs.appspot.com/o/descuentos.png?alt=media&token=8d759485-bde8-4ace-bfea-74e5233f1072" className="info-img" alt="..." />
                <img src="https://firebasestorage.googleapis.com/v0/b/oliviababystore-reactjs.appspot.com/o/envios.png?alt=media&token=03253e98-47fb-4061-b1fe-d404b14ca557" className="info-img" alt="..." />
                <img src="https://firebasestorage.googleapis.com/v0/b/oliviababystore-reactjs.appspot.com/o/pagos.png?alt=media&token=2442f56e-565c-4274-aaa3-336a590972eb" className="info-img" alt="..." />
            </div>
        </>
    );
}

export default Carousel;
