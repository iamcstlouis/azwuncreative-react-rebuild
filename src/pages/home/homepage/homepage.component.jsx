import React from 'react';
import HomeHero from '../../../components/home-hero/home-hero.component';
import WhatWeDo from '../../../components/what-we-do/what-we-do.component';
import OurServices from '../../../components/our-services/our-services.component';
import OurValues from '../../../components/our-values/our-values.component';
import OurApproach from '../../../components/our-approach/our-approach.component';

import { Helmet } from 'react-helmet';

import '../../../assets/scss/_azwun-btns.scss';

const Homepage = () => {
    return (
        <section>
            <Helmet>
                <title>Azwun Creative - Specialising in Bespoke Web Design & Development</title>
            </Helmet>

            <HomeHero />
            <WhatWeDo />
            <OurServices />
            <OurValues />
            <OurApproach />
        </section>
    );
}

export default Homepage;
