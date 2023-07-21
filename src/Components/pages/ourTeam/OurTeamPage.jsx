import React from 'react'

//banner
import Banner from '../../utils/Banner'

//components
import OurTeam from "../../utilsComponents/OurTeam";

//team member dummy data
import { teamMemberExprienced } from '../../../dummyData/TeamMember';



function OurTeamPage() {
  return (
    <>
      <Banner page={'Our Team'} path={'Home / Our Team'}/>
      <OurTeam members={teamMemberExprienced} exprience={true}/>
    </>
  )
}

export default OurTeamPage
