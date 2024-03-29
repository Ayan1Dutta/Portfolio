import React from 'react'
import Footer from '../Componants/Footer';
import HeroImg2 from '../Componants/HeroImg2';
import Navbar from '../Componants/Navbar';
import Work from '../Componants/Work';

const Projects = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PROJECTS" text="Some of My Recent Works"/>
      <Work/>
      <Footer />
    </div>
  );
}

export default Projects