import React from 'react';
import AboutMainContent from '../../components/about-main-copy/about-main-content.component'

import { Helmet } from 'react-helmet';

const About = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>About Us</title>
            </Helmet>

            <AboutMainContent />
        </React.Fragment>
    );
}

export default About;
