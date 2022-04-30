
import { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import './SignUp.css'
import GoogleLogin from '../GoogleLogin/GoogleLogin';



const SignUp = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        error,
      
    ] = useCreateUserWithEmailAndPassword(auth ,{sendEmailVerification:true});

 /// update profile 
 const [updateProfile, updating ,error2] = useUpdateProfile(auth);








    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('')

    const navigate = useNavigate();


    const navigateLogin = () => {
        navigate('/login');
    }

    if (user) {
       console.log(user)                           //
    }

    const formHandleSignup = async event => {
        event.preventDefault();

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
     

      await   createUserWithEmailAndPassword(email, password, name);
      await updateProfile({ displayName:name})

      
      navigate('/newhome')
    }


    return (
        <div className='signup-container  mx-auto w-50  '>
            <h1 className='text-center text-warning mt-4'> Plaese Sign Up</h1>

            <Form onSubmit={formHandleSignup} className='  text-white' >

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control ref={nameRef} type="text" placeholder="Enter email" id="" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" name="email" placeholder="Enter email" id="" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" name="password " placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" className='bg-warning w-50 d-block mx-auto  text-dark fw-bold' type="submit">
                    Sign  Up
                </Button>
            </Form>


            <p className='text-white mt-3  text-center' >Have an Acount ? <span onClick={navigateLogin} className='text-warning login '> Login Here  </span></p>

          <GoogleLogin></GoogleLogin>

        </div>

    );
};

export default SignUp;