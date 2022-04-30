import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './SignUp.css'



const SignUp = () => {


    const emailRef = useRef('');
    const passwordRef = useRef('')


    const navigate = useNavigate()

    const navigateLogin = () => {
        navigate('/login');
    }

    const formHandleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password)
    }





    return (
        <div className='signup-container  mx-auto w-50  '>
            <h1 className='text-center text-warning mt-4'> Plaese Sign Up</h1>

            <Form onSubmit={formHandleSubmit} className='  text-white' >

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control ref={emailRef} type="text" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password " placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            <p className='text-white mt-2' >Have an Acount ? <span onClick={navigateLogin} className='text-warning login '> Login Here  </span></p>
        </div>
    );
};

export default SignUp;