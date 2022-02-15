import React from 'react';



function ContactBody() {
  return (
    <section className="w3l-contact-11 py-5" id="contact">
     <div className="contacts-main py-lg-5 py-md-4">
         <div className="contant11-top-bg">
             <div className="container">
                <h3 className="title-big text-center mb-md-5 mb-4">Get in touch with us</h3>
                 <div className="d-grid contact section-gap">
                     <div className="contact-info-left d-grid text-center">
                         <div className="contact-info">
                            <img src="assets/images/office.png" alt="" className="img-fluid" />
                             <h4>Address</h4>
                             <p>#135 block, Barnard St. Brooklyn, London 10036, UK</p>
                         </div>
                         <div className="contact-info">
                            <img src="assets/images/support.png" alt="" className="img-fluid" />
                             <h4>Phone</h4>
                             <p><a href="tel:+44 7834 857829">+44 7834 857829</a></p>
                             <p><a href="tel:+44 987 654 321">+44 987 654 321</a></p>
                         </div>
                         <div className="contact-info">
                            <img src="assets/images/envelope.png" alt="" className="img-fluid" />
                             <h4>Mail</h4>
                             <p><a href="mailto:mail@example.com" className="email">mail@example.com</a></p>
                             <p><a href="mailto:mail@example.com" className="email">mail@example.com</a></p>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
         <div className="form-41-mian mt-5 pt-lg-5 pt-md-4">
             <div className="container">
                 <div className="d-grid align-form-map">
                     <div className="form-inner-cont">
                         <form action="https://sendmail.w3layouts.com/submitForm" method="post" className="signin-form">
                             <div className="form-input">
                                 <label for="w3lName">Name</label>
                                 <input type="text" name="w3lName" id="w3lName" placeholder="" />
                             </div>
                             <div className="form-input">
                                 <label for="w3lSender">Email(Required)*</label>
                                 <input type="email" name="w3lSender" id="w3lSender" placeholder="" required="" />
                             </div>
                             <div className="form-input">
                                 <label for="w3lMessage">Message(Required)*</label>
                                 <textarea placeholder="" name="w3lMessage" id="w3lMessage" required=""></textarea>
                             </div>

                             <button type="submit" className="btn btn-primary btn-style">Submit</button>

                         </form>
                     </div>
                     <div className="map">
                         <iframe
                             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001161.424489281!2d-78.01909140705047!3d42.72866436845163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sin!4v1570786994395!5m2!1sen!2sin"
                             frameborder="0" allowfullscreen=""></iframe>
                     </div>
                 </div>
             </div>
         </div>
         </div>
 </section>
  )
}

export default ContactBody