import React from "react";
import HeroSection from "./HeroSection";
import OurTeam from "./OurTeam";
import News from "./News";
import Package from "./Package";
import Appoinment from "./Appoinment";
import Review from "./Review";
import About from "./About";
import StepToBook from "./StepToBook";
import Specification from "./Specification";

function Home() {
  return (
    <>
      <HeroSection/>
      <Specification/>
      <About/>
      <StepToBook/>
      <Review/>
      <Package/>
      <Appoinment/>
      <OurTeam />
      <News/>
    </>
  );
}

export default Home;
