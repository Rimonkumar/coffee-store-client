// import React, { use, useState } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router';
// import { AuthContext } from '../provider/AuthProvider';

// const Login = () => {
//     const { signIn, setUser } = use(AuthContext); 
//     const location = useLocation()
//     const navigate = useNavigate();
//     const [error, setError] = useState('');

//     const handleLogin = (e) => {
//         e.preventDefault();
//         const form = e.target;
//         const email = form.email.value;
//         const password = form.password.value;

//         signIn(email, password)
//             .then(result => {
//                 const loggedUser = result.user;
//                 console.log("User login:", loggedUser);
//                 setUser(loggedUser); // ✅ Update context user
//                 navigate(`${location.state ? location.state : "/"}`);
//             })
//             .catch(error => {
//                 // console.error("Error:", err.message);
//                 setError(error.message);
//             });
//     };

//     return (
//         <div className='flex justify-center min-h-screen items-center'>
//             <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
//                 <div className="card-body p-10">
//                     <h1 className="text-3xl font-bold mb-5">Login Your Account</h1>

//                     {error && <p className='text-red-500 mb-3'>{error}</p>}

//                     <form onSubmit={handleLogin} className="fieldset">
//                         <label className="label">Email</label>
//                         <input type="email" name="email" className="input" placeholder="Email" required autoComplete="email" />

//                         <label className="label">Password</label>
//                         <input type="password" name="password" className="input" placeholder="Password" required autoComplete="current-password" />

//                         <div><a className="link link-hover">Forgot password?</a></div>
//                         {error && <p className='text-red-400'>{error} </p>}

//                         <button type='submit' className="btn btn-neutral mt-4">Login</button>
//                     </form>

//                     <p className='mt-3'>
//                         Don’t Have An Account?  
//                         <Link className='text-red-400 ml-1' to="/auth/register">Si!</Link>
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;
