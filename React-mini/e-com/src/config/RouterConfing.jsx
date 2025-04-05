import React from "react";
import {Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Notfound from "../pages/Notfound";
import ProductDetailed from "../pages/ProductDetailed";
import About from "../pages/About";
import Contact from "../pages/Contact";

export default function RouterConfing() {
  return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products-detailed/:id" element={<ProductDetailed/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<Notfound />} />
      </Routes>
  );
}
