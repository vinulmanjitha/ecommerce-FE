import React from 'react'
import Laptops from './pages/Laptops';
import HotDeals from './pages/HotDeals';
import Cart from './pages/Cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeLayout from './layouts/HomeLayout';
import ContactUs from './pages/FooterPages/customer-care/ContactUs';
import ReturnAndRefundPolicy from './pages/FooterPages/customer-care/ReturnAndRefundPolicy';
import FAQs from './pages/FooterPages/customer-care/FAQs';
import OurStory from './pages/FooterPages/about-us/OurStory';
import Careers from './pages/FooterPages/about-us/Careers';
import BlogNews from './pages/FooterPages/about-us/BlogNews';
import Forum from './pages/FooterPages/community/Forum';
import Events from './pages/FooterPages/community/Events';
import Blog from './pages/FooterPages/community/Blog';
import Contributors from './pages/FooterPages/community/Contributors';
import Support from './pages/FooterPages/help/Support';
import TermsAndConditions from './pages/FooterPages/help/TermsAndConditions';
import PrivacyPolicy from './pages/FooterPages/help/PrivacyPolicy';
import Item from './pages/Item';
import AddProduct from './pages/AddProduct';
import SignIn from './pages/SignIn';

const PageRouter = () => {
  return (
    <div>
      <Routes>
        <Route element={<HomeLayout />}>
          {/* Main Pages */}
          <Route path="/laptops" element={<Laptops />} />
          <Route path="/hot-deals" element={<HotDeals />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/item/:id" element={<Item />} />
          <Route path="/add-product" element={<AddProduct />} />



          
          {/* Customer Care Pages */}
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/return-refund" element={<ReturnAndRefundPolicy />} />
          <Route path="/faqs" element={<FAQs />} />
          
          {/* About Us Pages */}
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog-news" element={<BlogNews />} />
          
          {/* Community Pages */}
          <Route path="/forum" element={<Forum />} />
          <Route path="/events" element={<Events />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contributors" element={<Contributors />} />
          
          {/* Help Pages */}
          <Route path="/support" element={<Support />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Route>

      </Routes>

    </div>
  )
}

export default PageRouter
