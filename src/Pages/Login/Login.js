import React, { useRef } from 'react';
import './Login.css'
import { Button, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import GoogleLogin from './GoogleLogin/GoogleLogin';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Login = () => {


    const emailRef = useRef('');
    const passwordRef = useRef('')
    const navigate = useNavigate();



    const navigateSignUp = () => {
        navigate('/signup');
    }


    //// reset pass 
    const [sendPasswordResetEmail, ] = useSendPasswordResetEmail(
        auth
    );
    const resetPass = async () => {
        const email = emailRef.current.value;
       if(email){
        await sendPasswordResetEmail(email)
        toast('Email sent')
       }

       else{
           toast('Give email Address')
       }
    }



    // sign in method 

    const [
        signInWithEmailAndPassword,
        user,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const location = useLocation()
    let from = location.state?.from?.pathname || "/";


 ////////////// error message


    let errorMessage;   

    if (error) {
        errorMessage =
            <div>
                <p className='text-danger'>Error: {error.message}</p>
            </div>

    }



    if (user) {
        navigate(from, { replace: true })  /// login location 
    }






    const formHandleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        // console.log(email, password)
        signInWithEmailAndPassword(email, password)

    }



    return (


        <div className=' login-container mx-auto w-50  text-white'>

            <h1 className='text-center mt-4'>LOG IN HERE</h1>

            <Form className='login-form' onSubmit={formHandleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button className='bg-warning text-dark w-50 d-block mx-auto fw-bold' variant="primary" type="submit">
                    Log In
                </Button>


            </Form>
            {errorMessage}


            <p className='text-white mt-4  text-center' >New Here ? <span onClick={navigateSignUp} className='text-warning signup '> Sign Up</span></p>

            <p className='text-white mt-2 text-center' >Forget Password ? <span onClick={resetPass} className='text-warning signup '> Reset password</span></p>



            <GoogleLogin></GoogleLogin>
            <ToastContainer />
        </div>
    );
};

export default Login;