import React from 'react';
import './Services.css';
import pic1 from '../../../images/service .png'
import pic2 from '../../../images/service2  .png'
import pic3 from '../../../images/service3 .png'
import pic4 from '../../../images/service4 .png'

const Services = () => {
    return (
        <div className='service-container mt-4'>
            
            <h1  className='text-center service-title   fw-bold text-warning mt-4'>SERVICE CRITERIA 2022</h1>

        
            
            <div className="service-area ">

                <div>
                    <img src={pic1} alt="" />
                   <div className="article">
                   <h3 className='text-white mt-4'>Fantastic work Environment inside The Warehouse Area center. </h3>
                    <p className='text-warning'>Pick Your finest Destination For Work. So that you can work properly </p>
                   </div>
                </div>

                <div>
                    <img src={pic2} alt="" />
                  <div className="article">
                  <h3 className='text-white mt-4'>WorldClass fastest Delivery Around All over the world. </h3>
                    <p className='text-warning  '>Choose Our Service To get extra benefit extra money savings.</p>
                  </div>
                </div>
                <div>
                    <img src={pic3} alt="" />
                    <div className="article">
                    <h3 className='text-white mt-4'> Our Expert Always Try to assure the best quality Of Products. </h3>
                    <p className='text-warning'>Always take yourself as quality checker to ensure your smooth journey.</p>
                    </div>
                </div>
                <div>
                    <img src={pic4} alt="" />
                  <div className="article">
                  <h3 className='text-white mt-4'> Avaliable space in our Warehouse To load Multiple  Products </h3>
                    <p className='text-warning'>Choose Our Service To get extra benefit extra money savings.</p>
                  </div>
                </div>



            </div>



        </div>
    );
};

export default Services;