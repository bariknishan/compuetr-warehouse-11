import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

const InventoryItems = () => {

    const[items, setItems]=useState([])

    useEffect(()=>{
        fetch('items.json')
        .then(res=>res.json())
        .then(data=>setItems(data))
    },[])
    return (
        <div>
            <h1>Inventory Items:{items.length}</h1>


            {
                items.map(item=><Item
                
                key={item.key}
                item={item}
                
                ></Item>)
            }
        </div>
    );
};

export default InventoryItems;