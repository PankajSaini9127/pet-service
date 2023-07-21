import React from 'react'
import Banner from '../../utils/Banner'
import Package from '../../utilsComponents/Package'
import OurTeam from '../../utilsComponents/OurTeam'
import { membersAboutPage } from '../../../dummyData/TeamMember'

function PricingTable() {
  return (
    <>
      <Banner path={"Home / Pricing Table"} page={"Pricing Tabel"} />
      <Package pricingTabel={true}/>
      <OurTeam members={membersAboutPage}/>
    </>
  )
}

export default PricingTable
