import React, { Component } from 'react';
import OUR_SERVICES_DATA from './our-services.data';

import './our-services.styles.scss';

class OurServices extends Component {
    constructor(props) {
        super(props);

        this.state = {
            services: OUR_SERVICES_DATA
        }
    }

    render() {
        const { services } = this.state;
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
                                    <div className='content-wrapper'>
                                        <div className='service'>
                                            <div className='img-wrapper'>
                                                {/* <img data-aos='fade-left' /> */}
                                            </div>

                                            <div className='copy-wrapper'>
                                                <h2 data-aos='fade-right'>{}</h2>
                                                <p data-aos='fade-left'>{}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='device-img'>
                                    <div className='img-wrapper'>
                                        <img
                                            src={require('../../assets/imgs/home/iphone-x.png')}
                                            alt='iPhone'
                                            data-aos='zoom-in'
                                        />
                                    </div>
                                </div>

                                <div className='services__group services__group--2'>
                                    <div className='content-wrapper' v-for='(obj, two) in services2'>
                                        <div className='service'>
                                            <div className='img-wrapper'>
                                                {/* <img data-aos='fade-right' /> */}
                                            </div>

                                            <div className='copy-wrapper'>
                                                <h2 data-aos='fade-left'>{}</h2>
                                                <p data-aos='fade-right'>{}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='section-img-desktop'>
                                <div className='img-wrapper'>
                                    <img
                                        src={require('../../assets/imgs/home/iphone-x.png')}
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
}

export default OurServices;