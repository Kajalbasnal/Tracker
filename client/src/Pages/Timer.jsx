import React, { useEffect, useState,useRef } from 'react'
const POMODORO_DURATION=25*60;
const BREAK_DURATION=5;
const Timer = () => {
  const [mode,setMode]=useState("work");
  const [timeLeft,setTimeLeft]=useState(POMODORO_DURATION);
  const [isRunning,setIsRunning]=useState(false);
  const audioRef=useRef(null);
  useEffect(()=>{
    if(!isRunning) return;
    let id=setInterval(()=>{
      setTimeLeft(prev=>{
        if(prev<=1){
          const newMode=mode==="work"?("break"):("work");
          setMode(newMode);
          if(audioRef.current){
            audioRef.current.currentTime=0;
            audioRef.current.play();
            setTimeout(()=>{
              audioRef.current.pause();
              audioRef.current.currentTime=0;
            },3000)
            
          }
          return newMode==="work"?POMODORO_DURATION:BREAK_DURATION;
        }
        return prev-1
      })
    },1000)
    return ()=>{clearInterval(id)}
  },[isRunning,mode])

  useEffect(()=>{
    setIsRunning(false);
    if(mode==="work"){
      setTimeLeft(POMODORO_DURATION);
      return;
    }
    setTimeLeft(BREAK_DURATION)

  },[mode])


  const formatTime=(seconds)=>{
    const m=Math.floor(seconds/60).toString().padStart(2,'0');
    const s=(seconds-m*60).toString().padStart(2,'0');//seconds%60
    return `${m}:${s}`
  }
  return (
    <div className='flex flex-col ' >
      <h1 className='text-center mt-4 text-2xl font-bold bg-gradient-to-br from-pink-600 to-orange-200 bg-clip-text text-transparent' >POMODORO TIMER</h1>
      <h3 className='text-center ' >MODE :<span className='text-4xl font-semibold' >{mode}</span></h3>
      <div className='flex  flex-col justify-center items-center w-full mt-[5%] ' >
          <div className='flex flex-col border-2 justify-center p-5' >

            <div className='text-6xl font-bold mb-2' >{formatTime(timeLeft)}</div>
            <button onClick={()=>setIsRunning(prev=>!prev)} className='mt-4 px-4 border-2 rounded-lg hover:scale-105 active:scale-95 cursor-pointer' >{isRunning?"pause":"start"}</button>
          </div>
          <button onClick={()=>{setMode(prev=>prev==="work"?("break"):("work"))}} className='mt-4 border-2 px-2 rounded-lg cursor-pointer hover:scale-105 active:scale-95' ><span className='font-bold text-pink-950' >Switch to</span> <span className='text-md' >{mode==="work"?"break":"work"}</span></button>
      </div>
      <audio
        ref={audioRef}
        src="https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg"
        preload="auto"
      />

    </div>
  )
}

export default Timer