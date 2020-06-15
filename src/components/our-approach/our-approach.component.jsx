import React from 'react'
import { Link } from 'react-router-dom'
import Cards from './cards'

import './our-approach.styles.scss'

function OurApproach() {
    return (
        <section id='our-approach' className='our-approach'>
            <div className='container'>
            <div className='content-wrapper'>
                <h1 data-aos='fade-up'>
                Our <span>approach.</span>
                </h1>

                <div className='cards'>
                <ul className='cards-list'>
                    <Cards />
                </ul>
                </div>

                <div className='section-copy'>
                <p data-aos='fade-right'>
                    Just tell us what it is you have in mind and we’ll begin the process.
                    <span>Don’t know what you want?</span>
                </p>
                <p data-aos='fade-left'>No problem, sit back and let us do the work.</p>

                <div className='azwun-btn azwun-btn--accent-border' data-aos='zoom-in'>
                    <Link to='/contact'
                    className='azwun-btn__txt azwun-btn__txt--dark'
                    >Work With Us</Link>
                </div>
                </div>
            </div>
            </div>
  </section>
    )
}

export default OurApproach
