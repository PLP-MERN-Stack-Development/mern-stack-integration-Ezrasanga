import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <Link to="/" className="font-bold text-xl text-blue-600">
        MERN Blog
      </Link>
      <div className="space-x-4">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        {user ? (
          <>
            <Link to="/create" className="hover:text-blue-600">New Post</Link>
            <button
              onClick={handleLogout}
              className="text-red-500 hover:underline"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:text-blue-600">Login</Link>
            <Link to="/register" className="hover:text-blue-600">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}
