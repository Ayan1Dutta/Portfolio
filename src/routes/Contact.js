import React from 'react'
import Footer from '../Componants/Footer'
import From from '../Componants/From'
import HeroImg2 from '../Componants/HeroImg2'
import Navbar from '../Componants/Navbar'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="CONTACT" text="Lets Have a Chat"/>
      <From/>
      <Footer />
    </div>
  )
}

export default Contact