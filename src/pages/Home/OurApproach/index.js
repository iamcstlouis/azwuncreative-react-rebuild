import React from 'react'
import Cards from './Cards'
import OurApproachMainCopy from './MainCopy'

import './styles.scss'

function OurApproach() {
    return (
        <section id='our-approach' className='our-approach'>
            <div className='container'>
                <div className='content-wrapper'>
                    <h1 data-aos='fade-up'>
                        Our <span>approach.</span>
                    </h1>

                    <Cards />
                    <OurApproachMainCopy />
                </div>
            </div>
        </section>
    )
}

export default OurApproach
