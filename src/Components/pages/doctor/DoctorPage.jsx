import React from 'react'

//components
import Banner from '../../utils/Banner';
import ListDoctors from './ListDoctors';

function DoctorPage() {
  return (
    <>
      <Banner path={"Home / Doctors"} page={"Doctors"}/>
      <ListDoctors/>
    </>
  )
}

export default DoctorPage;
