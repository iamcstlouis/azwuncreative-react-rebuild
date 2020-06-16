import React from 'react';
import { Helmet } from 'react-helmet';

import OurWork from '../../components/our-work/our-work.component'

const Work = () => {
    return (
        <>
            <Helmet>
                <title>Our Work</title>
            </Helmet>

            <OurWork />
        </>
    );
}

export default Work;
