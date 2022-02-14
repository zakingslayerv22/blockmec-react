import React from 'react'

function Breadcrumbs() {
  return (
    <section className="w3l-about-breadcrumb text-left">
    <div className="breadcrumb-bg breadcrumb-bg-about py-sm-5 py-4">
        <div className="container grid-breadcrumb py-2">
            <h2 className="title-big">About Us</h2>
            <ul className="breadcrumbs-custom-path mt-md-2">
                <li><a href="index.html">Home</a></li>
                <li className="active"><span className="fa fa-arrow-right mx-2" aria-hidden="true"></span> About Us </li>
            </ul>
        </div>
    </div>
</section>
  )
}

export default Breadcrumbs