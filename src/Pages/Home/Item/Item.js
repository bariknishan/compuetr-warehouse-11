import React from 'react';

const Item = ({item}) => {

const {name, img, description,supplier,price,quantity}= item  ;
    
    return (
        <div>
            <img src={item.img} alt="" />
            <h2>This is Items:{item.name}</h2>
        </div>
    );
};

export default Item;