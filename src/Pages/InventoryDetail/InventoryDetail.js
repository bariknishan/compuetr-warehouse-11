import React from 'react';
import { useParams } from 'react-router-dom';

const InventoryDetail = () => {

    const {id}= useParams()
    return (
        <div>
       <h1>See All Details:{id} </h1>  

        </div>
    );
};

export default InventoryDetail;