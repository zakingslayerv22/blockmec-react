import React from 'react'
import ContactBody from './pages/ContactBody';
import Breadcrumbs from './Breadcrumbs';

function Contact() {
  return (
    <>
        <Breadcrumbs title="Contact" desc="Our Contact Info"/>
        <ContactBody />
    </>
  )
}

export default Contact