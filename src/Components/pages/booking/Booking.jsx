import React from 'react';

//module
import Banner from '../../utils/Banner';
import Package from '../../utilsComponents/Package';
import Appoinment from '../../utilsComponents/Appoinment';
import OurTeam from '../../utilsComponents/OurTeam';
import { membersAboutPage } from '../../../dummyData/TeamMember';



function Booking() {
  return (
    <>
      <Banner path={"Home / Booking"} page={"Booking"}/>
      <Package/>
      <Appoinment/>
      <OurTeam members={membersAboutPage} exprience={false}/>
    </>
  )
}

export default Booking
