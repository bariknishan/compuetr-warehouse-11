import React from 'react';
import './Banner.css';
import image from '../../../images/banner/main.png'

const Banner = () => {
  return (
    <div className='bannner-container'>


      <div className="banner-area">
        <div className="text-area">
          <h1 className='banner-title'>Explore Youself with Leading Technology</h1>
           
          <p className='mt-4'>
          Best support For logistics. Exelent Shipment Services around The world
            Our expansive network of fulfillment centers spread across the country means 
            you can offer one and two-day shipping to more customers in more cities. We are always on, for your service.

            </p>
        </div>

        <div className="image">
     <img src={image} alt="" />
        </div>

      </div>


    </div>
  );
};

export default Banner;