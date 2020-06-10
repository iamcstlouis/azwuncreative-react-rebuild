import React from 'react';
import { Link } from 'react-router-dom'
import './home-hero.styles.scss';
import './../../assets/scss/_azwun-btns.scss'

const HomeHero = () => {
    return (
        <section id="home-hero" className="home-hero under-nav">
            <div className='container'>
                <div className="content-wrapper" data-aos="fade-up">
                    <h1 className="home-hero-hdr">Azwun Creative</h1>
                    <p>Designing & building bespoke websites that enhance your brand and make you stand out from the crowd and competition.</p>
                    <h3 className="quote-link">Need a website?</h3>
                    <div className="azwun-btn azwun-btn--accent-border" data-aos="fade-up">
                        <Link
                            className="azwun-btn__txt azwun-btn__txt--white"
                            to='/contact'
                        >Get A Quote
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeHero;