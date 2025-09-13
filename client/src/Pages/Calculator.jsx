import React from 'react'

const Calculator = () => {
  return (
    <div>Calculator</div>
  )
}

export default Calculator












// import React, { useEffect, useState } from 'react'

// const Calculator = () => {
//   const [timer,setTimer]=useState(0);
//   const [isRunning,setIsRunning]=useState(false);
 
//   useEffect(()=>{
//     let intervalId;
//     if(isRunning){
//           // This effect runs whenever `isRunning` changes.
//       intervalId=setInterval(()=>{setTimer(prev=>prev+1)},1000);   
//     }
//     return ()=>clearInterval(intervalId)
    
//  },[isRunning])
//   const handleTimer=()=>{
//     setIsRunning(!isRunning)
//   }

//   return (
//     <div className= ' min-h-screen flex flex-col justify-center items-center' >
//       <div className='font-bold text-7xl' >{timer}</div>
//       <button onClick={handleTimer} className={` px-4 py-2 border-2 m-2 cursor-pointer active:scale-90 rounded-xl ${isRunning?"bg-red-500 text-white":"bg-green-500 text-white"} `}>{isRunning?<div>Pause</div>:<div>Start</div>}</button>
//     </div>
    
//   )
// }

// export default Calculator
