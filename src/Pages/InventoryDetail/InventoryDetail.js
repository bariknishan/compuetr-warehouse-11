import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const InventoryDetail = () => {

    const {id }= useParams() ;
    const [item, setItems]= useState({});
  
    useEffect(()=>{

        const url =`https://calm-plains-65259.herokuapp.com/items/${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setItems(data))
    },[])

    return (
        <div className='inventory-area bg-primary text-center p-4 w-50 mx-auto mt-4'>
          <img src={item.img} alt="" />
          
       <h3 className='text-white '>You are Adding:{item.name} </h3>
        <h4 className='text-white'> Supplier:{item.supplier}</h4>
       
       <p  className='text-white ' > ID:{item._id}</p>
      
       <p  className='text-white ' > Quantity:{item.quantity -1}</p>
       <p  className='text-white ' > price:{item.price}</p>
       <p  className='text-white ' > price:{item.description}</p>
     
       

       <Link  to="/inventory" > <button className='btn btn-warning '>Delivered</button></Link>

        </div>
    );
};

export default InventoryDetail;