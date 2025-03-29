// src/components/Admin/Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-5">
      <h2 className="text-xl font-bold mb-5">Admin Panel</h2>
      <ul>
        <li className="mb-4">
          <Link to="/admin/dashboard" className="hover:text-gray-300">
            Dashboard
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/admin/user-management" className="hover:text-gray-300">
            User Management
          </Link>
        </li>
        <li className="mb-4">
          <Link to="/admin/challenges" className="hover:text-gray-300">
            Challenges
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
