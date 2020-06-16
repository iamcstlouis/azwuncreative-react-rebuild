import React from 'react'
import ContactCopy from '../../components/contact/contact-main-copy'
import { Helmet } from 'react-helmet'

function Contact() {
    return (
        <>
            <Helmet>
                <title>Contact Us</title>
            </Helmet>

            <ContactCopy />
        </>
    )
}

export default Contact
