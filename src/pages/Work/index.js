import React from 'react';
import { Helmet } from 'react-helmet';

import OurWork from './OurWork'

const Work = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Our Work</title>
            </Helmet>

            <OurWork />
        </React.Fragment>
    );
}

export default Work;
