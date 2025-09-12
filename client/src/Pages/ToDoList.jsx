import React, { useEffect, useState } from "react";

const ToDoList = () => {
  const [todo, setTodo] = useState("");
  const [desc, setDesc] = useState("");
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos"))||[]);

  const handleAdd = () => {
    if (todo.trim() === "" && desc.trim() === "") {
      alert("⚠️ Please enter a task or description!");
      return;
    }
    setTodos((prevTodo) => [
      ...prevTodo,
      { title: todo, desc: desc, completed: false },
    ]);
    setTodo("");
    setDesc("");
  };
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  const handleToggle = (idx) => {
    setTodos((todos) =>
      todos.map((todo, i) =>
        i === idx ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (idx) => {
    setTodos((todos) => todos.filter((_, i) => i !== idx));
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-6 w-full max-w-lg">
        {/* Header */}
        <h1 className="text-3xl font-bold text-center mb-6 text-purple-700">
          ✨ To-Do List ✨
        </h1>

        {/* Input Section */}
        <div className="flex flex-col gap-3 mb-4">
          <input
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            type="text"
            className="border-2 border-purple-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter your task..."
          />
          <input
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            type="text"
            className="border-2 border-purple-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Enter description..."
          />
          <button
            onClick={handleAdd}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg py-2 font-semibold shadow-md hover:scale-105 active:scale-95 transition-all"
          >
            ➕ Add Task
          </button>
        </div>

        {/* Todo List */}
        <div className="space-y-3">
          {todos.map((t, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between bg-purple-50 border border-purple-200 rounded-lg px-4 py-3 shadow-sm hover:shadow-md transition-all"
            >
              <div
                className="flex items-center gap-3 cursor-pointer"
                onClick={() => handleToggle(idx)}
              >
                {!t.completed ? (
                  <span className="text-gray-400 text-xl">⭕</span>
                ) : (
                  <span className="text-green-500 text-xl">✅</span>
                )}
                <div
                  className={`flex flex-col ${
                    t.completed ? "line-through text-gray-500" : ""
                  }`}
                >
                  <span className="font-semibold text-lg">{t.title}</span>
                  <span className="text-sm text-gray-600">{t.desc}</span>
                </div>
              </div>
              <button
                onClick={() => handleDelete(idx)}
                className="text-red-500 hover:text-red-700 text-xl active:scale-90 transition-transform"
              >
                🗑️
              </button>
            </div>
          ))}

          {todos.length === 0 && (
            <p className="text-center text-gray-500 italic">
              No tasks yet... Add one above! 🚀
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
