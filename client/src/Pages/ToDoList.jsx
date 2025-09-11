import React, { useState } from 'react'

const ToDoList = () => {
  const [todo,setTodo]=useState("");

  return (
    <div className='min-h-screen flex justify-center items-center'>
      <div className='border-4 flex flex-col p-4 ' >
        <div>
          <input value={todo} onChange={(e)=>(setTodo(e.target.value))} type="text" className=' border-2 rounded-sm px-4 py-2' placeholder='Enter your task' />
          <button onClick={()=>{alert(todo); setTodo("")}} className='border-2 ml-2 rounded-sm p-1 bg-orange-300 cursor-pointer hover:scale-105 active:scale-95' >Add</button>

          
        </div>
        <div>
          
        </div>
      </div>
    </div>
  )
}

export default ToDoList