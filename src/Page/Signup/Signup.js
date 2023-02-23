import { FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import app from '../../Firebase/Firebase.config';
import img from '../../image/login/register.jpg'
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import useTitle from '../../Hooks/UseTitle/UseTitle';

const auth = getAuth(app)

const Signup = () => {
    useTitle('Signup')

    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser } = useContext(AuthContext);
    const provider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider(); 
    const facebookProvider = new FacebookAuthProvider();

    const handleSignup = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.log(error));
    }

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user
                console.log(user);
            })
            .catch(error => console.log(error))
    }

    const handleGithubSignIn = () =>{
        signInWithPopup(auth, githubProvider)
        .then(result =>{
            const user = result.user
            console.log(user);
        })
        .catch(error => console.log(error))
    }

    const handleFacebookSignIn = () =>{
        signInWithPopup(auth, facebookProvider)
        .then(result =>{
            const user = result.user
            console.log(user);
        })
        .catch(error => console.log(error))
    }


    return (
        <div className='flex flex-col lg:flex-row items-center'>

            <img src={img} alt="" className='w-1/2 ' />

            <div className='mt-10 mb-10 w-full mx-auto'>
                <h2 className='text-4xl font-bold text-center hove hover:text-red-600'>SignUp</h2>
                <form onSubmit={handleSubmit(handleSignup)} className='grid gap-4 w-5/6 lg:w-5/6 mx-auto'>

                    <div className="form-control">
                        <label className="label"><span className="label-text font-bold">Name</span></label>
                        <input type="name" {...register("name",
                            { required: "Your Name is required" })}
                            placeholder="Your Name" className="input input-bordered" />

                        {errors.name && <p className='text-red-500 font-serif p-1' role="alert">{errors.name?.message}</p>}
                    </div>

                    <div className="form-control">
                        <label className="label"><span className="label-text font-bold">Email</span></label>
                        <input type="email" {...register("email",
                            { required: "Email Address is required" })}
                            placeholder="Your Email" className="input input-bordered" />

                        {errors.email && <p className='text-red-500 font-serif p-1' role="alert">{errors.email?.message}</p>}
                    </div>

                    <div className="form-control">
                        <label className="label"><span className="label-text font-bold">Password</span></label>
                        <input type="password" {...register("password",
                            {
                                required: "Password is required",
                                minLength: { value: 6, message: "Password must be six carecter or longer" },
                                pattern: { value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/, message: "Password must be strong" }
                            })}
                            placeholder="Your Password" className="input input-bordered" />

                        {errors.password && <p className='text-red-500 font-serif p-1' role="alert">{errors.password?.message}</p>}
                    </div>

                    <input className='btn btn-accent form-control mt-4' value="SignUp" type="submit" />
                </form>

                <p className='text-center mt-4'>Have an account? <Link className='text-secondary' to='/login'>Please Login</Link></p>
                <div className="divider w-1/2 mx-auto before:bg-secondary after:bg-primary">OR</div>
                <div className='flex justify-center gap-5 text-4xl text-teal-600'>
                    <button onClick={handleGoogleSignIn} className='hover:ease-in'><FaGoogle></FaGoogle> </button> <br />
                    <button onClick={handleGithubSignIn} className=''><FaGithub></FaGithub></button> <br />
                    <button onClick={handleFacebookSignIn} className=''><FaFacebook></FaFacebook></button>
                </div>
            </div>
        </div>
    );
};

export default Signup;