import React from 'react'
import Banner from '../../utils/Banner'
import About from '../../utilsComponents/About'
import Review from '../../utilsComponents/Review'
import News from '../../utilsComponents/News'
import OurTeam from '../../utilsComponents/OurTeam'
import MoreAbout from './MoreAbout';

//dummy data
import { membersAboutPage } from '../../../dummyData/TeamMember'



function AboutPage() {
  return (
    <>
    <Banner page={"About us"} path={"Home / About us"}/>
    <About/>
    <OurTeam members={membersAboutPage} exprience={true}/>
    <Review/>
    <MoreAbout/>
    <News/>
    </>
  )
}

export default AboutPage
