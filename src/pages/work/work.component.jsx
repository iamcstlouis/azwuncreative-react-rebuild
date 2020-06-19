import React from 'react';
import { Helmet } from 'react-helmet';

import OurWork from '../../components/our-work/our-work.component'

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
