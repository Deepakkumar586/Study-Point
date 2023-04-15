import React from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useState } from "react";

import { toast } from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";

const SignupForm = ({ setIsLoggedIn }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [showPass, setShowPass] = useState(false);
    const [showConfirmPass, setshowConfirmPass] = useState(false);
    const [accountType, setAccountType] = useState("student");
    function changeHandler(event) {
        setFormData((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    }
    function submitHandler(event) {

        event.preventDefault();
        if (formData.password != formData.confirmPassword) {
            toast.error("Password are not matched!!");
            return;
        }
        setIsLoggedIn(true);
        toast.success("Your Account is created");
        const accountData = {
            ...formData,
        };
        const finalData = {
            ...accountData,
            accountType
        }
        console.log("printing final account data");
        console.log(finalData)

        navigate("./Dashboard");
    }


    return (
        <div>
            {/* student-instructur-tab */}
            <div className="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max">
                <button
                    className={`${accountType === "student"
                        ? "bg-yellow-400 text-white-400"
                        : "bg-transparent text-gray-400"
                        } py-2 px-5 rounded-full transition-all duration-200`}
                    onClick={() => setAccountType("student")}
                >
                    Student
                </button>

                <button
                    className={`${accountType === "instructur"
                        ? "bg-yellow-400 text-white-400"
                        : "bg-transparent text-gray-400"
                        } py-2 px-5 rounded-full transition-all duration-200`}
                    onClick={() => setAccountType("instructur")}
                >
                    Instructur
                </button>
            </div>
            <form onSubmit={submitHandler}>
                {/* firstname-LastName */}
                <div className="flex gap-x-4 mt-[20px]">
                    <label className="w-full mt-[20px]">
                        <p className="text-[0.875rem] font-bold text-white  mb-1 leading-[1.375rem]">
                            FirstName<sup className="text-black">*</sup>
                        </p>
                        <input
                            type="text"
                            required
                            onChange={changeHandler}
                            placeholder="Deepak "
                            value={formData.firstName}
                            name="firstName"
                            className="bg-white focus:outline-pink-800 rounded-[0.5rem]  text-gray-600  w-full p-[12px]"
                        />
                    </label>

                    <label className="w-full mt-[20px]">
                        <p className="text-[0.875rem] font-bold text-white  mb-1 leading-[1.375rem]">
                            LastName<sup className="text-black">*</sup>
                        </p>
                        <input
                            type="text"
                            required
                            onChange={changeHandler}
                            placeholder="kumar "
                            value={formData.lastName}
                            name="lastName"
                            className="bg-white focus:outline-pink-800 rounded-[0.5rem]  text-gray-600  w-full p-[12px]"
                        />
                    </label>
                </div>
                {/* Email */}
                <div className="mt-[20px]">
                    <label className="w-full mt-[10px]">
                        <p className="text-[0.875rem] font-bold text-white  mb-1 leading-[1.375rem]">
                            Email<sup className="text-black">*</sup>
                        </p>
                        <input
                            type="email"
                            required
                            onChange={changeHandler}
                            placeholder="xyz@gmail.com "
                            value={formData.email}
                            name="email"
                            className="bg-white focus:outline-pink-800 rounded-[0.5rem]  text-gray-600  w-full p-[12px]"
                        />
                    </label>
                </div>

                {/* Password-confirmPassword */}
                <div className="w-full flex gap-x-4 mt-[20px]">
                    <label className=" w-full relative">
                        <p className="text-[0.875rem] font-bold text-white  mb-1 leading-[1.375rem]">
                            Create Password<sup className="text-black">*</sup>
                        </p>
                        <input
                            type={showPass ? ("text") : ("password")}
                            required
                            onChange={changeHandler}
                            placeholder="**** "
                            value={formData.password}
                            name="password"
                            className="bg-white focus:outline-pink-800 rounded-[0.5rem]  text-gray-600  w-full p-[12px]"
                        />
                        <span
                            className="absolute right-3 top-[39px] cursor-pointer"
                            onClick={() => setShowPass((prev) => !prev)}
                        >
                            {showPass ? (
                                <AiFillEyeInvisible fontSize={24} fill="#AFB2F" />
                            ) : (
                                <AiFillEye fontSize={24} fill="#AFB2F" />
                            )}
                        </span>
                    </label>

                    <label className="w-full relative ">
                        <p className="text-[0.875rem] font-bold text-white  mb-1 leading-[1.375rem]">
                            Confirm Password<sup className="text-black">*</sup>
                        </p>
                        <input
                            type={showConfirmPass ? ("text") : ("confirmpassword")}
                            required
                            onChange={changeHandler}
                            placeholder="**** "
                            value={formData.confirmPassword}
                            name="confirmPassword"
                            className="bg-white focus:outline-pink-800 rounded-[0.5rem]  text-gray-600  w-full p-[12px]"
                        />
                        <span
                            className="absolute right-3 top-[38px] cursor-pointer"
                            onClick={() => setshowConfirmPass((prev) => !prev)}
                        >
                            {showConfirmPass ? (
                                <AiFillEyeInvisible fontSize={24} fill="#AFB2F" />
                            ) : (
                                <AiFillEye fontSize={24} fill="#AFB2F" />
                            )}
                        </span>
                    </label>
                </div>
                <button className="bg-yellow-400 rounded-[8px] font-medium mt-6 text-white px-[12px] w-full py-[8px]">
                    Create Account
                </button>
            </form>
        </div>
    );
};

export default SignupForm;
