import React from 'react'
import ContactCopy from './ContactContent'
import ContactForm from './ContactForm'
import { Helmet } from 'react-helmet'

function Contact() {
    return (
        <React.Fragment>
            <Helmet>
                <title>Contact Us</title>
            </Helmet>

            <ContactCopy />
            <ContactForm />
        </React.Fragment>
    )
}

export default Contact
