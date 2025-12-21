import React, { use, useState } from 'react';
import {  Link } from 'react-router'; // Added useNavigate
import { AuthContext } from '../context/AuthContext';

const SignIn = () => {
    const { signInUser } = use(AuthContext);
    const [error, setError] = useState('');
    

    const handleSignIn = (e) => {
        e.preventDefault();
        setError('');

        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password)

        // Use the function from Context
        signInUser(email, password)
            .then((userCredential) => {
                console.log("Logged In:", userCredential.user);
                e.target.reset(); // Clear the form
            })
            .catch((error) => {
                // Friendly error messages
                if (error.code === 'auth/invalid-credential') {
                    setError("Invalid email or password.");
                } else {
                    setError(error.message);
                }
            });
    };

    return (
        <div className='flex justify-center min-h-screen items-center bg-base-200'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
                <div className="card-body p-10">
                    <h1 className="text-3xl font-bold mb-5 text-center">Login Now</h1>

                    <form onSubmit={handleSignIn} className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" name="email" className="input" placeholder="Email" required />

                        <label className="label">Password</label>
                        <input type="password" name="password" className="input" placeholder="Password" required />

                        <div><a className="link link-hover text-sm">Forgot password?</a></div>
                        
                        {error && <p className='text-red-500 text-sm mt-2 font-medium'>{error}</p>}

                        <button type='submit' className="btn btn-neutral mt-4">Login</button>
                    </form>

                    <p className='mt-3 text-center'>
                        Don’t Have An Account?  
                        <Link className='text-secondary font-bold ml-1' to="/signup">SignUp!</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;