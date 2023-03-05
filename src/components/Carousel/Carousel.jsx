import React from 'react';

const Carousel = () => {
    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide mb-5" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://firebasestorage.googleapis.com/v0/b/oliviababystore-reactjs.appspot.com/o/Banner-1.png?alt=media&token=183eda47-ccb0-429a-8489-4ea94385bc8d" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://firebasestorage.googleapis.com/v0/b/oliviababystore-reactjs.appspot.com/o/Banner-2.png?alt=media&token=b7cb8ba7-cb1f-41de-a39b-1666a2de0aea" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://firebasestorage.googleapis.com/v0/b/oliviababystore-reactjs.appspot.com/o/Banner-3.png?alt=media&token=d804f7b2-9a0d-4dc5-99d0-c2cf47d3ac78" className="d-block w-100" alt="..." />
                </div>
            </div>
        </div>
    )
}

export default Carousel;
