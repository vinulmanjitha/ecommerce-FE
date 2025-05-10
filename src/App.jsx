import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageRouter from './PageRouter';
import 'react-toastify/dist/ReactToastify.css';
import SignIn from './pages/SignIn';
import Login from './pages/Login';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<PageRouter />} />
        <Route path="/" element={<Login />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
