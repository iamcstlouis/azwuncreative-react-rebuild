import React from 'react';
import ProjectsData from './projects-list'

import './our-work.styles.scss'

const OurWork = () => {
    return (
        <section id='our-work' className='our-work under-nav'>
            <div className='container'>
                <div className='content-wrapper'>
                    <h1 data-aos='zoom-in'>
                        Our <span>work</span>
                    </h1>

                    <div className='projects'>
                        <ProjectsData />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OurWork;



