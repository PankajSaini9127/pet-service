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
import PricingTable from "./pages/pricingTable/PricingTable";
import NotFoundPage from "./pages/404NotFound/404Page";
import ServicePage from "./pages/our-service/ServicePage";
import ServiceDetails from "./pages/ServiceDetails/ServiceDetails";
import Auth from "./auth/Auth";
import { useSelector } from "react-redux";
import ResetPasswordPage from "./pages/resetPassword/ResetPassword";
import ProfilePage from "./pages/profile/ProfilePage";
import DoctorPage from "./pages/doctor/DoctorPage";


function Routing() {
  const {auth:{auth}} = useSelector(s=>s);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about-us" exact element={<AboutPage />} />
        <Route path="/contact-us" element={<ContectPage />} />
        <Route path="/booking" element={ auth ?<Booking/>:<Auth/>} />
        <Route path="/our-team" element={<OurTeamPage />} />
        <Route path="/pricing-table" element={<PricingTable/>}/>
        <Route path="/our-service" element={<ServicePage/>}/>
        <Route path="/single-service" element={<ServiceDetails/>} />
        <Route path="/reset-password/:email" element={<ResetPasswordPage/>}/>
        <Route path="/profile"  element={auth ? <ProfilePage/>: <Auth/>}/>
        <Route path="/doctor-list" element={<DoctorPage/>}/>
        
        <Route path="*" element={<NotFoundPage/>}/>

        {/* <Redirect to="/404"/> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Routing;
