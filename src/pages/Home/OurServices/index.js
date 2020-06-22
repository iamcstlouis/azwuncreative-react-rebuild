import React from 'react';
import OurServicesData from './OurServicesList/ServicesData'
import SingleService from './OurServicesList/SingleService'

import iphoneX from '../../../images/home/iphone-x.png';

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
                                {
                                    OurServicesData.servicesGroup1.map((service) => (
                                        <SingleService serviceIcn={service.serviceIcn} alt={service.alt} serviceHdr={service.serviceHdr} serviceExcerpt={service.serviceExcerpt} key={service.id} />
                                    ))
                                }
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
                                {
                                    OurServicesData.servicesGroup2.map((service) => (
                                        <SingleService serviceIcn={service.serviceIcn} alt={service.alt} serviceHdr={service.serviceHdr} serviceExcerpt={service.serviceExcerpt} key={service.id} />
                                    ))
                                }
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
