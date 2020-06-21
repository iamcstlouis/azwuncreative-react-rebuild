import React from 'react'

import './styles.scss'

function ContactForm() {
    return (
        <div className='form container'>
            <form
                name='website-price-enquiry'
                method='post'
                data-netlify='true'
                data-netlify-honeypot='bot-field'
                className='azwun-contact-form'
                data-aos='fade-up'
                data-aos-delay='1800'
            >
                <input type='hidden' name='form-name' value='website-price-enquiry' />
                <input type='text' name='name' placeholder='Name' required />
                <input type='text' name='email' placeholder='Email' required />
                <input type='text' name='phone' placeholder='Phone' required />
                <input type='text' name='name-of-business' placeholder='Name of your business' required />
                <textarea name='project-details' placeholder='Project details' required></textarea>

                <button type='submit' className='azwun-btn azwun-btn--accent-background'>
                    <span className='azwun-btn__txt azwun-btn__txt--white'>Submit</span>
                </button>
            </form>
        </div>
    )
}

export default ContactForm
