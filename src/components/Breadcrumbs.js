import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';


function Breadcrumbs({title, desc}) {
  return (
    <section className="w3l-about-breadcrumb text-left">
    <div className="breadcrumb-bg breadcrumb-bg-about py-sm-5 py-4">
        <div className="container grid-breadcrumb py-2">
            <h2 className="title-big">{title}</h2>
            <ul className="breadcrumbs-custom-path mt-md-2">
                <li><Link to="/">Home</Link></li>
                <li className="active">
                  <span className="fa mx-2" aria-hidden="true"><FaArrowRight /></span> {desc} </li>
            </ul>
        </div>
    </div>
</section>
  )
}

export default Breadcrumbs