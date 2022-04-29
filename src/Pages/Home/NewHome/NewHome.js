import React from 'react';
import Footer from '../../SharedPages/Footer/Footer';
import InventoryItems from '../InventoryItems/InventoryItems';
import Product from '../Product/Product';
import Services from '../Services/Services';

const NewHome = () => {
    return (
        <div>
           <InventoryItems></InventoryItems>
           <Services></Services>
           <Product></Product>
           <Footer></Footer>
        </div>
    );
};

export default NewHome;