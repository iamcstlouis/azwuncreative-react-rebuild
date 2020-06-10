import React from 'react';
import { Link } from 'react-router-dom';

import './about-main-content.styles.scss';

const AboutMainContent = () => {
    return (
        <section id="about-azwun" className="about-azwun under-nav">
            <div className='container'>
                <div className="content-wrapper">
                    <h1 data-aos="zoom-in">
                        Introducing <span>Azwun Creative.</span>
                    </h1>

                    <div className="copy-section">
                        <div className="content-wrapper">
                            <p data-aos="fade-up">
                                Specialising in bespoke websites, we place huge emphasis on the value of collaboration. Our aim is to work <span className="txt-bold">with you
                                </span> to create a product that is completely tailored to your business and meets the needs of your customers.<span> At Azwun Creative, there is no ‘One size fits all’, we work<span className="txt-bold"> with you</span> to establish a strong online presence with a beautifully crafted website, completely customised to fit your brand. Collaborating<span className="txt-bold"> with you</span> every step of the way, we approach each project with a strategic mindset and an aim to transform your company.</span>

                                <span>
                                    Not only focusing on the design of your website, but equally it’s functionality. Keeping your customers at the heart of what we do, we’ll make sure they're met with an engaging, immersive experience. One that has them coming back for more.
                                </span>
                            </p>

                            <div className="azwun-btn azwun-btn--accent-border" data-aos="zoom-in">
                                <Link to='/work' className="azwun-btn__txt azwun-btn__txt--dark">
                                    Work With Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMainContent;
