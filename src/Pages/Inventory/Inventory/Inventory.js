import React from 'react';
import { useForm } from "react-hook-form";


const Inventory = () => {


    const { register, handleSubmit } = useForm();


    const onSubmit = data => {
        console.log(data);

       const url =` https://calm-plains-65259.herokuapp.com/items` ;

       fetch(url, {
           method:'POST',
           headers:{
               'content-type': 'application/json'
           },
           body:JSON.stringify(data)
           

       })

 .then(res=>res.json())
.then(result=>{
    console.log(result)
})
    
    }

    return (

        <div className='w-25 mx-auto  ' >
            <h2 className='text-center text-white mt-2'> Inventory Re stock  </h2>


            <form className=' d-flex flex-column mb-4' onSubmit={handleSubmit(onSubmit)}>

                <input className='mb-3' placeholder='Give  Number' type="number" {...register("quantity")} />
                <input className='mb-3' placeholder='photo URL' type="text" {...register("img")} />
                <input className='mb-3 bg-primary ' type="Submit" />
            </form>
        </div>
    );
};

export default Inventory;