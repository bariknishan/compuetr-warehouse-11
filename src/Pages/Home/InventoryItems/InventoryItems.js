import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './InventoryItems.css' ;
const InventoryItems = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('items.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div  id="inventoryitems" >
            <h1 className='text-center text-warning mt-4 mb-4 title-area'> INVENTORY ITEMS</h1>

            <div className='inventory-container'>
                {
                    items.map(item => <Item

                        key={item.id}
                        item={item}

                    ></Item>)
                }

            </div>

        </div>
    );
};

export default InventoryItems;