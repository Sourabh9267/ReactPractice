import React from 'react'
import { NavLink,Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='h-24 w-full bg-zinc-400 flex text-lg font-bold gap-4 items-center justify-center font-[poppins]'>


    <NavLink to="/" className={(e)=>{
       return e.isActive ? "text-yellow-300 border-solid border-b-2 ":""
    }} > Home </NavLink>

    <NavLink to="/About" className={(e)=>{
       return e.isActive ? "text-yellow-300 border-solid border-b-2 ":""
    }} > About </NavLink>

    <NavLink to="/Contact" className={(e)=>{
       return e.isActive ? "text-yellow-300 border-solid border-b-2 ":""
    }} > Contact </NavLink>

    </div>
  )
}

export default Navbar