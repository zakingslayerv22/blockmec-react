import React from 'react'
import Breadcrumbs from './Breadcrumbs';
import AboutBody from './pages/AboutBody';
import Team from './Team';


function About() {
  return (
    <>
       <Breadcrumbs title="About Us" desc="About"/>
       <AboutBody />
       <Team description="Our Skilled Team"/>
      </>
  )
}

export default About