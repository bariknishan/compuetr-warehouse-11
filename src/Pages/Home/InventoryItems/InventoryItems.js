import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './InventoryItems.css' ;

const InventoryItems = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('https://calm-plains-65259.herokuapp.com/items')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div  id="inventoryitems" >
            <h1 className='text-center text-warning mt-4 mb-4 title-area'> INVENTORY ITEMS {items.length}</h1>

            <div className='inventory-container'>
                {
                    items.map(item => <Item

                        key={item._id}
                        item={item}

                    ></Item>)
                }

            </div>

        </div>
    );
};

export default InventoryItems;