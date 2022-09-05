import React from 'react'
import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import './sign-in.styles.scss';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';



const SignIn = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = async e => {
        e.preventDefault();
        const { email, password } = values;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            setValues({ email: '', password: '' });
        } catch (error) {
            console.log(error);
        }
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value })
    }

    return (

        <div className="sign-in">
            <h1>I already have an account</h1>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit} id="form">
                <FormInput
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    label="Email"
                    required />
                <FormInput
                    name="password"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    label="Password"
                    required
                />
                <div className="buttons">
                    <CustomButton type="submit" form="form">Sign In</CustomButton>
                    <CustomButton type="button" onClick={signInWithGoogle}
                        isGoogleSignIn
                    >sign in with google</CustomButton>
                </div>
            </form>
        </div>
    )
}

export default SignIn;