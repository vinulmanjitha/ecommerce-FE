import React from 'react';
import NavbarComponent from './components/Navbar/NavbarComponent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import HomeLayout from './layouts/HomeLayout';
import PageRouter from './PageRouter';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<PageRouter />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
