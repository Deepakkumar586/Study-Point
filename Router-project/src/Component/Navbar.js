import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/Logo.svg"
import { toast } from 'react-hot-toast'



const Navbar = (props) => {
    const isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

    return (
        <div className='flex  justify-evenly bg-rose-500 items-center w-11/12 max-width[1160px] py-4 mx-auto text-white'>
            <Link to="/">  <img src={logo} alt="logo" width={160} height={32} loading="lazy"></img></Link>
            <nav>
                <ul className='flex gap-6 text-gray '>
                    <li>
                        <Link to="/" > <span className='hover:text-gray-700'>Home</span></Link>
                    </li>
                    <li>
                        <Link to="/"><span className='hover:text-gray-700'>About</span></Link>
                    </li>
                    <li>
                        <Link to="/"><span className='hover:text-gray-700'>Contact</span></Link>

                    </li>
                </ul>
            </nav>
            {/* Login-Signin-Logout-dashBoard */}
            <div className='flex  gap-4 items-center'>
                {!isLoggedIn &&
                    <Link to="/login"> <button className='hover:text-white-700 font-bold hover:bg-yellow-500 text-white bg-rose-500 px-[9px] py-[12px] border rounded-[8px] border-white-700 '>Login</button> </Link>
                }
                {!isLoggedIn &&
                    <Link to="/signup"> <button onClick={() => {
                        setIsLoggedIn(false);
                        toast.success("Sign in")

                    }} className='hover:text-white-700 hover:bg-yellow-500 font-bold text-white bg-rose-500 px-[8px] py-[12px] border rounded-[8px] border-white-700 '
                    >Sign Up</button> </Link>
                }
                {isLoggedIn &&
                    <Link to="/"> <button onClick={() => {
                        setIsLoggedIn(false);
                        toast.success("logged out")
                    }} className='hover:text-red-700  hover:bg-yellow-500 font-bold text-white  px-[8px] py-[12px] border rounded-[8px] border-white-700 '
                    >Logout</button> </Link>
                }
                {isLoggedIn &&
                    <Link to="/Dashboard"> <button className='hover:text-gray-700 hover-bg-yellow-500 font-bold text-white bg-rose-500 px-[8px] py-[12px] border rounded-[8px] border-white-700 '>Dashboard</button> </Link>
                }
            </div>


        </div>
    )
}

export default Navbar
