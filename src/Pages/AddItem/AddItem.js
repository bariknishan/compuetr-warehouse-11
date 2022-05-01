import React from 'react';
import { useForm } from "react-hook-form";

const AddItem = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);

       const url =` http://localhost:5000/items` ;

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

        <div className='w-25 mx-auto'>
            <h2 className='text-white text-center mt-2'>Re stock Item</h2>

          
            <form  className=' d-flex flex-column mb-4' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-3'  placeholder='name' {...register("name", { required: true, maxLength: 20 })}/>
                <input className='mb-3' placeholder='description'  {...register("description")} /> 
                <input className='mb-3' placeholder='Phot URL'  type="text" {...register("img")} />
                <input className='mb-3 '  type="submit" />
            </form>
            
        </div>
    );
};

export default AddItem;