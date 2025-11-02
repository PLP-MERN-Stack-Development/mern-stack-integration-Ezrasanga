import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

// 🧩 Pages & components
import Navbar from "./components/Navbar";
import PostList from "./components/PostList";
import PostView from "./pages/PostView";
import PostForm from "./pages/PostForm";
import Login from "./pages/Login";
import Register from "./pages/Register";

import PrivateRoute from "./components/PrivateRoute";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-gray-50">
          <Navbar />
          <main className="flex-grow container mx-auto p-4">
            <Routes>
              {/* Public routes */}
              <Route path="/" element={<PostList />} />
              <Route path="/posts/:id" element={<PostView />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

              {/* Protected routes */}
              <Route
                path="/create"
                element={
                  <PrivateRoute>
                    <PostForm />
                  </PrivateRoute>
                }
              />
              <Route
                path="/edit/:id"
                element={
                  <PrivateRoute>
                    <PostForm />
                  </PrivateRoute>
                }
              />

              {/* Fallback */}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </main>
          <footer className="text-center py-4 text-sm text-gray-600 border-t">
            © {new Date().getFullYear()} MERN Blog App
          </footer>
        </div>
      </Router>
    </AuthProvider>
  );
}
