import React from 'react';
import Footer from '../../SharedPages/Footer/Footer';
import Banner from '../Banner/Banner';
import InventoryItems from '../InventoryItems/InventoryItems';
import Product from '../Product/Product';
import Services from '../Services/Services';

const NewHome = () => {
    return (
        <div>
            <Banner></Banner>
           <InventoryItems></InventoryItems>
           <Services></Services>
           <Product></Product>
           <Footer></Footer>
        </div>
    );
};

export default NewHome;