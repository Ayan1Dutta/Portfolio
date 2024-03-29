import React from 'react'
import AboutContent from '../Componants/AboutContent'
import Footer from '../Componants/Footer'
import HeroImg2 from '../Componants/HeroImg2'
import Navbar from '../Componants/Navbar'

const About = () => {
  return (
    <div>
    <Navbar/>
    <HeroImg2 heading="About Me" text="My Tech Stacks and Coding Experiences"/>
    <AboutContent/>
    <Footer/>
    </div>
  )
}

export default About