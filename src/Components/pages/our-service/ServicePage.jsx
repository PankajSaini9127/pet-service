import React from 'react'
import Banner from '../../utils/Banner'
import Package from '../../utilsComponents/Package';

import BookDogWalker from "./BookDogWalker";

function ServicePage() {
  return (
    <>
      <Banner path={"Home / Our Services"} page={"Our Services"}/>
      <BookDogWalker/>
      <Package/>
    </>
  )
}

export default ServicePage;
