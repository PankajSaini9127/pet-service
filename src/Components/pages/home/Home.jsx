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

//dummydata
import {membersAboutPage} from "../../../dummyData/TeamMember"

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
      <OurTeam members={membersAboutPage} exprience={false}/>
      <News/>
    </>
  );
}

export default Home;
