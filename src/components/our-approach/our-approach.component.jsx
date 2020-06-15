import React from 'react'
import Cards from './cards'

import OurApproachMainCopy from './our-approach-main-copy.component'

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

                <OurApproachMainCopy />
            </div>
            </div>
  </section>
    )
}

export default OurApproach