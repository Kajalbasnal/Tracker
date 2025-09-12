import React, { useState } from 'react'

const ContactUs = () => {
    const [counter,setCounter]=useState(0);
  return (
    <div className='min-h-screen flex flex-col justify-center items-center text-5xl' >
        <h1 className='text-4xl' >counter</h1>
        
        <p className='text-5xl text-red-500' >{counter}</p>
        <div className='text-4xl flex gap-3  ' >
            <button onClick={()=>setCounter((prev)=>prev+1)} className='cursor-pointer ' >+</button>
            <button onClick={()=>setCounter(counter-1)} className='cursor-pointer ' >-</button>
        </div>

    </div>
  )
}

export default ContactUs