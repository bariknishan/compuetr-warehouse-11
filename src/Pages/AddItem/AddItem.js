import React from 'react';
import { useForm } from "react-hook-form";

const AddItem = () => {

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

        <div className='w-25 mx-auto border border-warning p-4 mt-4  '>
            <h2 className='text-white text-center mt-2'> Stock Item</h2>

          
            <form  className=' d-flex flex-column mb-4' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-3'  placeholder='name' {...register("name", { required: true, maxLength: 20 })}/>
                <input className='mb-3' placeholder='description'  {...register("description")} /> 
                <input className='mb-3' placeholder='Phot URL'  type="text" {...register("img")} />
                <input className='mb-3 bg-primary '  type="submit" />
            </form>
            
        </div>
    );
};

export default AddItem;