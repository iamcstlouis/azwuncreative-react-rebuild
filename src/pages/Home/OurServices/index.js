import React from 'react';
import ServicesGroup1Data from './OurServicesList/ServicesData/services-group1-data';
import ServicesGroup2Data from './OurServicesList/ServicesData/services-group2-data';

import iphoneX from '../../../assets/imgs/home/iphone-x.png';

import './styles.scss';


const OurServices = () => {
    return (
        <section id='our-services' className='our-services'>
            <div className='container'>
                <div className='content-wrapper'>
                    <h1 data-aos='fade-right'>
                        Our <span>services.</span>
                    </h1>

                    <div className='flex-container'>
                        <div className='services'>
                            <div className='services__group services__group--1'>
                                <ServicesGroup1Data />
                            </div>

                            <div className='device-img'>
                                <div className='img-wrapper'>
                                    <img
                                        src={iphoneX}
                                        alt='iPhone'
                                        data-aos='zoom-in'
                                    />
                                </div>
                            </div>

                            <div className='services__group services__group--2'>
                                {/* <div className='content-wrapper' v-for='(obj, two) in services2'>
                                    <div className='service'>
                                        <div className='img-wrapper'>
                                        </div>

                                        <div className='copy-wrapper'>
                                            <h2 data-aos='fade-left'></h2>
                                            <p data-aos='fade-right'></p>
                                        </div>
                                    </div>
                                </div> */}
                                <ServicesGroup2Data />
                            </div>
                        </div>

                        <div className='section-img-desktop'>
                            <div className='img-wrapper'>
                                <img
                                    src={iphoneX}
                                    alt='iPhone'
                                    data-aos='fade-right'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OurServices;
