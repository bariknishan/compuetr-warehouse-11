import React from 'react';
import './GoogleLogin.css'
import logo from '../../../images/logo/google.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';


const GoogleLogin = () => {


    //// google authentication 
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);


    const navivate = useNavigate()

   let errorMessage;

    if (error) {
        errorMessage= <div> <p className='text-danger'>Error:{error.message}</p></div>
      
    }

    if (user) {
        navivate('/newhome')
    }

 

    return (
        <div className='text-center'>
            <h5 className='text-white'>Choose Google</h5>

            <button  onClick={()=>signInWithGoogle()} className='google-btn mt-4 w-50 bg-warning p-2 fw-bold '>
                <img className='me-4' src={logo} alt="" />
                Sign With Google</button>

         {errorMessage}
        </div>
    );
};

export default GoogleLogin;