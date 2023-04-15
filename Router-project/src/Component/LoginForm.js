import React, { useState } from 'react'
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const LoginForm = ({ setIsLoggedIn }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [showPass, setshowPass] = useState(false);
    function changeHandler(event) {
        setFormData((prev) => (
            {
                ...prev,
                [event.target.name]: event.target.value
            }
        ))
    }
    function submitHandler(event) {
        event.preventDefault()
        setIsLoggedIn(true);
        toast.success("logged In")
        navigate("/Dashboard");

    }
    console.log(formData)

    return (
        <div>
            <form onSubmit={submitHandler} className="flex flex-col gap-y-4 w-full mt-6">
                <label className='w-full' >
                    <p className='text-[0.875rem] font-bold text-white  mb-1 leading-[1.375rem]'>
                        Email Address<sup className='text-black' >*</sup>
                    </p>
                    <input type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={changeHandler}
                        placeholder="abc@gmail.com"
                        className='bg-white focus:outline-pink-800 rounded-[0.5rem]  text-gray-600  w-full p-[12px]'
                    />


                </label>

                <label className='w-full relative'>
                    <p className='text-[0.875rem] text-white font-bold  mb-1 leading-[1.375rem]'>
                        Password<sup className='text-black'>*</sup>
                    </p>
                    <input type={showPass ? ("text") : ("password")}
                        required
                        value={formData.password}
                        onChange={changeHandler}
                        placeholder="****"
                        name="password"
                        className='bg-white focus:outline-pink-800 rounded-[0.5rem]  text-gray-600  w-full p-[12px]'

                    />
                    <span className='absolute right-3 top-[39px] cursor-pointer' onClick={() => setshowPass((prev) => !prev)}>
                        {showPass ? (<AiFillEyeInvisible fontSize={24} fill="#AFB2F" />) : (<AiFillEye fontSize={24} fill="#AFB2F" />)}
                    </span>
                    <Link to="#">
                        <p className='text-xs mt-1 text-white max-w-max ml-auto'>  Forget Password</p>


                    </Link>


                </label>
                <button className='bg-yellow-500 rounded-[8px] font-medium mt-6 text-white px-[12px] py-[8px]'>Sign In</button>

            </form>

        </div >
    )
}

export default LoginForm
