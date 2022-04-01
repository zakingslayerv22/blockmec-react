import React from 'react'
import Breadcrumbs from './Breadcrumbs';
import BuyBlcBody from './pages/BuyBlcBody';
import Team from './Team';


function BuyBlc() {
  return (
    <>
       <Breadcrumbs title="Buy $BLC" desc="Buy $BLC"/>
       <BuyBlcBody />
       {/* <Team description="Our Skilled Team"/> */}
      </>
  )
}

export default BuyBlc

