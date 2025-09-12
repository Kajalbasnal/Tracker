import React, { useState } from "react";

const ToDoList = () => {
  const [todo, setTodo] = useState(""); //[]
  const [desc, setDesc] = useState("");
  const [todos, setTodos] = useState([]);
  const handleAdd = () => {
    if(todo.trim()==="" && desc.trim()==="") {
      alert("input is empty");
      return;

      }
    setTodos((prevTodo) => [
      ...prevTodo,
      { title: todo, desc: desc, completed: false },
    ]);
    setTodo("");
    setDesc("");
  };
  const handleToggle = (idx) => {
    setTodos((todos) =>
      todos.map((todo, i) =>
        i === idx ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const handleDelete=(idx)=>{
    setTodos((todos)=>
    todos.filter((t,i)=>
      i!==idx
    ))
  }
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="border-4 flex flex-col p-4 ">
        <div className="flex flex-col">
          <input
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            type="text"
            className=" border-2 rounded-sm px-4 py-2"
            placeholder="Enter your task"
          />
          <input
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            type="text"
            className=" border-2 rounded-sm px-2 py-1 m-2"
            placeholder="Enter your desc"
          />
        </div>
        <button
          onClick={handleAdd}
          className="border-2 ml-2 rounded-sm p-1 bg-orange-300 cursor-pointer hover:scale-105 active:scale-95"
        >
          Add
        </button>

        <div>
          {todos.map((t, idx) => (
            <div key={idx} className="mb-2">
              <div className="flex gap-2 relative">
                <p className="cursor-pointer" onClick={() => handleToggle(idx)}>
                  {!t.completed ? <div>⭕</div> : <div>🔘</div>}
                </p>
                <div
                  className={`flex gap-2 ${t.completed ? "line-through" : ""} `}
                >
                  <strong className="">{t.title}</strong>
                  <p>{t.desc}</p>
                  
                </div>
                <div onClick={()=>handleDelete(idx)} className="right-2 absolute cursor-pointer active:scale-90" >🗑️</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
