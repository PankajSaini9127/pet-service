import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

//components  / layout
import Navbar from "./layout/navbar/Navbar";
import Footer from "./layout/Footer";

//Pages
import Home from "./pages/home/Home";
import AboutPage from "./pages/about/AboutPage";
import ContectPage from "./pages/contact/ContectPage";
import Booking from "./pages/booking/Booking";
import OurTeamPage from "./pages/ourTeam/OurTeamPage";

function Routing() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about-us" exact element={<AboutPage />} />
        <Route path="/contact-us" element={<ContectPage />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/our-team" element={<OurTeamPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Routing;
