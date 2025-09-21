import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./pages/home.jsx";
import Services from "./pages/services.jsx";
import About from "./pages/about.jsx";
import Contact from "./pages/contact.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
