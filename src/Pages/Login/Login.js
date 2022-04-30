import React, { useRef } from 'react';
import './Login.css'
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {


    const emailRef = useRef('');
    const passwordRef = useRef('')
    const navigate = useNavigate();

    const navigateSighup = () => {
        navigate('/signup');
    }


    // sign in method 

    const [
        signInWithEmailAndPassword,
        user,
        error,
    ] = useSignInWithEmailAndPassword(auth);

if(user){
    navigate('/newhome')
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
                <Button className='bg-warning text-dark  fw-bold' variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p className='text-white mt-2' >New Here ? <span onClick={navigateSighup} className='text-warning signup '> Sign Up</span></p>
        </div>
    );
};

export default Login;