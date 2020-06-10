import React from 'react';
import { Link } from 'react-router-dom';

import './footer.styles.scss'

const Footer = () => {

    const getYear = () => {
        return new Date().getFullYear();
    }

    return (
        <section id='footer' className='footer'>
            <div className='container'>
                <div className='content-wrapper'>
                    <div className='link-wrapper'>
                        <button
                            className='back-to-top'
                            v-if='$route.meta.showBackToTopBtn'
                        >
                            Back to top
                            </button>
                    </div>

                    <div className='top-section' data-aos='zoom-in' data-aos-once='true'>
                        <div className='logo-wrapper'>
                            <div className='logo'>
                                <img src={require('../../assets/imgs/global/azwun-logo-mark.svg')} alt='Azwun Creative Logo' />
                            </div>
                        </div>

                        <div className='azwun-btn azwun-btn--accent-border'>
                            <Link to='/contact'
                                className='azwun-btn__txt azwun-btn__txt--white'>
                                Get A Quote
                        </Link>
                        </div>

                        <div className='socials'>
                            <div className='content-wrapper'>
                                <div className='icn icn--facebook'>
                                    <a href='https://www.facebook.com/Azwun-Creative-105284587859335/' target='_blank'>
                                        <i className='fab fa-facebook-f'></i>
                                    </a>
                                </div>
                                <div className='icn icn--twitter'>
                                    <a href='https://twitter.com/azwuncreative' target='_blank'>
                                        <i className='fab fa-twitter'></i>
                                    </a>
                                </div>
                                <div className='icn icn--instagram'>
                                    <a href='https://www.instagram.com/azwuncreative/' target='_blank'>
                                        <i className='fab fa-instagram'></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='bottom-section'>
                        <div className='copyright'>
                            <div className='content-wrapper'>
                                <p>
                                    <span>Azwun Creative.</span>{getYear()} &copy; All Rights Reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;
