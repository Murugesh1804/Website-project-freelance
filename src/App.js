import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import Login from './Compoents/Login'; // Assuming you have a Login component
import SignUp from './Compoents/SignUp';
import Dashboard from './Compoents/Dashboard';
import User from './User/Pages/Main';

function App() {
  return (
    <Router>
   
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/UserPanel" element={<User />} />
        <Route path="/DashBoard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
