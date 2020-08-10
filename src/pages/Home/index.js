import React from 'react';
import HomeHero from './HomeHero';
import WhatWeDo from './WhatWeDo';
// import OurServices from './OurServices';
import OurValues from './OurValues';
import OurApproach from './OurApproach';

import { Helmet } from 'react-helmet';

import '../../assets/scss/_azwun-btns.scss';

const Homepage = () => {
    return (
        <section>
            <Helmet>
                <title>Azwun Creative - Specialising in Bespoke Web Design & Development</title>
            </Helmet>

            <HomeHero />
            <WhatWeDo />
            {/* <OurServices /> */}
            <OurValues />
            <OurApproach />
        </section>
    );
}

export default Homepage;
