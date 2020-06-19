import React from 'react'
import ContactCopy from '../../components/contact/contact-main-copy'
import { Helmet } from 'react-helmet'

function Contact() {
    return (
        <React.Fragment>
            <Helmet>
                <title>Contact Us</title>
            </Helmet>

            <ContactCopy />
        </React.Fragment>
    )
}

export default Contact
