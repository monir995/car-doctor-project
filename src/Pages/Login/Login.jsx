// import { Link } from 'react-router-dom';
// import img from '../../assets/images/login/login.svg';
// import { useContext } from 'react';
// import { AuthContext } from '../../Providers/AuthProvider';

// const Login = () => {
//     const { signIn } = useContext(AuthContext);

//     const handleLogin = event => {
//         event.preventDefault();
//         const form = event.target;
//         const email = form.email.value;
//         const password = form.password.value;
//         console.log(email, password);

//         signIn(email, password)
//             .then(result => {
//                 const user = result.user;
//                 console.log("Logged in user:", user);
//                 // TODO: redirect or toast
//             })
//             .catch(error => {
//                 console.error("Login error:", error.message);
//             });
//     };

//     return (
//         <div className="hero bg-base-200 min-h-screen">
//             <div className="hero-content flex-col lg:flex-row">
//                 {/* Left Image */}
//                 <div className="text-center lg:text-left w-full lg:w-1/2">
//                     <img src={img} alt="Login Visual" className="mx-auto" />
//                 </div>

//                 {/* Right Login Form */}
//                 <div className="card ml-0 lg:ml-10 bg-base-100 w-full max-w-sm shadow-2xl">
//                     <div className="card-body">
//                         <h1 className="text-4xl font-bold text-center mb-5">Login Now!</h1>
//                         <form onSubmit={handleLogin}>
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
//                             <div className="text-right mb-4">
//                                 <a className="link link-hover text-sm">Forgot password?</a>
//                             </div>
//                             <button type="submit" className="btn btn-neutral w-full">Login</button>
//                         </form>
//                         <p className="text-center text-sm mt-4 font-semibold">
//                             New to Car Doctors?{' '}
//                             <Link to="/signup" className="text-orange-600 hover:underline">
//                                 Sign Up
//                             </Link>
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;
