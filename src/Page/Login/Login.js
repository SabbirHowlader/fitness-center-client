import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/UseTitle/UseTitle';
import img from '../../image/login/login.jpg'

const Login = () => {
    useTitle('Login')

    const { register, formState: { errors }, handleSubmit } = useForm();
    const {signIn} = useContext(AuthContext);
    const [signInError, setSignInError] = useState('');

    const handleLogin = data =>{
        console.log(data)
        setSignInError('');
        signIn(data.email, data.password)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error => {
            console.log(error.message)
            setSignInError(error.message);
        })
    }

    return (
        <div className='flex flex-col lg:flex-row items-center'>
            
            <img src={img} alt="" className='w-1/2 ' />
           
            <div className='mt-10 mb-10 w-full mx-auto'>
                <h2 className='text-4xl font-bold text-center hove hover:text-red-600'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)} className='grid gap-4 w-5/6 lg:w-5/6 mx-auto'>

                    <div className="form-control">
                        <label className="label"><span className="label-text font-bold">Email</span></label>
                        <input type="email" {...register("email",
                        {required:"Email Address is required" })}
                        placeholder="Your Email" className="input input-bordered"/>

                        {errors.email && <p className='text-red-500 font-serif p-1' role="alert">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control">
                        <label className="label"><span className="label-text font-bold">Password</span></label>
                        <input type="password" {...register("password",
                        {required:"Password is required",
                        minLength: {value: 6, message: "Password must be six carecter or longer"}
                     })} 
                        placeholder="Your Password" className="input input-bordered"/>

                        {errors.password && <p className='text-red-500 font-serif p-1' role="alert">{errors.password?.message}</p>}
                    </div>

                    <input className='btn btn-accent form-control mt-4' value="Login" type="submit" />
                    <div>
                        {signInError && <p className='text-red-500'>{signInError}</p>}
                    </div>
                </form>

                <p className='text-center mt-4'>New to Fitness Center? <Link className='text-secondary' to='/signup'>Create Account!</Link></p>
                <div className="divider w-1/2 mx-auto before:bg-secondary after:bg-primary">OR</div>
                <button className='btn btn-success form-control w-5/6 mx-auto'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;