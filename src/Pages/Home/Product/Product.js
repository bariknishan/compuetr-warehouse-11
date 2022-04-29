import React from 'react';
import './Products.css'
import img1 from '../../../images/product/laptop1.png'
import img2 from '../../../images/product/laptop2.png'
const Product = () => {
    return (
        <div className='product-container'>
            <h1 className='text-center fw-bold mt-4 text-white mb-4 product-title'>LATEST PRODUCT UPCOMING IN WAREHAOUSE...</h1>

              
            <div className="product-image mb-4 ">
              

              <div className='fisrt-image'>
  
             
             <img src={img1} alt="" />
             <h4 className='text-center text-white mt-4'>APPLE MACKBOOK PRO  </h4>
              <h5  className='text-center text-white'>AVAILABLE SOON..</h5>
              </div>

              <div className='last-image'>
              
             <img src={img2} alt="" />
             <h4 className='text-center text-white  mt-4'>HP GENBOOK 990</h4>
             <h5  className='text-center text-white'>AVAILABLE SOON..</h5>
              </div>

          
            </div >
            
            
        </div>
    );
};

export default Product;