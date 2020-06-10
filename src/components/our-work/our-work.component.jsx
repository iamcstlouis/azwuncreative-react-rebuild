import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
                        <div className='project'>
                            <Link to='/contact' className='project-overlay' target='_blank'>
                                <div className='img-wrapper'>
                                    {/* <img data-aos='fade-up' /> */}
                                </div>

                                <div className='copy-wrapper'>
                                    <h2 className='project-name' data-aos='fade-left'></h2>
                                    <p className='project-desc' data-aos='fade-right'></p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OurWork;



