import React from 'react';
import NavbarComponent from './components/Navbar/NavbarComponent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Laptops from './pages/Laptops';
import HotDeals from './pages/HotDeals';
import Cart from './pages/Cart';
const App = () => {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Laptops />} />
        <Route path="/Hot-Deals" element={<HotDeals />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
