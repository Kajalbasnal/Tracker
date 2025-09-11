import React, { useState } from 'react'

const About = () => {
  const [light,setLight]=useState(true);
  return (

    <div className={`min-h-screen flex justify-center items-center ${light?"bg-white text-black":"bg-black text-white"}`} >
      <button className='border-2 p-5 cursor-pointer ' onClick={()=>setLight(!light)}>
        {light?"switch to dark mode":"switch to light mode"}
      </button>
    </div>
  )
}

export default About