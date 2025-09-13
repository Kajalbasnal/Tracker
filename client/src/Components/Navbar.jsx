import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    `relative px-4 py-2 rounded-lg font-medium transition-all duration-300 
    ${isActive 
      ? "text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-white after:rounded-full"
      : "text-white/90 hover:text-white hover:scale-105 hover:bg-white/10"}`;

  return (
    <nav className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-500 shadow-lg sticky top-0 z-50 backdrop-blur-md">
      <div className="flex justify-between items-center px-6 py-3">
        {/* Left - Logo/Title */}
        <NavLink 
          to="/" 
          className="text-2xl font-extrabold tracking-wide text-white drop-shadow-md hover:scale-105 transition-transform"
        >
          Planner ✨
        </NavLink>

        {/* Center - Links */}
        <div className="flex gap-6 text-lg">
          <NavLink to="/to-do-list" className={linkClass}>
            📝 Todo List
          </NavLink>
          <NavLink to="/timer" className={linkClass}>
            ⌛ Timer
          </NavLink>
          <NavLink to="/notes" className={linkClass}>
            📋 Notes
          </NavLink>
          <NavLink to="/progress" className={linkClass}>
            📈 Progress
          </NavLink>
        </div>

        {/* Right - Placeholder for future (profile/settings) */}
        <div className="text-white/90 font-medium hidden md:block">
          🌙
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
