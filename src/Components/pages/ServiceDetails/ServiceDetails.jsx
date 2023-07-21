import React from 'react'

import Banner from "../../utils/Banner";

//components
import News from "../../utilsComponents/News";
import DetailsService from './DetailsService';

function ServiceDetails() {
  return (
    <>
      <Banner path={"Home / Service Details"} page={"Service Details"}/>
        <DetailsService/>
      <News/>
    </>
  )
}

export default ServiceDetails
