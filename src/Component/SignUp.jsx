import React, { use, useState } from 'react';
import { auth } from '../firebase/fireBase.init';
import { Link } from 'react-router'; 
import { AuthContext } from '../context/AuthContext';

const SignUp = () => {
    const [error, setError] = useState('');
    
    // Using the new 'use' hook (React 19) or use useContext(AuthContext)
    const { createUser } = use(AuthContext);

    const handleSignUp = (e) => {
        e.preventDefault();
        setError('');

        // FIX: You must pass e.currentTarget to the FormData constructor
        const formData = new FormData(e.currentTarget);
        const { email, password, name, photoURL } = Object.fromEntries(formData.entries());

        console.log("Form Data:", { email, password, name, photoURL });

        // 1. Create user in Firebase
        createUser(email, password)
          .then(result => {
            console.log("Firebase User:", result.user);
            
            // 2. Prepare user object for your database
            const newUser = { name, email, photoURL, uid: result.user.uid };

            // 3. Save to your local backend
            fetch(`http://localhost:3000/users`, {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(newUser)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId) {
                    alert("Account created and saved to database!");
                }
            });
          })
          .catch(err => {
            console.error(err);
            setError(err.message);
          });
    };

    return (
        <div className='flex justify-center min-h-screen items-center bg-base-200'>
            <div className="card bg-base-100 w-full max-w-[500px] shrink-0 shadow-2xl mx-auto">
                <div className="card-body">
                    <h1 className="text-3xl font-bold text-center">Register your account</h1>

                    <form onSubmit={handleSignUp} className="fieldset">
                        <label className="label">Your Name</label>
                        <input type="text" name="name" className="input w-full" placeholder="Full Name" required />

                        <label className="label">Photo URL</label>
                        <input type="text" name="photoURL" className="input w-full" placeholder="Image link" required />

                        <label className="label">Email</label>
                        <input type="email" name="email" className="input w-full" placeholder="Email" required />

                        <label className="label">Password</label>
                        <input type="password" name="password" className="input w-full" placeholder="Password" required />

                        {error && <p className='text-red-500 text-sm mt-2 font-medium'>{error}</p>}

                        <button type="submit" className="btn btn-neutral mt-4">Register</button>
                    </form>

                    <p className="text-center mt-2">
                        Already have an account?
                        <Link className="text-secondary font-bold ml-1" to="/signin"> SignIn!</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;