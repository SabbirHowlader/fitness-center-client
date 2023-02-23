import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import bg from '../../../image/contact-bg.jpg'

const Contract = () => {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");
    return (
        <div className='p-10' style={{backgroundImage: `url(${bg})`}}>
            <h1 className='text-5xl font-bold text-center p-10'>Contact us</h1>
            <form className='grid gap-4 w-full lg:w-1/2 mx-auto my-10 ' onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>

                <input {...register("Name")} placeholder="Name" className="input input-bordered" />
                <input {...register("Email")} placeholder="Email" className="input input-bordered" />
                <select className="input input-bordered" {...register("category", { required: true })}>
                    <option value="">I Am Interested In</option>
                    <option value="A">Strongman</option>
                    <option value="B">Yoga</option>
                    <option value="C">Cardio Burn</option>
                    <option value="D">Indoor Cycle</option>
                    <option value="E">Crossfit</option>
                </select>
                <textarea {...register("Message")} placeholder="Your Message" className="input input-bordered" />
                <p>{data}</p>
                <input type="submit" className="btn btn-accent" />
            </form>
        </div>
    );
};

export default Contract;