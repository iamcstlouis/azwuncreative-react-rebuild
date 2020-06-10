import React from 'react';
import HomeHero from '../../../components/home-hero/home-hero.component';
import WhatWeDo from '../../../components/what-we-do/what-we-do.component';
import OurServices from '../../../components/our-services/our-services.component';


const Homepage = () => {
    return (
        <section>
            <HomeHero />
            <WhatWeDo />
            <OurServices />
        </section>
    );
}

export default Homepage;
