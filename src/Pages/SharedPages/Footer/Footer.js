import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-container'>
            <footer >

                <div className="footer-area">

                    <div className="contact">
                        <h3 className='text-warning'>Contact Us...</h3>
                        <p>Address:Dhaka1207</p>
                        <p>Phone:01777700000</p>
                        <p>Email:laptopZone@hotmil.com</p>
                    </div>

                    <div className='blog'>

                        <h3 className='text-warning'>Blogs</h3>
                        <p>Article</p>
                        <p>Header</p>
                        <p>Distribution</p>


                    </div>

                    <div className='Social'>

                        <h3 className='text-warning'>Follow Us</h3>
                        <p>Facebook</p>
                        <p>Linkdin</p>
                        <p>Twitter</p>


                    </div>
                </div>



            </footer>
            <p className='text-center mt-4 footer-title'>All Copyright reserved&copy;By LaptopZoneBd 2022</p>
        </div>
    );
};

export default Footer;