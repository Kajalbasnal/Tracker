import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    `px-4 py-2 rounded-lg font-medium transition-all duration-300 
    ${isActive 
      ? "bg-white text-red-500 shadow-md scale-105" 
      : "text-white hover:bg-white/20 hover:scale-105"}`;

  return (
    <nav className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-500 shadow-lg">
      <div className="flex justify-center gap-8 p-4 text-lg">
        <NavLink to="/to-do-list" className={linkClass}>
          📝 Todo List
        </NavLink>
        <NavLink to="/timer" className={linkClass}>
          ⌛ Timer
        </NavLink>
        <NavLink to="/explore" className={linkClass}>
          🔍 Explore
        </NavLink>
        <NavLink to="/calculator" className={linkClass}>
          🖩 Calculator
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
