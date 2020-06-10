import React from 'react';
import { Link } from 'react-router-dom';

import './what-we-do.styles.scss'

const WhatWeDo = () => {
    return (
        <section id='what-we-do' className='what-we-do'>
            <div className='container'>
                <div className='content-wrapper'>
                    <h1 data-aos='fade-left'>
                        What we
          <span>do.</span>
                    </h1>

                    <div className='skills'>
                        <div className='skill skill-01'>
                            <div className='img-wrapper'>
                                <img
                                    src={require('../../assets/imgs/home/img-01.jpg')}
                                    alt='Chalk board'
                                    data-aos='fade-right'
                                />
                            </div>
                            <div className='copy-wrapper' data-aos='fade-up'>
                                <h2>
                                    From concept to
                                    completion
                                </h2>
                                <p>Putting your customers at the heart of our process, ensuring that their journey through your site is a smooth one.</p>
                            </div>
                        </div>

                        <div className='skill skill-02'>
                            <div className='img-wrapper'>
                                <img src={require('../../assets/imgs/home/img-02.jpg')}
                                    alt='Coding website'
                                    data-aos='fade-left' />
                            </div>
                            <div className='copy-wrapper' data-aos='fade-up'>
                                <h2>Building for your brand</h2>
                                <p>Working with you to enhance your digital presence, ensuring our creative solutions are all in line with your business goals.</p>
                            </div>
                        </div>

                        <div className='skill skill-03-desktop'>
                            <div className='img-wrapper'>
                                <img
                                    src={require('../../assets/imgs/home/img-05-3.jpg')}
                                    alt='collaboration'
                                    data-aos='fade-up'
                                />
                            </div>
                            <div className='copy-wrapper'>
                                <h2 data-aos='fade-up'>Bringing your vision to life</h2>
                                <p
                                    className='skill-03'
                                    data-aos='fade-up'
                                >You only have one chance to make a first impression. Let’s make it one that has your customers coming back for more.</p>

                                <div className='azwun-btn azwun-btn--accent-border'>
                                    <Link to='/work'
                                        className='azwun-btn__txt azwun-btn__txt--dark'
                                    >See Our Work
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='skill skill-03-mobile'>
                <div className='img-wrapper'>
                    <img src={require('../../assets/imgs/home/img-05-3.jpg')}
                        alt='collaboration'
                        data-aos='zoom-in' />
                </div>

                <div className='copy-wrapper'>
                    <h2 data-aos='fade-up'>Bringing your vision to life</h2>

                    <p data-aos='fade-up'>
                        You only have one chance to make a first impression. Let’s make it one that has your customers coming back for more.
                    </p>

                    <div className='azwun-btn azwun-btn--accent-border' data-aos='zoom-in'>
                        <Link to='work'
                            className='azwun-btn__txt azwun-btn__txt--dark'
                        >See Our Work
                        </Link>
                    </div>
                </div>
            </div >
        </section >
    );
}

export default WhatWeDo;
