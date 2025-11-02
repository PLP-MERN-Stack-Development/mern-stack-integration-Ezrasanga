// client/src/contexts/AuthContext.jsx
import React, { createContext, useState, useEffect } from 'react';
const AuthContext = createContext();

export const AuthProvider = ({children})=>{
  const [user, setUser] = useState(()=> JSON.parse(localStorage.getItem('user')));
  const [token, setToken] = useState(()=> localStorage.getItem('token'));

  useEffect(()=> {
    if(token) {
      localStorage.setItem('token', token);
    } else localStorage.removeItem('token');
  }, [token]);

  useEffect(()=> {
    if(user) localStorage.setItem('user', JSON.stringify(user));
    else localStorage.removeItem('user');
  }, [user]);

  const logout = ()=> { setUser(null); setToken(null); }
  const login = ({ user, token })=> { setUser(user); setToken(token); }

  return <AuthContext.Provider value={{ user, token, login, logout }}>{children}</AuthContext.Provider>
};
export default AuthContext;
