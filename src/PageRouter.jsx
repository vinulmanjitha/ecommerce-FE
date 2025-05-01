import React from 'react'
import Laptops from './pages/Laptops';
import HotDeals from './pages/HotDeals';
import Cart from './pages/Cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeLayout from './layouts/HomeLayout';

const PageRouter = () => {
  return (
    <div>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route path="/laptops" element={<Laptops />} />
          <Route path="/hot-deals" element={<HotDeals />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>

    </div>
  )
}

export default PageRouter
