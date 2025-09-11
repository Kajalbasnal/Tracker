import React from 'react'
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
        <div className='flex flex-row justify-evenly border-2 bg-gradient-to-l from-orange-300 to-red-400  p-4'  >
            <div className='flex justify-between gap-12 text-white text-2xl' >
            <NavLink to="/home" >Home</NavLink>
            <NavLink to="/about" >About</NavLink>
            <NavLink to="/explore" >Explore</NavLink>
            <NavLink to="/contact-us" >Contact-US</NavLink>
            </div>
        </div>
    </div>
  )
}

export default Navbar