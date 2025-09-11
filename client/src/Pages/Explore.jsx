import React, { useState } from 'react'

const Explore = () => {
    const [kajal,setKajal]=useState("dsa");
    //kajal=dsa
    //setKajal("dev")-->kajal=dev
  return (
    <div  >
        <h1>Kajal loves {kajal}</h1>
        <button onClick={()=>{setKajal("dev")}} className='border-2 cursor-pointer bg-green-300 active:scale-95' >Reality</button>
    </div>
  )
}

export default Explore