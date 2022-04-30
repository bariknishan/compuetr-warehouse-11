import React from 'react';
import { Link, useParams } from 'react-router-dom';

const InventoryDetail = () => {

    const {id}= useParams()
    return (
        <div className='inventory-area bg-primary text-center p-4 w-50 mx-auto'>
       <h1 className='text-white '>See All Details:{id} </h1>  

       <Link  to="/inventory" > <button className='btn btn-warning '>Delivered</button></Link>

        </div>
    );
};

export default InventoryDetail;