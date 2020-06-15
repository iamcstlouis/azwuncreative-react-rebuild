import React from 'react'
import ContactForm from './contact-form.component'

import './contact-main-copy.styles.scss'

function ContactCopy() {
  return (
    <section id='contact-azwun' className='contact-azwun under-nav'>
      <div className='container'>
        <div className='content-wrapper'>
          <div className='hdrs'>
            <h1 data-aos='zoom-in'>Contact.</h1>
            <h2 data-aos='fade-up'>New ideas make for brilliant beginnings!</h2>
          </div>

          <div className='contact-copy' data-aos='fade-up' data-aos-delay='1500'>
            <div className='content-wrapper'>
              <p>Please fill out the form below and we’ll be in touch as soon as possible. We look forward to hearing about your business and how we can help create or improve your online presence.</p>
            </div>
          </div>

          <ContactForm />

        </div>
      </div>
    </section>
  )
}

export default ContactCopy
