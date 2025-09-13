import React, { useEffect, useState } from "react";

const ToDoList = () => {
  const [todo, setTodo] = useState("");
  const [desc, setDesc] = useState("");
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

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

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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
    <div className="min-h-screen flex justify-center items-start bg-gradient-to-br from-orange-100 via-pink-100 to-red-100 p-8">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-2xl">
        {/* Header */}
        <h1 className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
          To-Do List
        </h1>

        {/* Input Section */}
        <div className="flex flex-col md:flex-row gap-3 mb-6">
          <input
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            type="text"
            className="flex-1 border border-gray-200 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 shadow-sm"
            placeholder="Task title..."
          />
          <input
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            type="text"
            className="flex-1 border border-gray-200 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 shadow-sm"
            placeholder="Description..."
          />
          <button
            onClick={handleAdd}
            className="bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full px-6 py-2 font-semibold shadow-md hover:scale-105 active:scale-95 transition-all"
          >
            ➕ Add
          </button>
        </div>

        {/* Todo List */}
        <div className="space-y-3">
          {todos.map((t, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between bg-gradient-to-r from-pink-50 to-orange-50 border border-gray-200 rounded-xl px-5 py-3 shadow-sm hover:shadow-md transition-all"
            >
              <div
                className="flex items-center gap-3 cursor-pointer"
                onClick={() => handleToggle(idx)}
              >
                {!t.completed ? (
                  <span className="text-gray-400 text-2xl">○</span>
                ) : (
                  <span className="text-green-500 text-2xl">✔</span>
                )}
                <div
                  className={`flex flex-col transition-all ${
                    t.completed ? "line-through text-gray-500" : "text-gray-800"
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
                🗑
              </button>
            </div>
          ))}

          {todos.length === 0 && (
            <p className="text-center text-gray-500 italic py-6">
              🚀 No tasks yet. Start by adding one above and crush it today!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
