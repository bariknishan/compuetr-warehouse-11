import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Item.css';


const Item = ({ item }) => {
    const {id, name, img, price, supplier, description, quantity } = item;

 const navigate= useNavigate()

    const navigateToRouteDetail= id=>{

        navigate(`/item/${id}`)
    }

    return (
        <div className='item-container mt-4' >

        <div className="item-area mb-4">
        <img src={img} alt="" />

        <div className="des-area">

        <h2 className='mt-4'>{name}</h2>
            <p>Price:{price}</p>
            <p>quantity:{quantity}</p>
            <p>Supplier:{supplier}</p>
            <p><small>{description}</small></p>
            <button onClick={()=> navigateToRouteDetail(id) }  className=' button p-2 bg-warning w-25 border-0 fw-bold mb-4'> UPDATE</button>
        </div>
           
        </div>
         
        </div>
    );
};

export default Item;