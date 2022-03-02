import React from 'react'
import ServicesBody from './pages/ServicesBody';
import Breadcrumbs from './Breadcrumbs';
import Team from './Team';

function Services() {
  return (
    <>
        <Breadcrumbs title="Services" desc="What We Do"/>
        <ServicesBody />
        {/* <Team description="Meet Our Capable Team"/> */}
      </>
  )
}

export default Services