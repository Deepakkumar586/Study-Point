import React from "react";
import frameImage from "../assets/frame.png";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import { FcGoogle } from 'react-icons/fc'

const Template = ({ title, desc1, desc2, image, formtype, setIsLoggedIn }) => {
    return (
        <div className="flex w-11/12 justify-between max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0">
            <div className="w-11/12 max-w-[450px]" >
                <h1 className="font-semibold  text-white text-[1.475rem]">{title}</h1>
                <p className="text-[1.125rem] ">
                    <span className="text-gray-400">{desc1}</span>
                    <br />
                    <span className="text-green-300 italic">{desc2}</span>
                </p>
                {formtype === "signup" ? <SignupForm setIsLoggedIn={setIsLoggedIn} /> : <LoginForm setIsLoggedIn={setIsLoggedIn} />}

                <div className="flex w-full items-center my-4 gap-x-2">
                    <div className="h-[1px] bg-white w-full"></div>
                    <p className="text-white-700 font-medium leading[1.375rem">Or</p>
                    <div className="h-[1px] bg-white w-full"></div>
                </div>
                <button className="w-full flex justify-center items-center rounded-[8px] font-medium text-black-700 border-[2px] border-rose-700 px-[12px] bg-white py-[9px] gap-x-2 gap-y-2 ">
                    <FcGoogle />
                    <p>Sign in with Google</p>
                </button>
            </div>

            <div className="relative w-11/12 max-w-[450px]">
                {/* <img
                    // src={frameImage}
                    // alt="Pattern"
                    width={558}
                    height={504}
                    loading="lazy"

                /> */}
                <img
                    src={image}
                    alt="Students"
                    width={558}
                    height={490}
                    loading="lazy"
                    className="absolute top-4 right-4 rounded-[14px]"

                />
            </div>
        </div>
    );
};

export default Template;
