//components
import About from "../../utilsComponents/About";
import Appoinment from "../../utilsComponents/Appoinment";
import HeroSection from "../../utilsComponents/HeroSection"
import News from "../../utilsComponents/News";
import OurTeam from "../../utilsComponents/OurTeam";
import Package from "../../utilsComponents/Package";
import Review from "../../utilsComponents/Review";
import Specification from "../../utilsComponents/Specification";
import StepToBook from "../../utilsComponents/StepToBook";

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
