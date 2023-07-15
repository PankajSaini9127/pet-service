import React from 'react'
import Banner from '../../utils/Banner'
import About from '../../utilsComponents/About'
import Review from '../../utilsComponents/Review'
import News from '../../utilsComponents/News'
import OurTeam from '../../utilsComponents/OurTeam'
import MoreAbout from './MoreAbout'

function AboutPage() {
  return (
    <>
    <Banner page={"About us"} path={"Home / About us"}/>
    <About/>
    <OurTeam/>
    <Review/>
    <MoreAbout/>
    <News/>
    </>
  )
}

export default AboutPage
