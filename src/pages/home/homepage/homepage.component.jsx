import React from 'react';
import HomeHero from '../../../components/home-hero/home-hero.component';
import WhatWeDo from '../../../components/what-we-do/what-we-do.component';
import OurServices from '../../../components/our-services/our-services.component';
import OurValues from '../../../components/our-values/our-values.component';


const Homepage = () => {
    return (
        <section>
            <HomeHero />
            <WhatWeDo />
            <OurServices />
            <OurValues />
        </section>
    );
}

export default Homepage;
