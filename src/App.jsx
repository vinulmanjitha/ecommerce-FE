import React from 'react';
import NavbarComponent from './components/Navbar/NavbarComponent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Laptops from './pages/Laptops';
import HotDeals from './pages/HotDeals';
import Cart from './pages/Cart';
import Login from './pages/login';
import HomeLayout from './layouts/HomeLayout';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<HomeLayout/>}>
          <Route path="/laptops" element={<Laptops />} />
          <Route path="/hot-deals" element={<HotDeals />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
        <Route>
          <Route path="/" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
