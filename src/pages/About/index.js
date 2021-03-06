import React from 'react';
import AboutMainContent from './AboutContent'

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
