import React from "react";
import ServiceAppoinment from "./ServiceAppoinment";
import HeroSection from "./HeroSection";
import OurTeam from "./OurTeam";
import News from "./News";

function Home() {
  return (
    <>
      <HeroSection />
      <ServiceAppoinment />
      <OurTeam />
      <News/>
    </>
  );
}

export default Home;
