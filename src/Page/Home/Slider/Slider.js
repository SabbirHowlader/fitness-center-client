import React from 'react';

import img1 from '../../../image/slider-01.jpg';
import img2 from '../../../image/slider-02.jpg';
import img3 from '../../../image/slider-03.jpg';

const Slider = () => {
    return (
        <div className='mb-20'>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img src={img3}className="w-full" alt='' />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={img2}className="w-full" alt='' />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={img1}className="w-full" alt='' />
                </div>
            </div>
            <div className="flex justify-center w-full -mt-20 py-2 gap-2 ">
                <a href="#item1" className="btn btn-xs hover:bg-blue-700">1</a>
                <a href="#item2" className="btn btn-xs hover:bg-blue-700">2</a>
                <a href="#item3" className="btn btn-xs hover:bg-blue-700">3</a>
            </div>
        </div>
    );
};

export default Slider;