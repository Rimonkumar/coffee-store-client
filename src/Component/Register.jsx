// import React, { use } from 'react';
// import { Link, useNavigate } from 'react-router';
// import { AuthContext } from '../provider/AuthProvider';

// const Register = () => {
//     const { createUser, setUser , updateUser } = use(AuthContext);
//     const navigate = useNavigate();

//    const handleRegister = (e) => {
//     e.preventDefault();

//     const form = e.target;
//     const name = form.name.value;
//     const photoURL = form.photoURL.value;
//     const email = form.email.value;
//     const password = form.password.value;

//     createUser(email, password)
//         .then(result => {
//             const loggedUser = result.user;
//             // console.log("User created:", loggedUser);

//             // update profile
//             updateUser({ displayName: name, photoURL: photoURL })
//                 .then(() => {
//                     setUser({
//                         ...loggedUser,
//                         displayName: name,
//                         photoURL: photoURL
//                     });
//                     navigate('/auth/login'); // navigate after register
//                 })
//                 .catch(error => {
//                     console.log("Profile update error:", error.message);
//                     setUser(loggedUser);
//                 });
//         })
//         .catch(error => {
//             console.log("Register error:", error.message);
//         });
// };


//     return (
//         <div className="card bg-base-100 w-full max-w-[500px] shrink-0 shadow-2xl mx-auto">
//             <div className="card-body">
//                 <h1 className="text-3xl font-bold">Register your account</h1>

//                 <form onSubmit={handleRegister} className="fieldset">
//                     <label className="label">Your Name</label>
//                     <input type="text" name="name" className="input" required />

//                     <label className="label">Photo URL</label>
//                     <input type="text" name="photoURL" className="input" required />

//                     <label className="label">Email</label>
//                     <input type="email" name="email" className="input" required />

//                     <label className="label">Password</label>
//                     <input type="password" name="password" className="input" required />

//                     <button type="submit" className="btn btn-neutral mt-4">Register</button>
//                 </form>

//                 <p>
//                     Already have an account?
//                     <Link className="text-red-400" to="/auth/login"> Login!</Link>
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default Register;
