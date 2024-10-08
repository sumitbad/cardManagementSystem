import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/auth/Login.js';
import Register from './components/auth/Signup.js';
import Cart from './components/Cart';
// import '../style.css'; 

const App = () => {
  const isAuthenticated = !!localStorage.getItem('token'); // Check if user is logged in

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} /> {/* Redirect to login */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={isAuthenticated ? <Cart /> : <Navigate to="/login" replace />} /> {/* Redirect to login if not authenticated */}
      </Routes>
    </Router>
  );
};

export default App;
