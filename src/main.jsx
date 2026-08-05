import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./Landing_page/Home/HomePage";
import Signup from "./Landing_page/Signup/Signup";
import About from "./Landing_page/About/AboutPage";
import Products from "./Landing_page/Products/ProductPage";
import Pricing from "./Landing_page/Pricing/PricingPage";
import Support from "./Landing_page/Support/SupportPage";

import Navber from "./Landing_page/Navber";
import Footer from "./Landing_page/Footer";
import NotFoundPage from "./Landing_page/NotFoundPage";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navber/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/support" element={<Support />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer/>
  </BrowserRouter>
);
