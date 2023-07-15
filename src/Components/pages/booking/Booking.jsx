import React from 'react';

//module
import Banner from '../../utils/Banner';
import Package from '../../utilsComponents/Package';
import Appoinment from '../../utilsComponents/Appoinment';
import OurTeam from '../../utilsComponents/OurTeam';



function Booking() {
  return (
    <>
      <Banner path={"Home / Booking"} page={"Booking"}/>
      <Package/>
      <Appoinment/>
      <OurTeam/>
    </>
  )
}

export default Booking
