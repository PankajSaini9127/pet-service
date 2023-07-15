import React from 'react'

//modules
import Banner from '../../utils/Banner'

//components
import ContactInfo from "./Details";
import BranchDetails from './BranchDetails';

function ContectPage() {
  return (
    <>
      <Banner page={"Contact us"} path={"Home / Contact us"}/>
      <ContactInfo/>
      <BranchDetails/>
    </>
  )
}

export default ContectPage
