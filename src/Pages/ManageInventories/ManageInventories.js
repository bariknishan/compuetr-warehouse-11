import React from 'react';
import useItems from '../../Hooks/UseItems';

const ManageInventories = () => {
    const [items ,setItems] = useItems()
    const deleteHandle = (id) => {
        const proceed = window.confirm(' Are You sure delete this item?')

        if (proceed) {

            const url = `http://localhost:5000/items/${id}`

            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)

            const rest= items.filter(item=> item._id !== id)

           setItems(rest) ;

                })

        }
    }

    
    return (
        <div className='text-white mt-4  '>
            <h2 className='text-warning text-center  '>Manage Your Inventory Items:</h2>

            {
                items.map(item => <div className='border border-primary w-50 mx-auto text-center p-4 m-4' key={item._id}>

                    <h5> name:{item.name}  </h5>
                    <p>  price:{item.price} </p>
                    <p> quantity:{item.quantity}</p>
                    <p> Id:{item._id}</p>
                    <button onClick={() => deleteHandle(item._id)} className='bg-warning'>Delete</button>
                </div>)

            }
        </div>
    );
};

export default ManageInventories;