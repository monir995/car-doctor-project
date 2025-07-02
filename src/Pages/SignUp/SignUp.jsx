// import { Link } from 'react-router-dom';
// import img from '../../assets/images/login/login.svg';
// import { useContext } from 'react';
// import { AuthContext } from '../../Providers/AuthProvider';

// const SignUp = () => {
//     const { createUser } = useContext(AuthContext);

//     const handleSignUp = event => {
//         event.preventDefault();
//         const form = event.target;
//         const name = form.name.value;
//         const email = form.email.value;
//         const password = form.password.value;
//         console.log(name, email, password);

//         createUser(email, password)
//             .then(result => {
//                 const user = result.user;
//                 console.log('User created:', user);
//                 // TODO: Navigate or show success message
//             })
//             .catch(error => {
//                 console.error('Error creating user:', error.message);
//             });
//     };

//     return (
//         <div className="hero bg-base-200 min-h-screen">
//             <div className="hero-content flex-col lg:flex-row">
//                 {/* Left Side Image */}
//                 <div className="text-center lg:text-left w-full lg:w-1/2">
//                     <img src={img} alt="Sign Up Illustration" className="mx-auto" />
//                 </div>

//                 {/* Right Side Form */}
//                 <div className="card ml-0 lg:ml-10 bg-base-100 w-full max-w-sm shadow-2xl">
//                     <div className="card-body">
//                         <h1 className="text-4xl font-bold text-center mb-5">Register Now!</h1>
//                         <form onSubmit={handleSignUp}>
//                             <div className="form-control mb-3">
//                                 <label className="label">Name</label>
//                                 <input
//                                     type="text"
//                                     name="name"
//                                     required
//                                     className="input input-bordered"
//                                     placeholder="Enter your name"
//                                 />
//                             </div>
//                             <div className="form-control mb-3">
//                                 <label className="label">Email</label>
//                                 <input
//                                     type="email"
//                                     name="email"
//                                     required
//                                     className="input input-bordered"
//                                     placeholder="Enter your email"
//                                 />
//                             </div>
//                             <div className="form-control mb-3">
//                                 <label className="label">Password</label>
//                                 <input
//                                     type="password"
//                                     name="password"
//                                     required
//                                     className="input input-bordered"
//                                     placeholder="Enter your password"
//                                 />
//                             </div>
//                             <div className="form-control mb-4">
//                                 <button type="submit" className="btn btn-primary w-full">
//                                     Register
//                                 </button>
//                             </div>
//                         </form>
//                         <p className="text-center text-sm font-semibold">
//                             Already have an account?{' '}
//                             <Link to="/login" className="text-orange-600 hover:underline">
//                                 Login
//                             </Link>
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SignUp;
