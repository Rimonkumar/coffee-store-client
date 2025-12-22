import React, { use,  useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';

const SignIn = () => {
    const { signInUser } = use(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        setError(''); // clear previous error

        signInUser(email, password)
            .then(result => {
                console.log("Logged In:", result.user);
                alert('login successfuly');
                navigate('/');
            })
            .catch(err => {
                console.error(err);
                setError(err.message);
            });
    };

    return (
        <div className='flex justify-center min-h-screen items-center bg-base-200'>
            <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
                <div className="card-body p-10">
                    <h1 className="text-3xl font-bold mb-5 text-center">
                        Login Now
                    </h1>

                    <form onSubmit={handleSignIn}>
                        <label className="label">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="input input-bordered"
                            placeholder="Email"
                            required
                        />

                        <label className="label mt-3">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="input input-bordered"
                            placeholder="Password"
                            required
                        />

                        <div className="mt-2">
                            <a className="link link-hover text-sm">
                                Forgot password?
                            </a>
                        </div>

                        {error && (
                            <p className='text-red-500 text-sm mt-2 font-medium'>
                                {error}
                            </p>
                        )}

                        <button type='submit' className="btn btn-neutral mt-4 w-full">
                            Login
                        </button>
                    </form>

                    <p className='mt-3 text-center'>
                        Don’t Have An Account?
                        <Link className='text-secondary font-bold ml-1' to="/signup">
                            SignUp!
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
